import fs from "node:fs";
import path from "node:path";

import { chromium, devices } from "playwright";

const baseUrl = "http://127.0.0.1:3200";
const evidenceDir = "/Users/doublegreen/Music/shc_cwb/web/.trae/specs/estabilizar-visualizacao-publica/evidence";

const browser = await chromium.launch({ headless: true });
const results = [];

async function runCase(name, options, testFn) {
  const context = await browser.newContext(options);
  const page = await context.newPage();
  const consoleMessages = [];
  const pageErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error" || msg.type() === "warning") {
      consoleMessages.push({ type: msg.type(), text: msg.text() });
    }
  });
  page.on("pageerror", (error) => pageErrors.push(String(error)));

  try {
    const detail = await testFn(page);
    results.push({ name, status: "passed", consoleMessages, pageErrors, ...detail });
  } catch (error) {
    const screenshot = path.join(evidenceDir, `${name}-failure.png`);
    try {
      await page.screenshot({ path: screenshot, fullPage: true });
    } catch {}

    results.push({
      name,
      status: "failed",
      error: String(error),
      screenshot,
      consoleMessages,
      pageErrors,
    });
  } finally {
    await context.close();
  }
}

await runCase("home-desktop", { viewport: { width: 1440, height: 900 } }, async (page) => {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: "Descubra. Conecte. Contrate. Desenvolva." }).waitFor();
  await page.getByRole("link", { name: "abrir catalogo publico" }).waitFor();

  const screenshot = path.join(evidenceDir, "home-desktop.png");
  await page.screenshot({ path: screenshot, fullPage: true });

  return {
    finalUrl: page.url(),
    title: await page.title(),
    screenshot,
    checks: ["home heading visivel", "cta para catalogo visivel"],
  };
});

await runCase("catalogo-desktop", { viewport: { width: 1440, height: 900 } }, async (page) => {
  await page.goto(`${baseUrl}/catalogo`, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: "Diretorio B2B de talentos" }).waitFor();
  await page.getByRole("link", { name: "abrir perfil publico" }).first().waitFor();

  const screenshot = path.join(evidenceDir, "catalogo-desktop.png");
  await page.screenshot({ path: screenshot, fullPage: true });

  return {
    finalUrl: page.url(),
    title: await page.title(),
    screenshot,
    checks: ["titulo do catalogo visivel", "cards publicos visiveis"],
  };
});

await runCase("navegacao-desktop", { viewport: { width: 1440, height: 900 } }, async (page) => {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "abrir catalogo publico" }).click();
  await page.waitForURL(`${baseUrl}/catalogo`);
  await page.getByRole("heading", { name: "Diretorio B2B de talentos" }).waitFor();

  return {
    finalUrl: page.url(),
    title: await page.title(),
    checks: ["navegacao da home para o catalogo em desktop"],
  };
});

await runCase("home-mobile", { ...devices["iPhone 12"] }, async (page) => {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: "Descubra. Conecte. Contrate. Desenvolva." }).waitFor();
  await page.getByRole("link", { name: "abrir catalogo publico" }).waitFor();

  const screenshot = path.join(evidenceDir, "home-mobile.png");
  await page.screenshot({ path: screenshot, fullPage: true });

  return {
    finalUrl: page.url(),
    title: await page.title(),
    screenshot,
    checks: ["home renderiza em viewport mobile", "cta publica continua acessivel"],
  };
});

await runCase("navegacao-mobile", { ...devices["iPhone 12"] }, async (page) => {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "abrir catalogo publico" }).click();
  await page.waitForURL(`${baseUrl}/catalogo`);
  await page.getByRole("heading", { name: "Diretorio B2B de talentos" }).waitFor();

  return {
    finalUrl: page.url(),
    title: await page.title(),
    checks: ["navegacao da home para o catalogo em mobile"],
  };
});

await runCase("rota-protegida-dashboard", { viewport: { width: 1280, height: 800 } }, async (page) => {
  const response = await page.goto(`${baseUrl}/dashboard`, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: "Autenticacao e roteamento por papel" }).waitFor();

  const screenshot = path.join(evidenceDir, "dashboard-redirect-signin.png");
  await page.screenshot({ path: screenshot, fullPage: true });

  return {
    requestedUrl: `${baseUrl}/dashboard`,
    finalUrl: page.url(),
    initialStatus: response?.status() ?? null,
    screenshot,
    checks: ["anonimo redirecionado para sign-in", "pagina protegida nao abre diretamente"],
  };
});

await browser.close();

const outputPath = path.join(evidenceDir, "browser-automation.json");
fs.writeFileSync(outputPath, JSON.stringify({ baseUrl, generatedAt: new Date().toISOString(), results }, null, 2));

console.log(JSON.stringify({ outputPath, results }, null, 2));
