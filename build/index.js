/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/paragraph/index.js":
/*!***************************************!*\
  !*** ./src/blocks/paragraph/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);




 //var el = element.createElement;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('prefix-blocks/paragraph', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paragraph Block'),
  icon: 'editor-paragraph',
  category: 'common',
  keywords: ['paragraph'],
  attributes: {
    paragraphText: {
      type: 'string',
      default: 'Write sd ...'
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      paragraphText
    } = attributes;
    var heart = 'format-quote';

    function updateparagraphText(content) {
      console.log(content);
      setAttributes({
        paragraphText: content
      });
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.AlignmentToolbar, {
      title: "Hello 1",
      value: heart
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      key: "content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Content",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Keep writing...",
      value: attributes.paragraphText,
      onChange: updateparagraphText
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      key: "editable2",
      tagName: "p",
      placeholder: "Keep writing...",
      value: attributes.paragraphText,
      onChange: updateparagraphText
    })];
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    const {
      paragraphText
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", null, paragraphText);
  }
});

/***/ }),

/***/ "./src/blocks/post-grid/index.js":
/*!***************************************!*\
  !*** ./src/blocks/post-grid/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../breakpoints */ "./src/breakpoints.js");








const ALLOWED_MEDIA_TYPES = ['image']; //var el = element.createElement;

