import { NextResponse, type NextRequest } from "next/server";

function hasAuthCookie(request: NextRequest) {
  return request.cookies.getAll().some((cookie) => cookie.name.startsWith("sb-"));
}

function getRole(request: NextRequest) {
  return request.cookies.get("shc-demo-role")?.value ?? request.cookies.get("shc-role")?.value;
}

function redirectToSignIn(request: NextRequest) {
  const url = new URL("/sign-in", request.url);
  url.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasDemoSession = Boolean(request.cookies.get("shc-demo-user")?.value);
  const hasSession = hasDemoSession || hasAuthCookie(request);
  const role = getRole(request);

  if (!hasSession) {
    return redirectToSignIn(request);
  }

  if (pathname.startsWith("/onboarding/artista") || pathname.startsWith("/dashboard/dossie")) {
    if (role !== "artist") {
      return NextResponse.redirect(new URL("/dashboard/matchboard", request.url));
    }
  }

  if (pathname.startsWith("/onboarding/contratante") || pathname.startsWith("/dashboard/matchboard") || pathname.startsWith("/oportunidades/criar")) {
    if (role !== "contractor") {
      return NextResponse.redirect(new URL("/dashboard/dossie", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/onboarding/artista",
    "/onboarding/contratante",
    "/dashboard/:path*",
    "/oportunidades/criar",
  ],
};
