-- Migration: Agreement Engine Schema for Street Hub Connect
-- This includes the complete schema from the stitch reference

-- Add agreement_status enum (if not exists)
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'agreement_status') THEN
        CREATE TYPE agreement_status AS ENUM (
          'pending_artist_approval', 
          'match_accepted', 
          'declined', 
          'completed'
        );
    END IF;
END $$;

-- Add match_intensity type
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'match_intensity') THEN
        CREATE TYPE match_intensity AS ENUM (
          'low',
          'medium',
          'high',
          'perfect'
        );
    END IF;
END $$;

-- Add match_reason type (array of reasons)
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'match_reason') THEN
        CREATE TYPE match_reason AS ENUM (
          'budget_aligned',
          'genre_fit',
          'demographic_match',
          'location_available',
          'past_success',
          'audience_overlap',
          'content_style',
          'calendar_available'
        );
    END IF;
END $$;

-- Create matches table (complete version)
CREATE TABLE IF NOT EXISTS matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
  opportunity_id UUID REFERENCES opportunities(id) ON DELETE CASCADE,
  affinity_score INTEGER CHECK (affinity_score >= 0 AND affinity_score <= 100) NOT NULL,
  match_intensity match_intensity DEFAULT 'medium',
  match_reasons match_reason[] DEFAULT ARRAY[]::match_reason[],
  agreed_budget NUMERIC(10, 2),
  status agreement_status DEFAULT 'pending_artist_approval',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure unique artist-opportunity pairs
  UNIQUE(artist_id, opportunity_id)
);

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_matches_artist ON matches(artist_id);
CREATE INDEX IF NOT EXISTS idx_matches_opportunity ON matches(opportunity_id);
CREATE INDEX IF NOT EXISTS idx_matches_status ON matches(status);
CREATE INDEX IF NOT EXISTS idx_matches_score ON matches(affinity_score DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Policy: Artists can see agreements where they are the talent
CREATE POLICY artist_view_own_matches ON matches
  FOR SELECT
  USING (auth.uid() IN (SELECT user_id FROM artists WHERE id = artist_id));

-- Policy: Artists can update their own matches (accept/decline)
CREATE POLICY artist_update_own_matches ON matches
  FOR UPDATE
  USING (auth.uid() IN (SELECT user_id FROM artists WHERE id = artist_id));

-- Policy: Partners can see agreements for their own opportunities
CREATE POLICY partner_view_own_matches ON matches
  FOR SELECT
  USING (auth.uid() IN (SELECT p.user_id FROM partners p JOIN opportunities o ON o.partner_id = p.id WHERE o.id = opportunity_id));

-- Policy: Partners can create matches for their opportunities
CREATE POLICY partner_create_own_matches ON matches
  FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT p.user_id FROM partners p JOIN opportunities o ON o.partner_id = p.id WHERE o.id = opportunity_id));

-- Policy: Partners can update matches for their opportunities
CREATE POLICY partner_update_own_matches ON matches
  FOR UPDATE
  USING (auth.uid() IN (SELECT p.user_id FROM partners p JOIN opportunities o ON o.partner_id = p.id WHERE o.id = opportunity_id));

-- Create deals table for tripartite agreement lifecycle
CREATE TABLE IF NOT EXISTS deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID REFERENCES matches(id) ON DELETE CASCADE,
  contract_url TEXT,
  invoice_url TEXT,
  payment_status TEXT DEFAULT 'pending',
  payment_amount NUMERIC(10, 2),
  payment_due_date TIMESTAMP WITH TIME ZONE,
  settlement_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_deals_match ON deals(match_id);

ALTER TABLE deals ENABLE ROW LEVEL SECURITY;

CREATE POLICY artist_view_own_deals ON deals
  FOR SELECT
  USING (auth.uid() IN (SELECT a.user_id FROM artists a JOIN matches m ON m.artist_id = a.id WHERE m.id = match_id));

CREATE POLICY partner_view_own_deals ON deals
  FOR SELECT
  USING (auth.uid() IN (SELECT p.user_id FROM partners p JOIN opportunities o ON o.partner_id = p.id JOIN matches m ON m.opportunity_id = o.id WHERE m.id = match_id));
