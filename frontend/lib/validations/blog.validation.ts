import * as z from "zod";

// CreateBlogPostDto Zod Schema
export const CreateBlogPostSchema = z.object({
  com_id: z
    .number()
    .int({ message: "Community ID must be an integer" })
    .refine((val) => val !== undefined, {
      message: "Community ID is required",
    }),
  title: z.string().min(1, { message: "Title must not be empty" }),
  details: z.string().min(1, { message: "Details must not be empty" }),
});

// UpdateBlogPostDto Zod Schema
export const UpdateBlogPostSchema = z.object({
  id: z.string().min(1, { message: "Id must not be empty" }),
  title: z.string().min(1, { message: "Title must not be empty" }),
  details: z.string().min(1, { message: "Details must not be empty" }),
});
