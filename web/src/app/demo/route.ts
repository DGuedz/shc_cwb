import { type NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const role = req.nextUrl.searchParams.get("role") === "contractor" ? "contractor" : "artist";

  const email = `demo+${role}@streethub.connect`;
  const userId = role === "artist" ? "demo-artist" : "demo-contractor";
  const redirectTo = role === "artist" ? "/dashboard/dossie" : "/dashboard/matchboard";

  const maxAge = String(60 * 60 * 8);
  const res = NextResponse.redirect(new URL(redirectTo, req.url));

  res.cookies.set("shc-demo-role", role, { path: "/", maxAge: Number(maxAge), sameSite: "lax" });
  res.cookies.set("shc-demo-user", userId, { path: "/", maxAge: Number(maxAge), sameSite: "lax" });
  res.cookies.set("shc-demo-email", email, { path: "/", maxAge: Number(maxAge), sameSite: "lax" });
  res.cookies.set("shc-role", role, { path: "/", maxAge: Number(maxAge), sameSite: "lax" });

  return res;
}
