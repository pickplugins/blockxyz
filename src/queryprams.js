const queryPrams = [
  { multiple: false, value: 0, id: 'postType', val: [], label: 'Post Types', description: "Select Post Types to Query" },
  { multiple: false, value: 1, id: 'taxQuery', label: 'Tax Query', description: "Taxonomies query arguments" },
  { multiple: false, value: 2, id: 'metaQuery', label: 'Meta Query', description: "Meta field query" },
  { multiple: false, value: 3, id: 's', val: '', label: 'Keyword', description: "Search keyword paramater" },

  { multiple: false, value: 4, id: 'postStatus', label: 'Post status', description: "Query post by post status" },
  { multiple: false, value: 5, id: 'order', label: 'Order', description: "Post query order" },
  { multiple: false, value: 6, id: 'orderby', label: 'Orderby', description: "Post query orderby" },
  { multiple: false, value: 7, id: 'metaKey', label: 'Meta fields key', description: "Post query by meta fields key" },


  // Date Parameters
  { multiple: false, value: 8, id: 'dateQuery', label: 'Date Query ', description: "Post query by date" },
  { multiple: false, value: 9, id: 'year', label: 'Year', description: "Post query by year" },
  { multiple: false, value: 10, id: 'monthnum', label: 'Month', description: "Post query by month" },
  { multiple: false, value: 11, id: 'w', label: 'Week', description: "Post query by week" },
  { multiple: false, value: 12, id: 'day', label: 'Day', description: "Post query by day" },
  { multiple: false, value: 13, id: 'hour', label: 'Hour', description: "Post query by hour" },
  { multiple: false, value: 15, id: 'minute', label: 'Miniute', description: "Post query by miniute" },
  { multiple: false, value: 16, id: 'second', label: 'Post Types', description: "Post query by second" },
  { multiple: false, value: 17, id: 'm', label: 'Post Types', description: "Post query by month" },

  // Author Parameters
  { multiple: false, value: 18, id: 'author', label: 'Author', description: "Post query by Author ID" },
  { multiple: false, value: 19, id: 'authorName', label: 'Author Name', description: "Post query by Author Name" },
  { multiple: false, value: 20, id: 'authorIn', label: 'Author In', description: "Post query by Author IDs" },
  { multiple: false, value: 21, id: 'authorNotIn', label: 'Author Not In', description: "" },

  // Category Parameters
  { multiple: false, value: 22, id: 'cat', label: 'Post Types', description: "" },
  { multiple: false, value: 23, id: 'categoryName', label: 'Category Name', description: "" },
  { multiple: false, value: 24, id: 'categoryAnd', label: 'CategoryAnd', description: "" },
  { multiple: false, value: 25, id: 'categoryIn', label: 'Category In', description: "" },
  { multiple: false, value: 26, id: 'categoryNotIn', label: 'Category Not In', description: "" },

  // Tag Parameters

  { multiple: false, value: 27, id: 'tag', label: 'Tags', description: "" },
  { multiple: false, value: 28, id: 'tagId', label: 'Tag Id', description: "" },
  { multiple: false, value: 29, id: 'tagAnd', label: 'Tag And', description: "" },
  { multiple: false, value: 30, id: 'tagIn', label: 'Tag In', description: "" },
  { multiple: false, value: 31, id: 'tagNotIn', label: 'Tag Not In', description: "" },
  { multiple: false, value: 32, id: 'tagSlugAnd', label: 'Tag Slug And', description: "" },
  { multiple: false, value: 33, id: 'tagSlugIn', label: 'Tag Slug In', description: "" },

  { multiple: false, value: 34, id: 'p', label: 'Post id', description: "" },
  { multiple: false, value: 35, id: 'name', label: 'Name', description: "" },
  { multiple: false, value: 36, id: 'pageId', label: 'Page Id', description: "" },
  { multiple: false, value: 37, id: 'pagename', label: 'Page name', description: "" },
  { multiple: false, value: 38, id: 'postParent', label: 'Post Parent', description: "" },
  { multiple: false, value: 39, id: 'postParentIn', label: 'Post Parent In', description: "" },
  { multiple: false, value: 0, id: 'postParentNotIn', label: 'Post Parent Not In', description: "" },
  { multiple: false, value: 0, id: 'postIn', label: 'Post In', description: "" },
  { multiple: false, value: 0, id: 'postNotIn', label: 'Post Not In', description: "" },
  { multiple: false, value: 0, id: 'postNameIn', label: 'Post Name In', description: "" },

  { multiple: false, value: 0, id: 'hasPassword', label: 'Has Password', description: "" },
  { multiple: false, value: 0, id: 'commentCount', label: 'Comment Count', description: "" },

  { multiple: false, value: 0, id: 'nopaging', label: 'No Paging', description: "" },
  { multiple: false, value: 0, id: 'postsPerPage', label: 'Posts Per Page', description: "" },
  { multiple: false, value: 0, id: 'paged', label: 'Paged', description: "" },
  { multiple: false, value: 0, id: 'offset', label: 'Offset', description: "" },
  { multiple: false, value: 0, id: 'postsPerArchivePage', label: 'Posts Per Archive Page', description: "" },
  { multiple: false, value: 0, id: 'ignoreStickyPosts', label: 'Ignore Sticky Posts', description: "" },

  { multiple: false, value: 0, id: 'metaKey', label: 'Meta Key', description: "" },
  { multiple: false, value: 0, id: 'metaValue', label: 'Meta Value', description: "" },
  { multiple: false, value: 0, id: 'metaValueNum', label: 'Meta Value Num', description: "" },
  { multiple: false, value: 0, id: 'metaCompare', label: 'Meta Compare', description: "" },
  { multiple: false, value: 0, id: 'metaQuery', label: 'Meta Query', description: "" },

  { multiple: false, value: 0, id: 'perm', label: 'Perm', description: "" },
  { multiple: false, value: 0, id: 'postMimeType', label: 'Post Mime Type', description: "" },
  { multiple: false, value: 0, id: 'cacheResults', label: 'Cache Results', description: "" },
  { multiple: false, value: 0, id: 'updatePostMetaCache', label: 'Update Post Meta Cache', description: "" },
  { multiple: false, value: 0, id: 'updatePostTermCache', label: 'Update Post Term Cache', description: "" },

];


export default queryPrams;