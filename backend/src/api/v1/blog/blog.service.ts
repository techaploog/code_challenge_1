import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";
import db from "@db";
import { CreateBlogPostDto, UpdateBlogPostDto } from "@dto";
import { and, desc, eq, sql } from "drizzle-orm";
import { blogComments, blogPosts } from "@db/schema";
import { blogSummaryView } from "@db/view";

@Injectable()
export class BlogService {
  async createBlog(userId: string, dto: CreateBlogPostDto) {
    const [newBlog] = await db
      .insert(blogPosts)
      .values({
        com_id: dto.com_id,
        title: dto.title,
        details: dto.details,
        creator: userId,
      })
      .returning();
    return newBlog;
  }

  async findAll(userId?: string) {
    const conditions = [sql`1=1`];

    if (userId) {
      conditions.push(eq(blogSummaryView.creatorId, userId));
    }

    const blogs = await db
      .select()
      .from(blogSummaryView)
      .where(and(...conditions))
      .orderBy(desc(blogSummaryView.createdAt))
      .execute();
    return { success: true, blogs };
  }

  async findOne(id: string) {
    const [blog] = await db
      .select()
      .from(blogSummaryView)
      .where(eq(blogSummaryView.blogId, id))
      .execute();

    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }

    return { success: true, blog };
  }

  async findComment(postId: string) {
    const comments = await db
      .select()
      .from(blogComments)
      .where(eq(blogComments.blogId, postId))
      .orderBy(desc(blogComments.createdAt))
      .execute();
    return { success: true, blogId: postId, comments };
  }

  async updateBlog(id: string, userId: string, dto: UpdateBlogPostDto) {
    const [blog] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .execute();

    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }

    if (blog.creator !== userId) {
      throw new ForbiddenException("You are not allowed to update this blog");
    }

    const newBlog = await db
      .update(blogPosts)
      .set(dto)
      .where(eq(blogPosts.id, id))
      .returning();
    return { success: true, blog: newBlog };
  }

  async deleteBlog(id: string, userId: string) {
    const [blog] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.id, id))
      .execute();

    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }

    if (blog.creator !== userId) {
      throw new ForbiddenException("You are not allowed to delete this blog");
    }

    await db.delete(blogPosts).where(eq(blogPosts.id, id)).execute();
    return {
      success: true,
      message: `Blog with id ${id} deleted successfully`,
    };
  }
}
