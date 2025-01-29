import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

import { users } from "./user.schema";

export const community = pgTable("community", {
  id: serial("key").primaryKey(),
  value: text("value").notNull().unique(),
});

export const blogPosts = pgTable("blog_post", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv4().replaceAll("-", "")),
  com_id: integer("com_id")
    .notNull()
    .references(() => community.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  details: text("details").notNull(),
  creator: text("creator")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const blogComments = pgTable("blog_comment", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv4().replaceAll("-", "")),
  blogId: text("blog_id")
    .notNull()
    .references(() => blogPosts.id, { onDelete: "cascade" }),
  comment: text("comment").notNull(),
  creator: text("creator")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
