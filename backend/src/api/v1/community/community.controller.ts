import { Controller, Get } from "@nestjs/common";

import { CommunityService } from "./community.service";

@Controller("community")
export class CommunityController {
  constructor(private readonly community: CommunityService) {}

  @Get()
  async findAll() {
    return this.community.findAll();
  }
}
