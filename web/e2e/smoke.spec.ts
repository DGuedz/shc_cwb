import { expect, test } from "@playwright/test";

const PUBLIC_ROUTES = [
  { path: "/", name: "Home" },
  { path: "/sign-in", name: "Sign In" },
  { path: "/waitlist", name: "Waitlist" },
  { path: "/quem-somos", name: "Quem Somos" },
  { path: "/news", name: "News" },
  { path: "/pitchdeck", name: "Pitchdeck" },
  { path: "/catalogo", name: "Catálogo" },
  { path: "/catalogo/vnxx-artist-1", name: "Perfil artista demo" },
];

for (const route of PUBLIC_ROUTES) {
  test(`${route.name} responde 200`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
  });
}

for (const route of PUBLIC_ROUTES) {
  test(`${route.name} tem DashboardNav`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page.locator("nav").first()).toBeVisible();
  });
}

test("Catálogo artista — sem header duplo", async ({ page }) => {
  await page.goto("/catalogo/vnxx-artist-1");
  const navCount = await page.locator("nav").count();
  expect(navCount).toBeLessThanOrEqual(2);
});

test("JSON-LD no perfil não contém < ou > literais", async ({ page }) => {
  await page.goto("/catalogo/vnxx-artist-1");
  const ldJson = await page.locator('script[type="application/ld+json"]').textContent();
  if (ldJson) {
    expect(ldJson).not.toMatch(/<[^/!]/);
    expect(ldJson).not.toMatch(/[^\\]>/);
  }
});

test("Footer aparece em quem-somos", async ({ page }) => {
  await page.goto("/quem-somos");
  await expect(page.locator("footer")).toBeVisible();
});

test("Footer aparece em news", async ({ page }) => {
  await page.goto("/news");
  await expect(page.locator("footer")).toBeVisible();
});

test("Footer aparece no catálogo público", async ({ page }) => {
  await page.goto("/catalogo");
  await expect(page.locator("footer")).toBeVisible();
});

test("Footer aparece no perfil do artista", async ({ page }) => {
  await page.goto("/catalogo/vnxx-artist-1");
  await expect(page.locator("footer")).toBeVisible();
});

test("/dashboard redireciona sem sessão", async ({ page }) => {
  const response = await page.goto("/dashboard/dossie");
  const finalUrl = page.url();
  const redirected = finalUrl.includes("/sign-in") || response?.status() === 302;
  expect(redirected).toBeTruthy();
});
