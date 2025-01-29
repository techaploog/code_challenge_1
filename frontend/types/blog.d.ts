export type TCommunity = {
  id: number;
  value: string;
};

export type TBlog = {
  id: string;
  comId: number;
  title: string;
  details: string;
  creator: string;
  createdAt: Date;
};

export type TNewBlog = Omit<TBlog, "id" | "createdAt">; // For inserting new blogs

export type TBlogComment = {
  id: string;
  blogId: string;
  comment: string;
  creator: string;
  createdAt: Date;
};

export type TNewBlogComment = Omit<TBlogComment, "id" | "createdAt">; // For inserting new comments

export type TBlogSummary = {
  blogId: string;
  communityId: string;
  communityName: string;
  title: string;
  details: string;
  creatorId: string;
  creatorName: string;
  creatorImage?: string | null;
  createdAt: Date;
  commentCount: number;
};
