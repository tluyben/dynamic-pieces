import type { NextApiRequest, NextApiResponse } from "next";
import { pieceIntegrations } from "../../../../../generated_imports";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { integrationId, actionId } = req.query;

    if (!integrationId || typeof integrationId !== "string") {
      return res.status(400).json({ error: "Integration ID is required" });
    }

    if (!actionId || typeof actionId !== "string") {
      return res.status(400).json({ error: "Action ID is required" });
    }

    // Find the integration case-insensitively
    const integrationKey = Object.keys(pieceIntegrations).find(
      (key) => key.toLowerCase() === integrationId.toLowerCase()
    );

    if (!integrationKey || !pieceIntegrations[integrationKey]) {
      return res.status(404).json({ error: "Integration not found" });
    }

    const module = pieceIntegrations[integrationKey];

    if (!module.piece._actions || !module.piece._actions[actionId]) {
      return res.status(404).json({ error: "Action not found" });
    }

    const actionProps = module.piece._actions[actionId].props;
    res.status(200).json(actionProps || {});
  } catch (error) {
    console.error(`Error fetching action props:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
}
