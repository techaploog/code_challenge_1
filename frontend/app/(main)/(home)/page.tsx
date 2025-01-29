import { BlogContent } from "@/components/blog";
import { BlogCard } from "@/components/blog/blog-card.component";
import { SearchBarDesktop } from "@/components/search";
import { BLOG_ENDPOINT } from "@/constants";
import env from "@/env";
import { TBlogSummary } from "@/types/blog";

export default async function HomePage() {
  const req = await fetch(`${env.API_URL}${BLOG_ENDPOINT}`, {
    cache: "no-cache",
  });
  const res = await req.json();
  const blogs = (res.blogs as TBlogSummary[]) || ([] as TBlogSummary[]);

  return (
    <div className="dw-bg-gray-100 min-h-full w-full pb-6">
      <div className="mx-auto min-h-full w-full max-w-[343px] space-y-[24px] pt-[32px] md:max-w-[800px]">
        <SearchBarDesktop />
        <BlogContent className="">
          {blogs.map((blog) => (
            <BlogCard key={blog.blogId} blog={blog} />
          ))}

          {blogs.length === 0 ? (
            <div className="flex w-full flex-col gap-[5px] rounded-[12px] border-b border-[#BBC2C0] bg-slate-100 p-[20px] text-center">
              <span className=" italic text-slate-400">-- No data--</span>
            </div>
          ) : null}
        </BlogContent>
      </div>
    </div>
  );
}
