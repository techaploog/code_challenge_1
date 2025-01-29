import path from "path";
import fs from "fs";

import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db, connection } from "./db";

const startMigration = async () => {
  try {
    // Get the full path
    const scriptsFolder = path.join(process.cwd(), "database", "scripts");
    const migrationsFolder = path.join(process.cwd(), "database", "migrations");

    console.info("[INFO] Starting migrations...");
    await migrate(db, { migrationsFolder: migrationsFolder });
    console.info("[INFO] Migration completed successfully");

    console.info("[INFO] Running SQL scripts...");

    // Read all files in the 'scripts' folder
    const scriptFiles = fs.readdirSync(scriptsFolder);

    // Filter out only `.sql` files
    const sqlFiles = scriptFiles.filter((file) => file.endsWith(".sql"));

    // Execute each SQL file
    await Promise.all(
      sqlFiles.map(async (file) => {
        const filePath = path.join(scriptsFolder, file);

        // Execute the SQL script using the connection
        console.info(`[INFO] Executing script: ${file}`);
        await connection.file(filePath);
        console.info(`[INFO] Successfully executed: ${file}`);
      })
    );

    console.info("[INFO] All SQL scripts executed successfully.");

    console.info("[INFO] All migrations completed.");
  } catch (error) {
    console.error("[INFO] Migration failed:", error);
  } finally {
    await connection.end();
  }
};

startMigration();
