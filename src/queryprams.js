const queryPrams = [
  { id: 'postType', value: '', label: 'Post Types', description: "Select Post Types to Query" },
  { id: 'taxQuery', label: 'Tax Query', description: "Taxonomies query arguments" },
  { id: 'metaQuery', label: 'Meta Query', description: "Meta field query" },
  { id: 's', label: 'keyword', description: "Search keyword paramater" },

  { id: 'postStatus', label: 'post status', description: "Query post by post status" },
  { id: 'order', label: 'order', description: "Post query order" },
  { id: 'orderby', label: 'orderby', description: "Post query orderby" },
  { id: 'metaKey', label: 'meta fields key', description: "Post query by meta fields key" },


  // Date Parameters
  { id: 'dateQuery', label: 'date', description: "Post query by date" },
  { id: 'year', label: 'year', description: "Post query by year" },
  { id: 'monthnum', label: 'month', description: "Post query by month" },
  { id: 'w', label: 'week', description: "Post query by week" },
  { id: 'day', label: 'day', description: "Post query by day" },
  { id: 'hour', label: 'hour', description: "Post query by hour" },
  { id: 'minute', label: 'miniute', description: "Post query by miniute" },
  { id: 'second', label: 'Post Types', description: "Post query by second" },
  { id: 'm', label: 'Post Types', description: "Post query by month" },

  // Author Parameters
  { id: 'author', label: 'Author', description: "Post query by Author ID" },
  { id: 'authorName', label: 'Author Name', description: "Post query by Author Name" },
  { id: 'authorIn', label: 'Author In', description: "Post query by Author IDs" },
  { id: 'authorNotIn', label: 'Author Not In', description: "" },

  // Category Parameters
  { id: 'cat', label: 'Post Types', description: "" },
  { id: 'categoryName', label: 'Category Name', description: "" },
  { id: 'categoryAnd', label: 'CategoryAnd', description: "" },
  { id: 'categoryIn', label: 'categoryIn', description: "" },
  { id: 'categoryNotIn', label: 'categoryNotIn', description: "" },

  // Tag Parameters

  { id: 'tag', label: 'tag', description: "" },
  { id: 'tagId', label: 'tagId', description: "" },
  { id: 'tagAnd', label: 'tagAnd', description: "" },
  { id: 'tagIn', label: 'tagIn', description: "" },
  { id: 'tagNotIn', label: 'tagNotIn', description: "" },
  { id: 'tagSlugAnd', label: 'tagSlugAnd', description: "" },
  { id: 'tagSlugIn', label: 'tagSlugIn', description: "" },

  { id: 'p', label: 'Post id', description: "" },
  { id: 'name', label: 'Post Types', description: "" },
  { id: 'pageId', label: 'Post Types', description: "" },
  { id: 'pagename', label: 'Post Types', description: "" },
  { id: 'postParent', label: 'Post Types', description: "" },
  { id: 'postParentIn', label: 'Post Types', description: "" },
  { id: 'postParentPotIn', label: 'Post Types', description: "" },
  { id: 'postIn', label: 'Post Types', description: "" },
  { id: 'postNotIn', label: 'Post Types', description: "" },
  { id: 'postNameIn', label: 'Post Types', description: "" },

  { id: 'hasPassword', label: 'Post Types', description: "" },
  { id: 'commentCount', label: 'Post Types', description: "" },

  { id: 'nopaging', label: 'Post Types', description: "" },
  { id: 'postsPerPage', label: 'Post Types', description: "" },
  { id: 'paged', label: 'Post Types', description: "" },
  { id: 'offset', label: 'Post Types', description: "" },
  { id: 'postsPerArchivePage', label: 'Post Types', description: "" },
  { id: 'ignoreStickyPosts', label: 'Post Types', description: "" },

  { id: 'metaKey', label: 'Post Types', description: "" },
  { id: 'metaValue', label: 'Post Types', description: "" },
  { id: 'metaValueNum', label: 'Post Types', description: "" },
  { id: 'metaCompare', label: 'Post Types', description: "" },
  { id: 'metaQuery', label: 'Post Types', description: "" },

  { id: 'perm', label: 'Post Types', description: "" },
  { id: 'postMimeType', label: 'Post Types', description: "" },
  { id: 'cacheResults', label: 'Post Types', description: "" },
  { id: 'updatePostMetaCache', label: 'Post Types', description: "" },
  { id: 'updatePostTermCache', label: 'Post Types', description: "" },

];


export default queryPrams;