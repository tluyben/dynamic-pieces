// Auto-generated import statements
import { Piece } from "@activepieces/pieces-framework";

// Define the type for piece imports
type PiecePackage = {
  [key: string]: {
    auth: any;
    piece: any;
  };
};

/**
 * Helper function to find properties case-insensitively
 * Looks for a property that matches the given name regardless of case
 */
function findProperty(obj: any, propName: string): any {
  // If the property exists with exact name, return it
  if (obj[propName] !== undefined) {
    return obj[propName];
  }

  // Do a case-insensitive search
  const lowerPropName = propName.toLowerCase();
  for (const key of Object.keys(obj)) {
    if (key.toLowerCase() === lowerPropName) {
      return obj[key];
    }
  }

  throw new Error(`Property ${propName} not found in object`);
}

import * as PieceFreshdesk from "@activepieces/piece-freshdesk";

export const pieceIntegrations: PiecePackage = {
  Freshdesk: {
    auth: findProperty(PieceFreshdesk, "freshdeskAuth"),
    piece: findProperty(PieceFreshdesk, "freshdesk"),
  },
};

console.log(JSON.stringify(pieceIntegrations.Freshdesk.piece, null, 2));
