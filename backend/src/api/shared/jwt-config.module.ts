import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
  throw new Error("Missing required environment variable: JWT_SECRET");
}

console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("JWT_EXPIRES_IN:", process.env.JWT_EXPIRES_IN);

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  exports: [JwtModule], // Export JwtModule for reuse in other modules
})
export class JwtConfigModule {}
