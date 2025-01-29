import { drizzle } from "drizzle-orm/postgres-js";
import * as postgres from "postgres";

import * as schema from "./schema";

// App connection
export const connection = postgres(process.env.DB_URL, {
  max: 10,
  idle_timeout: 30,
  connect_timeout: 10,
});

export const db = drizzle(connection, {
  schema,
  logger: true,
});

export type TDatabase = typeof db;

export default db;
