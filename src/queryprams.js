const queryPrams = {
  postType: { name: 'Post Types', description: "Select Post Types to Query" },
  taxQuery: { name: 'Tax Query', description: "Taxonomies query arguments" },
  metaQuery: { name: 'Meta Query', description: "Meta field query" },
  s: { name: 'keyword', description: "Search keyword paramater" },

  postStatus: { name: 'post status', description: "Query post by post status" },
  order: { name: 'order', description: "Post query order" },
  orderby: { name: 'orderby', description: "Post query orderby" },

  metaKey: { name: 'meta fields key', description: "Post query by meta fields key" },


  // Date Parameters
  dateQuery: { name: 'date', description: "Post query by date" },
  year: { name: 'year', description: "Post query by year" },
  monthnum: { name: 'month', description: "Post query by month" },
  w: { name: 'week', description: "Post query by week" },
  day: { name: 'day', description: "Post query by day" },
  hour: { name: 'hour', description: "Post query by hour" },
  minute: { name: 'miniute', description: "Post query by miniute" },
  second: { name: 'Post Types', description: "Post query by second" },
  m: { name: 'Post Types', description: "Post query by month" },

  // Author Parameters
  author: { name: 'Author', description: "Post query by Author ID" },
  authorName: { name: 'Author Name', description: "Post query by Author Name" },
  authorIn: { name: 'Author In', description: "Post query by Author IDs" },
  authorNotIn: { name: 'Author Not In', description: "" },

  // Category Parameters
  cat: { name: 'Post Types', description: "" },
  categoryName: { name: 'Category Name', description: "" },
  categoryAnd: { name: 'CategoryAnd', description: "" },
  categoryIn: { name: 'categoryIn', description: "" },
  categoryNotIn: { name: 'categoryNotIn', description: "" },

  // Tag Parameters

  tag: { name: 'tag', description: "" },
  tagId: { name: 'tagId', description: "" },
  tagAnd: { name: 'tagAnd', description: "" },
  tagIn: { name: 'tagIn', description: "" },
  tagNotIn: { name: 'tagNotIn', description: "" },
  tagSlugAnd: { name: 'tagSlugAnd', description: "" },
  tagSlugIn: { name: 'tagSlugIn', description: "" },

  p: { name: 'Post id', description: "" },
  name: { name: 'Post Types', description: "" },
  pageId: { name: 'Post Types', description: "" },
  pagename: { name: 'Post Types', description: "" },
  postParent: { name: 'Post Types', description: "" },
  postParentIn: { name: 'Post Types', description: "" },
  postParentPotIn: { name: 'Post Types', description: "" },
  postIn: { name: 'Post Types', description: "" },
  postNotIn: { name: 'Post Types', description: "" },
  postNameIn: { name: 'Post Types', description: "" },

  hasPassword: { name: 'Post Types', description: "" },
  commentCount: { name: 'Post Types', description: "" },

  nopaging: { name: 'Post Types', description: "" },
  postsPerPage: { name: 'Post Types', description: "" },
  paged: { name: 'Post Types', description: "" },
  offset: { name: 'Post Types', description: "" },
  postsPerArchivePage: { name: 'Post Types', description: "" },
  ignoreStickyPosts: { name: 'Post Types', description: "" },

  metaKey: { name: 'Post Types', description: "" },
  metaValue: { name: 'Post Types', description: "" },
  metaValueNum: { name: 'Post Types', description: "" },
  metaCompare: { name: 'Post Types', description: "" },
  metaQuery: { name: 'Post Types', description: "" },

  perm: { name: 'Post Types', description: "" },
  postMimeType: { name: 'Post Types', description: "" },
  cache_results: { name: 'Post Types', description: "" },
  update_post_meta_cache: { name: 'Post Types', description: "" },
  update_post_term_cache: { name: 'Post Types', description: "" },

};


export default queryPrams;