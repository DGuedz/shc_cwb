import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AppShell, SectionIntro } from "@/components/ui";
import { PublicArtistProfile } from "@/components/views";
import { getPublicArtistBySlug, getPublicArtistSlugs } from "@/lib/data";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

type ArtistProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getPublicArtistSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArtistProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = await getPublicArtistBySlug(slug);

  if (!artist) {
    return {
      title: "Perfil nao encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${artist.stageName} | Catalogo Publico`;
  const description = `${artist.stageName} atua em ${artist.genre}, base ${artist.city}/${artist.state}, com faixa inicial a partir de R$ ${artist.minFee.toLocaleString("pt-BR")}.`;
  const profileUrl = `/catalogo/${artist.slug}`;
  const imageUrl = absoluteUrl(`${profileUrl}/opengraph-image`);

  return {
    title,
    description,
    alternates: {
      canonical: profileUrl,
    },
    openGraph: {
      type: "profile",
      url: profileUrl,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${artist.stageName} no ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ArtistProfilePage({ params }: ArtistProfilePageProps) {
  const { slug } = await params;
  const artist = await getPublicArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(`/catalogo/${artist.slug}`),
    name: artist.stageName,
    mainEntity: {
      "@type": "Person",
      name: artist.stageName,
      description: artist.bio,
      address: {
        "@type": "PostalAddress",
        addressLocality: artist.city,
        addressRegion: artist.state,
        addressCountry: "BR",
      },
      knowsAbout: [artist.genre, ...artist.tags],
    },
  };

  return (
    <AppShell badge="Perfil publico">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      <div className="space-y-12">
        <SectionIntro
          eyebrow="Public dossier"
          title={artist.stageName}
          body="Perfil individual indexavel com dados essenciais para descoberta inicial, metadata propria e ativos de compartilhamento por entidade."
        />
        <PublicArtistProfile artist={artist} />
      </div>
    </AppShell>
  );
}
