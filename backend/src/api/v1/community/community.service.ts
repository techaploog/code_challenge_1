import { community } from "@db/schema";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import db from "src/db";

@Injectable()
export class CommunityService {
  async findAll() {
    try {
      // Fetch user from the database
      const commu = await db.select().from(community).execute();

      return {
        communities: commu,
      };
    } catch (err: any) {
      console.error(
        "[ERROR]",
        err.message || "Unexpected error occurred during login.",
      );

      throw new InternalServerErrorException(
        "Something went wrong during login.",
      );
    }
  }
}
