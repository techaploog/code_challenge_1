import { integer, pgView, text, timestamp } from "drizzle-orm/pg-core";

export const blogSummaryView = pgView("vw_blog_summary", {
  blogId: text("blog_id").notNull(),
  communityId: text("com_id").notNull(),
  communityName: text("com_name").notNull(),
  title: text("title").notNull(),
  details: text("details").notNull(),
  creatorId: text("creator_id").notNull(),
  creatorName: text("creator_name").notNull(),
  creatorImage: text("creator_image"),
  createdAt: timestamp("created_at").notNull(),
  commentCount: integer("comment_count").default(0),
}).existing();
