import { Module } from "@nestjs/common";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";
import { JwtConfigModule } from "@api/shared/jwt-config.module";

@Module({
  imports: [JwtConfigModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
