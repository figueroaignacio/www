export interface Technology {
  id: string;
  name: string;
}

export interface Experience {
  id: number;
  locale: string;
  title: string;
  company: string;
  location: string;
  contractType: string;
  description: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  technologies: Technology[];
  link: string | null;
  order: number | null;
  updatedAt: string;
  createdAt: string;
  _status: string;
}

export interface ExperienceApiResponse {
  docs: Experience[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface Education {
  id: number;
  locale: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  certificateUrl: string | null;
  highlight: boolean;
  order: number | null;
  updatedAt: string;
  createdAt: string;
  _status: string;
}

export interface EducationApiResponse {
  docs: Education[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface Post {
  id: number;
  locale: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  body: PostBody;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  updatedAt: string;
  createdAt: string;
  _status: string;
}

export interface PostApiResponse {
  docs: Post[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface RichTextBlock {
  type: string;
  format: string;
  indent: number;
  version: number;
  children: RichTextChild[];
  direction: string;
  textStyle: string;
  textFormat: number;
}

export interface RichTextRoot {
  type: string;
  format: string;
  indent: number;
  version: number;
  children: RichTextBlock[];
  direction: string;
}

export interface PostBody {
  root: RichTextRoot;
}

export interface RichTextChild {
  mode: string;
  text: string;
  type: string;
  style: string;
  detail: number;
  format: number;
  version: number;
}
