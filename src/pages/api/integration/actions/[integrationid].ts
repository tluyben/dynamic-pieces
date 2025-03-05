import type { NextApiRequest, NextApiResponse } from "next";
import { pieceIntegrations } from "../../../../generated_imports";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[] | { error: string }>
) {
  try {
    const { integrationid } = req.query;

    if (!integrationid || typeof integrationid !== "string") {
      return res.status(400).json({ error: "Integration ID is required" });
    }

    // Find the integration case-insensitively
    const integrationKey = Object.keys(pieceIntegrations).find(
      (key) => key.toLowerCase() === integrationid.toLowerCase()
    );

    if (!integrationKey || !pieceIntegrations[integrationKey]) {
      return res.status(404).json({ error: "Integration not found" });
    }

    const module = pieceIntegrations[integrationKey];

    if (!module.piece._actions) {
      return res.status(200).json([]);
    }

    const actions = Object.keys(module.piece._actions);
    res.status(200).json(actions);
  } catch (error) {
    console.error(`Error fetching actions for integration:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
}
