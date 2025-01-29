import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";

import * as schema from "../backend/src/db/schema";

dotenv.config({ path: ".env" });

const DRIZZLE_URL = process.env.DRIZZLE_URL || "";

if (DRIZZLE_URL.length === 0) {
  throw new Error("DRIZZLE_URL is missing.");
}

// Drizzle connection
export const connection = postgres(DRIZZLE_URL, {
  max: 1,
});

export const db = drizzle(connection, {
  schema,
  logger: true,
});
