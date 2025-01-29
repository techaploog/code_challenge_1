import { db, connection } from "./db";
import { community, users } from "../backend/src/db/schema";

import { COMMUNITY_SEED, USERS_SEED } from "./seedData";
import { resetTable } from "./utils";

const startSeedingAll = async () => {
  try {
    // Seed Community
    await resetTable(community as any);
    console.info("[INFO] Reset table success: community");
    await Promise.allSettled(
      COMMUNITY_SEED.map((comm) =>
        db
          .insert(community as any)
          .values(comm)
          .execute()
      )
    );
    console.info("[INFO] Seed success : community");

    // Seed User
    await resetTable(users as any);
    console.info("[INFO] Reset table success: user");
    await Promise.allSettled(
      USERS_SEED.map((user) =>
        db
          .insert(users as any)
          .values(user)
          .execute()
      )
    );
    console.info("[INFO] Seed success : user");
  } catch (err: any) {
    console.error("[INFO] Seeding failed:", err);
  } finally {
    await connection.end();
  }
};

startSeedingAll();
