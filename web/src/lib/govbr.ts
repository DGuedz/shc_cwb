export type GovBrMockResponse = {
  cpf: string;
  name: string;
  level: "bronze" | "prata" | "ouro";
  categories: string[];
};

/**
 * Mock Gov.br Service for local development and architecture design
 * Simulates the flow described:
 * 1. OAuth Redirect
 * 2. Fetching the "Selos" (reliability categories)
 * 3. Mapping categories to levels
 */
export class GovBrMockService {
  /**
   * Simulates the mapping of JSON categories from Gov.br to SHC levels
   */
  static determineLevel(categories: string[]): "bronze" | "prata" | "ouro" {
    const isGold = categories.some((c) =>
      c.toLowerCase().includes("certificado digital") || c.toLowerCase().includes("biometria facial")
    );
    if (isGold) return "ouro";

    const isSilver = categories.some((c) =>
      c.toLowerCase().includes("bancos credenciados") || c.toLowerCase().includes("cnh")
    );
    if (isSilver) return "prata";

    return "bronze";
  }

  /**
   * Simulates an auth callback that returns the mocked payload
   */
  static async simulateAuthCallback(role: "artist" | "contractor", requestedLevel: "bronze" | "prata" | "ouro" = "bronze"): Promise<GovBrMockResponse> {
    // Artificial delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const categories = requestedLevel === "ouro" 
      ? ["Validação por certificado digital", "Biometria facial TSE"]
      : requestedLevel === "prata"
      ? ["Validação por bancos credenciados"]
      : ["Validação básica INSS"];

    return {
      cpf: role === "contractor" ? "123.456.789-00" : "098.765.432-11",
      name: role === "contractor" ? "Empresa Contratante S.A." : "Artista Demo",
      level: requestedLevel,
      categories,
    };
  }
}
