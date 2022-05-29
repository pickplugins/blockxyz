const queryPrams = [
  { val: [], multiple: false, value: 0, id: 'postType', label: 'Post Types', description: "Select Post Types to Query" },
  { val: [], multiple: false, value: 1, id: 'taxQuery', label: 'Tax Query', description: "Taxonomies query arguments" },
  { val: [], multiple: false, value: 2, id: 'metaQuery', label: 'Meta Query', description: "Meta field query" },
  { val: '', multiple: false, value: 3, id: 's', label: 'Keyword', description: "Search keyword paramater" },

  { val: [], multiple: false, value: 4, id: 'postStatus', label: 'Post status', description: "Query post by post status" },
  { val: '', multiple: false, value: 5, id: 'order', label: 'Order', description: "Post query order" },
  { val: [], multiple: false, value: 6, id: 'orderby', label: 'Orderby', description: "Post query orderby" },
  { val: '', multiple: false, value: 7, id: 'metaKey', label: 'Meta fields key', description: "Post query by meta fields key" },


  // Date Parameters
  { val: '', multiple: false, value: 8, id: 'dateQuery', label: 'Date Query ', description: "Post query by date" },
  { val: '', multiple: false, value: 9, id: 'year', label: 'Year', description: "Post query by year" },
  { val: '', multiple: false, value: 10, id: 'monthnum', label: 'Month', description: "Post query by month" },
  { val: '', multiple: false, value: 11, id: 'w', label: 'Week', description: "Post query by week" },
  { val: '', multiple: false, value: 12, id: 'day', label: 'Day', description: "Post query by day" },
  { val: '', multiple: false, value: 13, id: 'hour', label: 'Hour', description: "Post query by hour" },
  { val: '', multiple: false, value: 15, id: 'minute', label: 'Miniute', description: "Post query by miniute" },
  { val: '', multiple: false, value: 16, id: 'second', label: 'Post Types', description: "Post query by second" },
  { val: '', multiple: false, value: 17, id: 'm', label: 'Post Types', description: "Post query by month" },

  // Author Parameters
  { val: '', multiple: false, value: 18, id: 'author', label: 'Author', description: "Post query by Author ID" },
  { val: '', multiple: false, value: 19, id: 'authorName', label: 'Author Name', description: "Post query by Author Name" },
  { val: [1, 223423, 32342], multiple: false, value: 20, id: 'authorIn', label: 'Author In', description: "Post query by Author IDs" },
  { val: [1, 2, 3], multiple: false, value: 21, id: 'authorNotIn', label: 'Author Not In', description: "" },

  // Category Parameters
  { val: '', multiple: false, value: 22, id: 'cat', label: 'Post Types', description: "" },
  { val: '', multiple: false, value: 23, id: 'categoryName', label: 'Category Name', description: "" },
  { val: '', multiple: false, value: 24, id: 'categoryAnd', label: 'CategoryAnd', description: "" },
  { val: '', multiple: false, value: 25, id: 'categoryIn', label: 'Category In', description: "" },
  { val: '', multiple: false, value: 26, id: 'categoryNotIn', label: 'Category Not In', description: "" },

  // Tag Parameters

  { val: '', multiple: false, value: 27, id: 'tag', label: 'Tags', description: "" },
  { val: '', multiple: false, value: 28, id: 'tagId', label: 'Tag Id', description: "" },
  { val: '', multiple: false, value: 29, id: 'tagAnd', label: 'Tag And', description: "" },
  { val: '', multiple: false, value: 30, id: 'tagIn', label: 'Tag In', description: "" },
  { val: '', multiple: false, value: 31, id: 'tagNotIn', label: 'Tag Not In', description: "" },
  { val: '', multiple: false, value: 32, id: 'tagSlugAnd', label: 'Tag Slug And', description: "" },
  { val: '', multiple: false, value: 33, id: 'tagSlugIn', label: 'Tag Slug In', description: "" },

  { val: '', multiple: false, value: 34, id: 'p', label: 'Post id', description: "" },
  { val: '', multiple: false, value: 35, id: 'name', label: 'Name', description: "" },
  { val: '', multiple: false, value: 36, id: 'pageId', label: 'Page Id', description: "" },
  { val: '', multiple: false, value: 37, id: 'pagename', label: 'Page name', description: "" },
  { val: '', multiple: false, value: 38, id: 'postParent', label: 'Post Parent', description: "" },
  { val: '', multiple: false, value: 39, id: 'postParentIn', label: 'Post Parent In', description: "" },
  { val: '', multiple: false, value: 0, id: 'postParentNotIn', label: 'Post Parent Not In', description: "" },
  { val: '', multiple: false, value: 0, id: 'postIn', label: 'Post In', description: "" },
  { val: '', multiple: false, value: 0, id: 'postNotIn', label: 'Post Not In', description: "" },
  { val: '', multiple: false, value: 0, id: 'postNameIn', label: 'Post Name In', description: "" },

  { val: '', multiple: false, value: 0, id: 'hasPassword', label: 'Has Password', description: "" },
  { val: '', multiple: false, value: 0, id: 'commentCount', label: 'Comment Count', description: "" },

  { val: '', multiple: false, value: 0, id: 'nopaging', label: 'No Paging', description: "" },
  { val: '', multiple: false, value: 0, id: 'postsPerPage', label: 'Posts Per Page', description: "" },
  { val: '', multiple: false, value: 0, id: 'paged', label: 'Paged', description: "" },
  { val: '', multiple: false, value: 0, id: 'offset', label: 'Offset', description: "" },
  { val: '', multiple: false, value: 0, id: 'postsPerArchivePage', label: 'Posts Per Archive Page', description: "" },
  { val: '', multiple: false, value: 0, id: 'ignoreStickyPosts', label: 'Ignore Sticky Posts', description: "" },

  { val: '', multiple: false, value: 0, id: 'metaKey', label: 'Meta Key', description: "" },
  { val: '', multiple: false, value: 0, id: 'metaValue', label: 'Meta Value', description: "" },
  { val: '', multiple: false, value: 0, id: 'metaValueNum', label: 'Meta Value Num', description: "" },
  { val: '', multiple: false, value: 0, id: 'metaCompare', label: 'Meta Compare', description: "" },
  { val: '', multiple: false, value: 0, id: 'metaQuery', label: 'Meta Query', description: "" },

  { val: '', multiple: false, value: 0, id: 'perm', label: 'Perm', description: "" },
  { val: '', multiple: false, value: 0, id: 'postMimeType', label: 'Post Mime Type', description: "" },
  { val: '', multiple: false, value: 0, id: 'cacheResults', label: 'Cache Results', description: "" },
  { val: '', multiple: false, value: 0, id: 'updatePostMetaCache', label: 'Update Post Meta Cache', description: "" },
  { val: '', multiple: false, value: 0, id: 'updatePostTermCache', label: 'Update Post Term Cache', description: "" },

];


export default queryPrams;