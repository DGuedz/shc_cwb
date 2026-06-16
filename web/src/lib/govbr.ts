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
  static async simulateAuthCallback(role: "artist" | "contractor"): Promise<GovBrMockResponse> {
    // Artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (role === "contractor") {
      return {
        cpf: "123.456.789-00",
        name: "Empresa Contratante S.A.",
        level: "prata", // Starting as prata to show the upgrade flow
        categories: ["Validação por bancos credenciados"],
      };
    }

    return {
      cpf: "098.765.432-11",
      name: "Artista Demo",
      level: "bronze",
      categories: ["Validação básica INSS"],
    };
  }
}
