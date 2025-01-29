import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { RouterModule } from "@nestjs/core";
import { BlogModule } from "./blog/blog.module";
import { CommunityModule } from "./community/community.module";

@Module({
  imports: [
    AuthModule,
    BlogModule,
    HealthModule,
    CommunityModule,
    RouterModule.register([
      {
        path: "api/v1",
        module: AuthModule,
      },
      {
        path: "api/v1",
        module: BlogModule,
      },
      {
        path: "api/v1",
        module: HealthModule,
      },
      {
        path: "api/v1",
        module: CommunityModule,
      },
    ]),
  ],
})
export class V1Module {}
