import type { ISbRichtext } from "@storyblok/js";

export type ArticleBlok = {
  title: string;
  fullTitle: string;
  image: string;
  featued: boolean;
  content: ISbRichtext;
};
