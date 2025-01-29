import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import db from "src/db";
import { users } from "src/db/schema";
import { eq } from "drizzle-orm";
import { SignInDto } from "@dto";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login({ email }: SignInDto): Promise<{ accessToken: string }> {
    try {
      // Fetch user from the database
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .execute();

      if (!user) {
        // Throw a standardized exception for unauthorized access
        throw new UnauthorizedException("Invalid email.");
      }

      // Generate JWT token
      const payload = {
        sub: user.id,
        email: user.email,
        name: user.name,
      };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    } catch (err: any) {
      console.error(
        "[ERROR]",
        err.message || "Unexpected error occurred during login.",
      );

      // Throw a generic internal server error for unhandled cases
      if (err instanceof UnauthorizedException) {
        throw err; // Preserve the original exception for unauthorized access
      }

      throw new InternalServerErrorException(
        "Something went wrong during login.",
      );
    }
  }
}
