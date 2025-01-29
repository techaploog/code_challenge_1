import { v4 as uuidv4 } from "uuid";
import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv4().replaceAll("-", "")),
  email: text("email").notNull(),
  name: text("name").notNull(),
  image: text("image"),
});
