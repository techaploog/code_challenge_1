import { Module } from "@nestjs/common";
import { V1Module } from "./api/v1/v1.module";

@Module({
  imports: [V1Module],
})
export class AppModule {}