console.log(_breakpoints__WEBPACK_IMPORTED_MODULE_6__["default"]);

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("prefix-blocks/post-grid", {
  title: "Post Grid",
  icon: "grid-view",
  attributes: {
    viewType: {
      type: 'string',
      default: 'grid' // filterable, carousel

    },
    lazyLoad: {
      type: 'object',
      default: {
        enable: '',
        srcUrl: '',
        srcId: ''
      }
    },
    pagination: {
      type: 'object',
      default: {
        type: '',
        maxPageNum: '',
        prevText: '',
        nextText: '',
        fontSize: '',
        textColor: '',
        hoverColor: '',
        bgColor: '',
        bgActiveColor: ''
      }
    },
    loadMore: {
      type: 'object',
      default: {
        text: 'Load More',
        defaultIcon: '',
        loadingIcon: '',
        textColor: '',
        hoverColor: '',
        bgColor: '',
        bgActiveColor: ''
      }
    },
    queryArgs: {
      type: 'object',
      default: {
        postType: 'Load More',
        taxQuery: '',
        metaQuery: '',
        s: '',
        postStatus: '',
        order: '',
        orderby: '',
        metaKey: '',
        // Date Parameters
        dateQuery: '',
        year: '',
        monthnum: '',
        w: '',
        day: '',
        hour: '',
        minute: '',
        second: '',
        m: '',
        // Author Parameters
        author: '',
        authorName: '',
        authorIn: '',
        authorNotIn: '',
        // Category Parameters
        cat: '',
        categoryName: '',
        categoryAnd: '',
        categoryIn: '',
        categoryNotIn: '',
        // Tag Parameters
        tag: '',
        tagId: '',
        tagAnd: '',
        tagIn: '',
        tagNotIn: '',
        tagSlugAnd: '',
        tagSlugIn: '',
        p: '',
        name: '',
        pageId: '',
        pagename: '',
        postParent: '',
        postParentIn: '',
        postParentPotIn: '',
        postIn: '',
        postNotIn: '',
        postNameIn: '',
        hasPassword: '',
        commentCount: '',
        nopaging: '',
        postsPerPage: '',
        paged: '',
        offset: '',
        postsPerArchivePage: '',
        ignoreStickyPosts: '',
        metaKey: '',
        metaValue: '',
        metaValueNum: '',
        metaCompare: '',
        metaQuery: '',
        perm: '',
        postMimeType: '',
        cache_results: '',
        update_post_meta_cache: '',
        update_post_term_cache: ''
      }
    },
    dummyName: {
      type: 'string',
      default: 'Post Grid'
    },
    dummyAuthor: {
      type: 'string',
      default: 'author'
    },
    dummyVersion: {
      type: 'string',
      default: '2.1.20'
    }
  },
  category: "common",
  edit: function (props) {
    var attributes = props.attributes;
    var setAttributes = props.setAttributes;
    var dummyName = attributes.dummyName;
    var viewType = attributes.viewType;
    var lazyLoad = attributes.lazyLoad; //setAttributes({ dummyName: 'Raju' });

    function updateViewType(val) {
      setAttributes({
        viewType: val
      });
    }

    function updateLazyLoadEnable(val) {
      setAttributes({
        lazyLoad: {
          enable: val,
          srcUrl: lazyLoad.srcUrl,
          srcId: lazyLoad.srcId
        }
      });
    }

    function updateLazyLoadsrcUrl(url, id) {
      setAttributes({
        lazyLoad: {
          enable: lazyLoad.enable,
          srcUrl: url,
          srcId: id
        }
      });
    }

    function updateName(content) {
      setAttributes({
        dummyName: content
      });
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      key: "general"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "blockxyz"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "px-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "View Type",
      value: viewType,
      options: [{
        label: 'Grid',
        value: 'grid'
      }, {
        label: 'Filterable',
        value: 'filterable'
      }, {
        label: 'Carousel',
        value: 'carousel'
      }, {
        label: 'Glossary',
        value: 'glossary'
      }],
      onChange: newSize => updateViewType(newSize)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "General",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "View Type",
      value: viewType,
      options: [{
        label: 'Grid',
        value: 'grid'
      }, {
        label: 'Filterable',
        value: 'filterable'
      }, {
        label: 'Carousel',
        value: 'carousel'
      }, {
        label: 'Glossary',
        value: 'glossary'
      }],
      onChange: newSize => updateViewType(newSize)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Lazy load",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Enable",
      value: lazyLoad.enable,
      options: [{
        label: 'Yes',
        value: 'yes'
      }, {
        label: 'No',
        value: 'no'
      }],
      onChange: newSize => updateLazyLoadEnable(newSize)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
      for: ""
    }, "Lazy Load Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
      src: lazyLoad.srcUrl,
      alt: ""
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: media => {
        // media.id
        console.log(media);
        updateLazyLoadsrcUrl(media.url, media.id); //updateLazyLoadsrcId(media.id);
      },
      onClose: () => console.log('onClose'),
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: lazyLoad.srcId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: open
        }, "Open Media Library");
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Query Post",
      initialOpen: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Layouts",
      initialOpen: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Pagination",
      initialOpen: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Filterable",
      initialOpen: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Carousel",
      initialOpen: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Masonry",
      initialOpen: false
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "my-custom-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("h1", null, "Hello from asdasd1 Gutenberg Editor!!! ", dummyName), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("pre", null, viewType, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("br", null), lazyLoad.enable, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("br", null), lazyLoad.srcUrl, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("br", null), lazyLoad.srcId, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("br", null)))];
  },
  save: function (props) {
    // to make a truly dynamic block, we're handling front end by render_callback under index.php file
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/testimonials/index.js":
/*!******************************************!*\
  !*** ./src/blocks/testimonials/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);




 //var el = element.createElement;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('prefix-blocks/testimonials', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('testimonials Block'),
  icon: 'editor-testimonials',
  category: 'common',
  keywords: ['testimonials'],
  attributes: {
    paragraphText: {
      type: 'string',
      default: 'Write sd ...'
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      paragraphText
    } = attributes;
    var heart = 'format-quote';

    function updateparagraphText(content) {
      console.log(content);
      setAttributes({
        paragraphText: content
      });
    }

    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.AlignmentToolbar, {
      title: "Hello 1",
      value: heart
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      key: "content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Content",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Keep writing...",
      value: attributes.paragraphText,
      onChange: updateparagraphText
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      key: "editable2",
      tagName: "p",
      placeholder: "Keep writing...",
      value: attributes.paragraphText,
      onChange: updateparagraphText
    })];
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    const {
      paragraphText
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", null, paragraphText);
  }
});

/***/ }),

/***/ "./src/breakpoints.js":
/*!****************************!*\
  !*** ./src/breakpoints.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const breakPoints = [{
  name: 'Small',
  id: 'sm',
  min: 0,
  max: 640
}, {
  name: 'Medium',
  id: 'md',
  min: 641,
  max: 768
}, {
  name: 'Large',
  id: 'lg',
  min: 769,
  max: 1024
}, {
  name: 'Extra-Large',
  id: 'xl',
  min: 1025,
  max: 1280
}, {
  name: '2 Extra-Large',
  id: '2xl',
  min: 1281,
  max: 1536
}];
/* harmony default export */ __webpack_exports__["default"] = (breakPoints);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/paragraph */ "./src/blocks/paragraph/index.js");
/* harmony import */ var _blocks_testimonials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/testimonials */ "./src/blocks/testimonials/index.js");
/* harmony import */ var _blocks_post_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/post-grid */ "./src/blocks/post-grid/index.js");



}();
/******/ })()
;
//# sourceMappingURL=index.js.map