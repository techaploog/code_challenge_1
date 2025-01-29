import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Req,
  Query,
} from "@nestjs/common";
import { BlogService } from "./blog.service";
import { JwtAuthGuard } from "@guard/jwt.guard";
import { Request } from "express";
import { CreateBlogPostDto, UpdateBlogPostDto } from "@dto";

@Controller("blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(@Query("user") userId?: string) {
    return this.blogService.findAll(userId);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.blogService.findOne(id);
  }

  @Get(":id/comment")
  async findComment(@Param("id") id: string) {
    return this.blogService.findComment(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Req() req: Request, @Body() dto: CreateBlogPostDto) {
    const userId = req.user.sub;
    return this.blogService.createBlog(userId, dto);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  async update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() dto: UpdateBlogPostDto,
  ) {
    const userId = req.user.id;
    return this.blogService.updateBlog(id, userId, dto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  async delete(@Req() req: Request, @Param("id") id: string) {
    const userId = req.user.id;
    return this.blogService.deleteBlog(id, userId);
  }
}
