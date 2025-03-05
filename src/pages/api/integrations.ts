import type { NextApiRequest, NextApiResponse } from "next";
import { pieceIntegrations } from "../../generated_imports";

type Integration = {
  name: string;
  logo: string;
  id: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Integration[]>
) {
  try {
    const integrations = Object.entries(pieceIntegrations).map(
      ([key, module]) => {
        return {
          name: module.piece.displayName || key,
          logo: module.piece.logoUrl || "",
          id: key,
        };
      }
    );

    res.status(200).json(integrations);
  } catch (error) {
    console.error("Error fetching integrations:", error);
    res.status(500).json([]);
  }
}
