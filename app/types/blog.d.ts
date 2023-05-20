export type ApiResponse = {
  totalCount: number;
  result: Blog[];
};

export type Blog = {
  postId: number;
  userId: number;
  totalReadingTime: number;
  postType: number;
  banner: string;
  image: string;
  imageAlt: string;
  order: number;
  title: string;
  summary: string;
  content: string;
  tag: number;
  lang: number;
  url: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  isFirstPost: boolean;
  createdAt: string;
  modifiedAt: string;
  createdBy: number;
  modifiedBy: number;
  isRemoved: boolean;
  author: string | null;
  users: User;
};

export type User = {
  userId: number;
  email: string;
  name: string;
  surname: string;
  password: number | null;
  roleId: number;
  avatar: string;
  isRemoved: boolean;
  createdAt: string;
  createdBy: number;
  modifiedAt: string | null;
  modifiedBy: number | null;
  role: string | null;
};
