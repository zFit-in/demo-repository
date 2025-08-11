export type BlogHeadingBlock = {
  type: 'heading';
  level: 2 | 3 | 4;
  text: string;
};

export type BlogParagraphBlock = {
  type: 'paragraph';
  text: string;
};

export type BlogListBlock = {
  type: 'list';
  ordered?: boolean;
  items: string[];
};

export type BlogTableBlock = {
  type: 'table';
  headers: string[];
  rows: string[][];
};

export type BlogCalloutBlock = {
  type: 'callout';
  title?: string;
  text: string;
  tone?: 'info' | 'success' | 'warning';
};

export type BlogDividerBlock = { type: 'divider' };

export type BlogImageBlock = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
};

export type BlogContentBlock =
  | BlogHeadingBlock
  | BlogParagraphBlock
  | BlogListBlock
  | BlogTableBlock
  | BlogCalloutBlock
  | BlogDividerBlock
  | BlogImageBlock;

export type BlogPost = {
  slug: string;
  title: string;
  category:
    | 'Nutrition & Health'
    | 'Fitness & Lifestyle'
    | 'Zfit Brand Stories'
    | 'Healthy Eating Tips';
  date: string; // ISO date string
  image: string; // path to image
  excerpt: string;
  content: BlogContentBlock[];
};
