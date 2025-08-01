import { API_ENPOINT } from './endpoint';

export interface RichTextChild {
  mode: string;
  text: string;
  type: string;
  style: string;
  detail: number;
  format: number;
  version: number;
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

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_ENPOINT}/posts`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch experiences:', res.statusText);
    return [];
  }

  const data: PostApiResponse = await res.json();
  return data.docs;
}
