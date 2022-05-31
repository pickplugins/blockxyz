import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import styled from 'styled-components'
import apiFetch from '@wordpress/api-fetch';


import { createElement } from '@wordpress/element'
import { PanelBody, RangeControl, Button, Panel, PanelRow, Dropdown, DropdownMenu, SelectControl, ColorPicker, ColorPalette, ToolsPanelItem, ComboboxControl } from '@wordpress/components'
import { InspectorControls, BlockControls, AlignmentToolbar, RichText } from '@wordpress/block-editor'
import { __experimentalInputControl as InputControl } from '@wordpress/components';

import { useState } from '@wordpress/compose';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

const ALLOWED_MEDIA_TYPES = ['image'];

//var el = element.createElement;

////console.log(breakPoints);

import breakPoints from '../../breakpoints'
import queryPrams from '../../queryprams'

////console.log(queryPrams);

var queryPramsX = queryPrams.map((x, i) => {

    return { value: i, label: x.label }
})

apiFetch({
    path: 'http://localhost/wp/wp-json/wp/v2/posts',
    method: 'POST',
    data: { title: 'Categories' },
}).then((res) => {
    console.log(res);
});

//console.log(queryPramsX);


const CustomCss = styled.div`
display: grid;
grid-template-columns: ${(props) => { return props.cssData.grid.gridTemplateColumns.map((item) => { return item.val + item.unit + ' ' }) }};
grid-template-rows: ${(props) => { return props.cssData.grid.gridTemplateRows.map((item) => { return item.val + item.unit + ' ' }) }};
column-gap: ${(props) => { return props.cssData.grid.colGap.val + props.cssData.grid.colGap.unit }};
row-gap: ${(props) => { return props.cssData.grid.rowGap.val + props.cssData.grid.rowGap.unit }};

`;


registerBlockType("prefix-blocks/post-grid", {
    title: "Post Grid",
    icon: "grid-view",
    attributes: {

        viewType: {
            type: 'string',
            default: 'grid' // filterable, carousel
        },
        lazyLoad: {
            type: 'object',
            default: { enable: '', srcUrl: '', srcId: '' },
        },
        pagination: {
            type: 'object',
            default: { type: '', maxPageNum: '', prevText: '', nextText: '', fontSize: '', textColor: '', hoverColor: '', bgColor: '', bgActiveColor: '', loadMoreText: 'Load More', loadingIcon: '', },
        },
        search: {
            type: 'object',
            default: { enable: 'no', type: '', placeholder: '', icon: '', busyIcon: '' },
        },
        container: {
            type: 'object',
            default: { padding: { val: '10', unit: 'px' }, margin: { val: '10', unit: 'px' }, bgColor: '', bgImg: { id: '', url: '' } },
        },
        itemContainer: {
            type: 'object',
            default: { height: '', bgColor: '', bgImg: '', margin: '', padding: '', },
        },
        grid: {
            type: 'object',
            default: { gridTemplateColumns: [{ val: 1, unit: 'fr' }, { val: 2, unit: 'fr' }, { val: 3, unit: 'fr' }], gridTemplateRows: [{ val: 1, unit: 'fr' }, { val: 2, unit: 'fr' }], colGap: { val: 1, unit: 'em' }, rowGap: { val: 1, unit: 'em' }, padding: { val: 1, unit: 'em' }, },
        },


        layout: {
            type: 'object',
            default: { id: '', keyword: '', category: '', categories: [] },
        },
        masonry: {
            type: 'object',
            default: { enable: 'no', },
        },
        scripts: {
            type: 'object',
            default: { js: '', css: '' },
        },
        queryArgs: {
            type: 'object',
            default: {
                items: [
                    { val: [], multiple: false, id: 'postType', label: 'Post Types', description: "Select Post Types to Query" },
                    { val: [], args: [], multiple: false, id: 'taxQuery', label: 'Tax Query', description: "Taxonomies query arguments" },
                    { val: [], args: [], multiple: false, id: 'metaQuery', label: 'Meta Query', description: "Meta field query" },
                    { val: '', multiple: false, id: 's', label: 'Keyword', description: "Search keyword paramater" },
                    { val: [], args: [1, 2, 3], multiple: false, id: 'postNameIn', label: 'Post Name In', description: "" },

                ]
            },
        },


        queryArgsx: {
            type: 'object',
            default: {
                postType: '',
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
                update_post_term_cache: '',



            },
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
        var lazyLoad = attributes.lazyLoad;
        var container = attributes.container;
        var pagination = attributes.pagination;
        var masonry = attributes.masonry;
        var search = attributes.search;
        var grid = attributes.grid;
        var layout = attributes.layout;
        var queryArgs = attributes.queryArgs;


        ////console.log(queryArgs);

        const colors = [
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
        ];



        const postTypes = useSelect(
            (select) => select(coreStore).getPostTypes({ per_page: -1 }), []
        );

        ////console.log(postTypes);
        //setAttributes({ dummyName: 'Raju' });


        function updateViewType(val) {
            setAttributes({ viewType: val });
        }

        function updateLazyLoadEnable(val) {
            setAttributes({ lazyLoad: { enable: val, srcUrl: lazyLoad.srcUrl, srcId: lazyLoad.srcId } });
        }

        function updateLazyLoadsrcUrl(url, id) {
            setAttributes({ lazyLoad: { enable: lazyLoad.enable, srcUrl: url, srcId: id } });

        }


        function generateQueryFieldAuthorIn(xx) {

            //console.log(typeof xx);

            var xxts = [12, 24, 32];


            var xxt = [1, 2, 3].concat(xxts);


            return (
                xxt.map((x) => {
                    return (
                        <div>{x}</div>
                    )
                })
            )








        }

        function updateName(content) {

            setAttributes({ dummyName: content });

        }



        function removeQueryPram(i) {

            //console.log(i);
            queryArgs.items.splice(i, 1);



            setAttributes({ queryArgs: { items: queryArgs.items } });

        }


        function updateQueryPram(newVal, index) {

            //console.log(index);
            //console.log(newVal);

            var itemData = queryArgs.items[index];


            itemData.val = newVal;
            queryArgs.items[index] = itemData;
            setAttributes({ queryArgs: { items: queryArgs.items } });

            // if (itemData.id == 's' || itemData.id == 'order'  ) {
            //     itemData.val = newVal;
            //     queryArgs.items[index] = itemData;
            //     setAttributes({ queryArgs: { items: queryArgs.items } });

            // }

            // if (itemData.id == 'postType' || itemData.id == 'orderby' || itemData.id == 'postStatus') {
            //     itemData.val = newVal;
            //     queryArgs.items[index] = itemData;
            //     setAttributes({ queryArgs: { items: queryArgs.items } });

            // }



            //queryArgs.items.splice(i, 1);

            //console.log(queryArgs);


        }



        function generateQueryArgOptions(item, index) {


            return (


                <div className=' '>

                    <PanelBody title={item.label} initialOpen={false}>

                        <PanelRow>
                            <span
                                onClick={(ev) => { removeQueryPram(index) }}
                                className='cursor-pointer px-3 py-1 text-white bg-red-600 text-sm'><span className='dashicon dashicons dashicons-no-alt'></span> Delete</span>
                        </PanelRow>





                        {item.id == 'postType' && <div className={item.id == 'postType' ? '' : 'hidden'}>

                            <SelectControl
                                style={{ height: '75px' }}
                                label=""
                                multiple
                                value={item.val}
                                options={[
                                    { label: 'Post', value: 'post' },
                                    { label: 'Page', value: 'page' },


                                ]}
                                onChange={(newVal) => updateQueryPram(newVal, index)}
                            />


                        </div>}


                        {item.id == 'postStatus' &&
                            <div className={item.id == 'postStatus' ? '' : 'hidden'}>

                                <SelectControl
                                    style={{ height: '75px' }}
                                    label=""
                                    multiple
                                    value={item.val}
                                    options={[
                                        { label: 'Publish', value: 'publish' },
                                        { label: 'Pending', value: 'pending' },
                                        { label: 'Draft', value: 'draft' },
                                        { label: 'Auto draft', value: 'auto-draft' },
                                        { label: 'Future', value: 'future' },
                                        { label: 'Private', value: 'private' },
                                        { label: 'Inherit', value: 'inherit' },
                                        { label: 'Trash', value: 'trash' },
                                        { label: 'Any', value: 'any' },




                                    ]}
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />


                            </div>}



                        {item.id == 'order' &&
                            <div className={item.id == 'order' ? '' : 'hidden'}>

                                <SelectControl
                                    style={{ margin: 0 }}
                                    label=""

                                    value={item.val}
                                    options={[
                                        { label: 'Ascending', value: 'ASC' },
                                        { label: 'Descending', value: 'DESC' },

                                    ]}
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />

                            </div>}
                        {item.id == 'orderby' &&

                            <div className={item.id == 'orderby' ? '' : 'hidden'}>

                                <SelectControl
                                    style={{ height: '75px' }}
                                    label=""
                                    multiple
                                    value={item.val}
                                    options={[
                                        { label: 'None', value: 'none' },
                                        { label: 'ID', value: 'ID' },
                                        { label: 'author', value: 'author' },
                                        { label: 'title', value: 'title' },
                                        { label: 'name', value: 'name' },

                                        { label: 'type', value: 'type' },
                                        { label: 'date', value: 'date' },
                                        { label: 'modified', value: 'modified' },
                                        { label: 'parent', value: 'parent' },
                                        { label: 'rand', value: 'rand' },
                                        { label: 'comment_count', value: 'comment_count' },
                                        { label: 'relevance', value: 'relevance' },
                                        { label: 'menu_order', value: 'menu_order' },
                                        { label: 'meta_value', value: 'meta_value' },
                                        { label: 'meta_value_num', value: 'meta_value_num' },
                                        { label: 'post__in', value: 'post__in' },
                                        { label: 'post_name__in', value: 'post_name__in' },
                                        { label: 'post_parent__in', value: 'post_parent__in' },


                                    ]}
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />

                            </div>}
                        {item.id == 'taxQueryRelation' &&
                            <div className={item.id == 'taxQueryRelation' ? '' : 'hidden'}>


                                <SelectControl
                                    style={{ margin: 0 }}
                                    label=""
                                    value={item.val}
                                    options={[
                                        { label: 'OR', value: 'OR' },
                                        { label: 'AND', value: 'AND' },

                                    ]}
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />

                            </div>}




                        {item.id == 'metaQuery' &&
                            <div>
                                <div
                                    className='cursor-pointer inline-block mb-2 px-3 py-1 text-white bg-blue-600 text-sm'
                                    onClick={(ev) => {
                                        var itemData = queryArgs.items[index];
                                        var xx = itemData.args.concat({ fields: [{ key: '', value: '', type: '', compare: '' }], relation: 'OR' });
                                        queryArgs.items[index].args = xx;
                                        setAttributes({ queryArgs: { items: queryArgs.items } });
                                    }}

                                >Add</div>
                                {
                                    item.args.map((x, j) => {
                                        return (
                                            <div>
                                                <PanelBody title="Meta Field" initialOpen={false}>

                                                    <div
                                                        className='cursor-pointer inline-block mb-2 px-3 py-1 text-white bg-red-600 text-sm'
                                                        onClick={(ev) => {

                                                            var itemData = queryArgs.items[index];
                                                            var xx = itemData.args.splice(j, 1);
                                                            queryArgs.items[index].args = itemData.args;
                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                        }}

                                                    >Remove</div>


                                                    <PanelRow>
                                                        <div>Relation</div>
                                                        <SelectControl
                                                            style={{ margin: 0 }}
                                                            label=""
                                                            value={x.relation}
                                                            options={[
                                                                { label: 'OR', value: 'OR' },
                                                                { label: 'AND', value: 'AND' },
                                                            ]}
                                                            onChange={(newVal) => {
                                                                var itemData = queryArgs.items[index];

                                                                //itemData.args.relation = newVal;
                                                                itemData.args[j].relation = newVal;

                                                                //var term = itemData.args[j].fields[k]
                                                                //term.taxonomy = newVal;
                                                                console.log(itemData.args[j].relation);

                                                                console.log(newVal);
                                                                console.log(j);

                                                                queryArgs.items[index].args = itemData.args;
                                                                setAttributes({ queryArgs: { items: queryArgs.items } });
                                                            }}
                                                        />
                                                    </PanelRow>
                                                    {x.fields.map((y, k) => {
                                                        return (

                                                            <div className='border-b border-solid border-gray-300 py-3'>

                                                                <InputControl
                                                                    label="Custom field key"
                                                                    value={y.key}
                                                                    placeholder="meta_key"
                                                                    onChange={(newVal) => {
                                                                        var itemData = queryArgs.items[index];


                                                                        var term = itemData.args[j].fields[k]
                                                                        term.key = newVal;

                                                                        queryArgs.items[index].args = itemData.args;
                                                                        setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                    }}
                                                                />

                                                                <InputControl
                                                                    label="Meta Value "
                                                                    value={y.value}
                                                                    placeholder="25"
                                                                    onChange={(newVal) => {
                                                                        var itemData = queryArgs.items[index];


                                                                        var term = itemData.args[j].fields[k]
                                                                        term.value = newVal;

                                                                        queryArgs.items[index].args = itemData.args;
                                                                        setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                    }}
                                                                />

                                                                <PanelRow>
                                                                    <SelectControl
                                                                        style={{ margin: 0 }}
                                                                        label="Custom field type"
                                                                        value={y.type}
                                                                        options={[
                                                                            { label: 'NUMERIC', value: 'NUMERIC' },
                                                                            { label: 'BINARY', value: 'BINARY' },
                                                                            { label: 'CHAR', value: 'CHAR' },
                                                                            { label: 'DATE', value: 'DATE' },
                                                                            { label: 'DATETIME', value: 'DATETIME' },
                                                                            { label: 'DECIMAL', value: 'DECIMAL' },
                                                                            { label: 'SIGNED', value: 'SIGNED' },
                                                                            { label: 'TIME', value: 'TIME' },
                                                                            { label: 'UNSIGNED', value: 'UNSIGNED' },


                                                                        ]}
                                                                        onChange={(newVal) => {
                                                                            var itemData = queryArgs.items[index];


                                                                            var term = itemData.args[j].fields[k]
                                                                            term.type = newVal;

                                                                            queryArgs.items[index].args = itemData.args;
                                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                        }}

                                                                    />
                                                                    <SelectControl
                                                                        style={{ margin: 0 }}
                                                                        label="compare "
                                                                        value={y.compare}
                                                                        options={[
                                                                            { label: 'IN', value: 'IN' },
                                                                            { label: 'NOT IN', value: 'NOT IN' },
                                                                            { label: 'AND', value: 'AND' },
                                                                            { label: 'EXISTS', value: 'EXISTS' },
                                                                            { label: 'NOT EXISTS', value: 'NOT EXISTS' },
                                                                        ]}
                                                                        onChange={(newVal) => {
                                                                            var itemData = queryArgs.items[index];


                                                                            var term = itemData.args[j].fields[k]
                                                                            term.compare = newVal;

                                                                            queryArgs.items[index].args = itemData.args;
                                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                        }}
                                                                    />
                                                                </PanelRow>
                                                            </div>
                                                        )
                                                    })}
                                                    <div
                                                        className='cursor-pointer text-center px-3 py-1 text-white bg-blue-600 text-sm'
                                                        onClick={(ev) => {

                                                            var itemData = queryArgs.items[index];

                                                            var xx = itemData.args[j].fields.concat({ key: '', value: '', type: '', compare: '' });
                                                            queryArgs.items[index].args[j].fields = xx;

                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                        }}
                                                    >Add</div>
                                                </PanelBody>
                                            </div>
                                        )

                                    })
                                }

                            </div>
                        }


                        {item.id == 'taxQuery' &&
                            <div>
                                <div
                                    className='cursor-pointer inline-block mb-2 px-3 py-1 text-white bg-blue-600 text-sm'
                                    onClick={(ev) => {
                                        var itemData = queryArgs.items[index];
                                        var xx = itemData.args.concat({ terms: [{ taxonomy: '', field: '', terms: '', operator: '' }], relation: 'OR' });
                                        queryArgs.items[index].args = xx;
                                        setAttributes({ queryArgs: { items: queryArgs.items } });
                                    }}

                                >Add</div>
                                {
                                    item.args.map((x, j) => {
                                        return (
                                            <div>
                                                <PanelBody title="Term" initialOpen={false}>

                                                    <div
                                                        className='cursor-pointer inline-block mb-2 px-3 py-1 text-white bg-red-600 text-sm'
                                                        onClick={(ev) => {

                                                            var itemData = queryArgs.items[index];
                                                            var xx = itemData.args.splice(j, 1);
                                                            queryArgs.items[index].args = itemData.args;
                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                        }}

                                                    >Remove</div>


                                                    <PanelRow>
                                                        <div>Terms Relation</div>
                                                        <SelectControl
                                                            style={{ margin: 0 }}
                                                            label=""
                                                            value={x.relation}
                                                            options={[
                                                                { label: 'OR', value: 'OR' },
                                                                { label: 'AND', value: 'AND' },
                                                            ]}
                                                            onChange={(newVal) => {
                                                                var itemData = queryArgs.items[index];

                                                                //itemData.args.relation = newVal;
                                                                itemData.args[j].relation = newVal;

                                                                //var term = itemData.args[j].terms[k]
                                                                //term.taxonomy = newVal;
                                                                console.log(itemData.args[j].relation);

                                                                console.log(newVal);
                                                                console.log(j);

                                                                queryArgs.items[index].args = itemData.args;
                                                                setAttributes({ queryArgs: { items: queryArgs.items } });
                                                            }}
                                                        />
                                                    </PanelRow>
                                                    {x.terms.map((y, k) => {
                                                        return (

                                                            <div className='border-b border-solid border-gray-300 py-3'>

                                                                <InputControl
                                                                    label="Taxonomy"
                                                                    value={y.taxonomy}
                                                                    placeholder="Taxonomy"
                                                                    onChange={(newVal) => {
                                                                        var itemData = queryArgs.items[index];


                                                                        var term = itemData.args[j].terms[k]
                                                                        term.taxonomy = newVal;

                                                                        queryArgs.items[index].args = itemData.args;
                                                                        setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                    }}
                                                                />

                                                                <InputControl
                                                                    label="Terms"
                                                                    value={y.terms}
                                                                    placeholder="Comma separated"
                                                                    onChange={(newVal) => {
                                                                        var itemData = queryArgs.items[index];


                                                                        var term = itemData.args[j].terms[k]
                                                                        term.terms = newVal;

                                                                        queryArgs.items[index].args = itemData.args;
                                                                        setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                    }}
                                                                />

                                                                <PanelRow>
                                                                    <SelectControl
                                                                        style={{ margin: 0 }}
                                                                        label="Fields"
                                                                        value={y.field}
                                                                        options={[
                                                                            { label: 'Term ID', value: 'term_id' },
                                                                            { label: 'Name', value: 'name' },
                                                                            { label: 'Slug', value: 'slug' },
                                                                            { label: 'Term taxonomy id', value: 'term_taxonomy_id' },

                                                                        ]}
                                                                        onChange={(newVal) => {
                                                                            var itemData = queryArgs.items[index];


                                                                            var term = itemData.args[j].terms[k]
                                                                            term.field = newVal;

                                                                            queryArgs.items[index].args = itemData.args;
                                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                        }}

                                                                    />
                                                                    <SelectControl
                                                                        style={{ margin: 0 }}
                                                                        label="Operator"
                                                                        value={y.operator}
                                                                        options={[
                                                                            { label: 'IN', value: 'IN' },
                                                                            { label: 'NOT IN', value: 'NOT IN' },
                                                                            { label: 'AND', value: 'AND' },
                                                                            { label: 'EXISTS', value: 'EXISTS' },
                                                                            { label: 'NOT EXISTS', value: 'NOT EXISTS' },
                                                                        ]}
                                                                        onChange={(newVal) => {
                                                                            var itemData = queryArgs.items[index];


                                                                            var term = itemData.args[j].terms[k]
                                                                            term.operator = newVal;

                                                                            queryArgs.items[index].args = itemData.args;
                                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                                        }}
                                                                    />
                                                                </PanelRow>
                                                            </div>
                                                        )
                                                    })}
                                                    <div
                                                        className='cursor-pointer text-center px-3 py-1 text-white bg-blue-600 text-sm'
                                                        onClick={(ev) => {

                                                            var itemData = queryArgs.items[index];

                                                            var xx = itemData.args[j].terms.concat({ taxonomy: '', field: '', terms: '', operator: '' });
                                                            queryArgs.items[index].args[j].terms = xx;

                                                            setAttributes({ queryArgs: { items: queryArgs.items } });
                                                        }}
                                                    >Add</div>
                                                </PanelBody>
                                            </div>
                                        )

                                    })
                                }

                            </div>
                        }





                        {(item.id == 'metaKey' || item.id == 'metaValue' || item.id == 'metaValueNum' || item.id == 'metaCompare' || item.id == 'year' || item.id == 'monthnum' || item.id == 'w' || item.id == 'day' || item.id == 'hour' || item.id == 'minute' || item.id == 'second' || item.id == 'm' || item.id == 'author' || item.id == 'authorName' || item.id == 'tag' || item.id == 'tagId' || item.id == 'cat' || item.id == 'categoryName' || item.id == 'p' || item.id == 'name' || item.id == 'pageId' || item.id == 'pagename' || item.id == 'postParent' || item.id == 'postPassword' || item.id == 'postsPerPage' || item.id == 'paged' || item.id == 'offset' || item.id == 'postsPerArchivePage' || item.id == 'perm') &&

                            <div >
                                <InputControl
                                    value={item.val}
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />


                            </div>

                        }
                        {item.id == 'authorIn' &&
                            <div className={item.id == 'authorIn' ? '' : 'hidden'}>


                                {JSON.stringify(item.val)}

                                {

                                    generateQueryFieldAuthorIn(item)

                                }

                            </div>
                        }





                        {(item.id == 'postNameIn' || item.id == 'postNotIn' || item.id == 'postIn' || item.id == 'postParentNotIn' || item.id == 'tagNotIn' || item.id == 'tagAnd' || item.id == 'tagIn' || item.id == 'postParentIn' || item.id == 'tagSlugIn' || item.id == 'tagSlugAnd' || item.id == 'categoryNotIn' || item.id == 'categoryIn' || item.id == 'categoryAnd') &&

                            <div >
                                <InputControl
                                    value={item.val}
                                    placeholder="Comma separated"
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />


                            </div>

                        }

                        <div className={item.id == 'postNameIndd' ? '' : 'hidden'}>
                            {JSON.stringify(item.args)}
                            <div
                                className='cursor-pointer text-center px-3 py-1 text-white bg-blue-600 text-sm'
                                onClick={(ev) => {

                                    var itemData = queryArgs.items[index];

                                    var args = itemData.args;
                                    var args = itemData.args.concat({ slug: '' });
                                    itemData.args = args;
                                    queryArgs.items[index] = itemData;
                                    setAttributes({ queryArgs: { items: queryArgs.items } });
                                }}
                            >Add</div>


                        </div>

                        {item.id == 'commentCount' &&
                            <div >

                                <InputControl
                                    value={item.val.value}
                                    placeholder="Comment Count, Ex: 25"
                                    onChange={(newVal) => updateQueryPram({ value: newVal, compare: item.val.compare }, index)}
                                />

                                <SelectControl
                                    style={{ margin: 0 }}
                                    label=""

                                    value={item.val.compare}
                                    options={[
                                        { label: '=', value: '=' },
                                        { label: '!=', value: '!=' },
                                        { label: '>', value: '>' },
                                        { label: '>=', value: '>=' },
                                        { label: '<', value: '<' },
                                        { label: '<=', value: '<=' },
                                    ]}
                                    onChange={(newVal) => updateQueryPram({ value: item.val.value, compare: newVal }, index)}
                                />

                            </div>
                        }


                        {item.id == 'postMimeType' &&
                            <div >


                                <SelectControl
                                    style={{ margin: 0 }}
                                    label=""
                                    multiple
                                    value={item.val}
                                    options={[
                                        { label: 'image/jpeg', value: 'jpg|jpeg|jpe' },
                                        { label: 'image/gif', value: 'gif' },
                                        { label: 'image/png', value: 'png' },
                                        { label: 'image/bmp', value: 'bmp' },


                                    ]}
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />

                            </div>}
                        {(item.id == 'cacheResults' || item.id == 'nopaging' || item.id == 'hasPassword' || item.id == 'ignoreStickyPosts' || item.id == 'updatePostMetaCache' || item.id == 'updatePostTermCache') &&
                            <div >
                                <SelectControl
                                    style={{ margin: 0 }}
                                    label=""

                                    value={item.val}
                                    options={[
                                        { label: 'True', value: true },
                                        { label: 'False', value: false },

                                    ]}
                                    onChange={(newVal) => updateQueryPram(newVal, index)}
                                />
                            </div>
                        }










                        <p>{item.description}</p>



                    </PanelBody>



                </div>


            )

        }



        function addQueryPram(index) {


            // //console.log(queryPrams);

            var attrExist = false;

            //console.log(index);
            var data = queryPrams[index];
            var multiple = data.multiple;
            //console.log(multiple);

            var isExist = queryArgs.items.map((item) => {
                ////console.log(item);

                if (item.id == index) {
                    //console.log(item);
                    return true;
                }
            })

            //console.log(isExist);



            var items = queryArgs.items.concat([data])
            setAttributes({ queryArgs: { items: items } });

        }

        function addGridColumn() {

            var gridTemplateColumns = grid.gridTemplateColumns.concat([{ val: 1, unit: 'fr' }])

            setAttributes({ grid: { gridTemplateColumns: gridTemplateColumns, gridTemplateRows: grid.gridTemplateRows, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding } });







        }

        function selectLayout() {

            var post_content = `<!-- wp:paragraph -->
    <p>Hello</p>
    <!-- /wp:paragraph -->
    <!-- wp:list -->
    <ul>
    <li>hello 1</li>
    <li>hello 2</li>
    <li> </li>
    </ul>
    <!-- /wp:list -->`;



            wp.data.dispatch('core/editor').insertBlocks(wp.blocks.parse(post_content));




        }


        function addGridRow() {

            var gridTemplateRows = grid.gridTemplateRows.concat([{ val: 1, unit: 'fr' }])

            setAttributes({ grid: { gridTemplateColumns: grid.gridTemplateColumns, gridTemplateRows: gridTemplateRows, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding } });

        }



        function deleteGridColumn(i) {


            grid.gridTemplateColumns.splice(i, 1)

            setAttributes({ grid: { gridTemplateColumns: grid.gridTemplateColumns, gridTemplateRows: grid.gridTemplateRows, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding, } })

        }

        function deleteGridRow(i) {


            grid.gridTemplateRows.splice(i, 1)

            setAttributes({ grid: { gridTemplateColumns: grid.gridTemplateColumns, gridTemplateRows: grid.gridTemplateRows, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding, } })

        }






        return (
            [


                <div>
                    <InspectorControls key="general">

                        <div className='blockxyz'>

                            <div className='px-3'>
                                <SelectControl
                                    label="View Type"
                                    value={viewType}
                                    options={[
                                        { label: 'Grid', value: 'grid' },
                                        { label: 'Filterable', value: 'filterable' },
                                        { label: 'Carousel', value: 'carousel' },
                                        { label: 'Glossary', value: 'glossary' },
                                    ]}
                                    onChange={(newSize) => setAttributes({ viewType: newSize })}
                                />
                            </div>

                            <PanelBody title="General" initialOpen={false}>

                                <div className=''>
                                    <div className='py-2 font-bold '>Container Options</div>

                                    <label for="">Padding</label>
                                    <InputControl
                                        value={container.padding.val}
                                        onChange={(newVal) => setAttributes({ container: { padding: { val: newVal, unit: container.padding.unit }, margin: container.margin, bgColor: container.bgColor, bgImg: container.bgImg } })}
                                    />

                                    <label for="">Margin</label>
                                    <InputControl
                                        value={container.margin.val}
                                        onChange={(newVal) => setAttributes({ container: { padding: container.padding, margin: { val: newVal, unit: container.margin.unit }, bgColor: container.bgColor, bgImg: container.bgImg } })}
                                    />


                                    <label for="">Background Color</label>
                                    {/* <ColorPicker
                                        color={container.bgColor}
                                        onChange={(newVal) => setAttributes({ container: { padding: container.padding, margin: container.margin, bgColor: newVal, bgImg: container.bgImg } })}

                                        enableAlpha
                                        defaultValue="#000"
                                    /> */}


                                    <ColorPalette
                                        color={container.bgColor}
                                        colors={colors}
                                        enableAlpha
                                        onChange={(newVal) => setAttributes({ container: { padding: container.padding, margin: container.margin, bgColor: newVal, bgImg: container.bgImg } })}
                                    />

                                    <label for="">Background Image</label>
                                    <img src={container.bgImg.url} alt="" />

                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => {
                                                // media.id
                                                setAttributes({ container: { padding: container.padding, margin: container.margin, bgColor: container.bgColor, bgImg: { id: media.id, url: media.url } } })
                                            }


                                            }
                                            onClose={() => {
                                                ////console.log('onClose')
                                            }


                                            }

                                            allowedTypes={ALLOWED_MEDIA_TYPES}
                                            value={container.bgImg}
                                            render={({ open }) => (

                                                <Button onClick={open}>Open Media Library</Button>


                                            )}
                                        />
                                    </MediaUploadCheck>

                                </div>







                                {/* <RichText key="editable2" tagName="p" placeholder="Keep writing..." value={attributes.dummyName} onChange={updateName} >
                                </RichText> */}

                            </PanelBody>



                            <PanelBody title="Lazy load" initialOpen={false}>


                                <div>
                                    <SelectControl
                                        label="Enable"
                                        value={lazyLoad.enable}
                                        options={[
                                            { label: 'Yes', value: 'yes' },
                                            { label: 'No', value: 'no' },
                                        ]}
                                        onChange={(newSize) => updateLazyLoadEnable(newSize)}
                                    />
                                </div>

                                <label for="">Lazy Load Image</label>

                                <img src={lazyLoad.srcUrl} alt="" />

                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => {
                                            // media.id
                                            ////console.log(media);
                                            updateLazyLoadsrcUrl(media.url, media.id);
                                            //updateLazyLoadsrcId(media.id);

                                        }


                                        }
                                        onClose={() => {
                                            ////console.log('onClose')
                                        }


                                        }

                                        allowedTypes={ALLOWED_MEDIA_TYPES}
                                        value={lazyLoad.srcId}
                                        render={({ open }) => (

                                            <Button onClick={open}>Open Media Library</Button>


                                        )}
                                    />
                                </MediaUploadCheck>
                            </PanelBody>


                            <PanelBody title="Query Post" initialOpen={false}>



                                <SelectControl
                                    label=""
                                    options={queryPramsX}
                                    onChange={(newVal) => addQueryPram(newVal)}

                                />




                                {queryArgs.items.map((item, index) => {

                                    ////console.log(item);
                                    ////console.log(index);

                                    return generateQueryArgOptions(item, index);

                                })



                                }






                            </PanelBody>
                            <PanelBody title="Layouts" initialOpen={false}>



                                <PanelRow>
                                    <InputControl
                                        value={layout.keyword}
                                        type="text"
                                        placeholder="Search Here..."
                                        onChange={(newVal) => setAttributes({ layout: { id: layout.id, keyword: newVal, category: layout.category, categories: layout.categories } })}

                                    />
                                    <SelectControl
                                        style={{ margin: 0 }}
                                        label=""
                                        value={layout.category}
                                        options={[
                                            { label: 'fr', value: 'fr' },
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },




                                        ]}
                                        onChange={(newVal) => setAttributes({ layout: { id: layout.id, keyword: layout.keyword, category: newVal, categories: layout.categories } })}
                                    />





                                </PanelRow>

                                <Button className='mb-3' variant="secondary" onClick={selectLayout} >Select layout</Button>


                            </PanelBody>
                            <PanelBody title="Grid Settings" initialOpen={false} className={(viewType == 'grid' || viewType == 'filterable' || viewType == 'glossary') ? '' : 'hidden'}>


                                <Button className='mb-3' variant="secondary" onClick={addGridColumn} >Add Column</Button>



                                {grid.gridTemplateColumns.map((item, index) => {
                                    ////console.log(item);
                                    ////console.log(index);

                                    return (


                                        <PanelRow>
                                            <InputControl
                                                value={item.val}
                                                type="number"
                                                onChange={(newVal) => setAttributes({ grid: { gridTemplateColumns: grid.gridTemplateColumns.map((x, i) => { return (index == i) ? { val: newVal, unit: x.unit } : x }), gridTemplateRows: grid.gridTemplateRows, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding, } })}

                                            />
                                            <SelectControl
                                                style={{ margin: 0 }}
                                                label=""
                                                value={item.unit}
                                                options={[
                                                    { label: 'fr', value: 'fr' },
                                                    { label: 'px', value: 'px' },
                                                    { label: '%', value: '%' },
                                                    { label: 'em', value: 'em' },




                                                ]}
                                                onChange={(newVal) => setAttributes({ grid: { gridTemplateColumns: grid.gridTemplateColumns.map((x, i) => { return (index == i) ? { val: x.val, unit: newVal } : x }), gridTemplateRows: grid.gridTemplateRows, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding, } })}
                                            />



                                            <Button icon="no-alt"
                                                onClick={(ev) => { deleteGridColumn(index) }}

                                            ></Button>

                                        </PanelRow>


                                    )
                                })}




                                <Button onClick={addGridRow} className='my-3' variant="secondary" >Add Row</Button>


                                {grid.gridTemplateRows.map((item, index) => {
                                    ////console.log(item);
                                    ////console.log(index);

                                    return (


                                        <PanelRow>
                                            <InputControl
                                                value={item.val}
                                                type="number"
                                                onChange={(newVal) => setAttributes({ grid: { gridTemplateRows: grid.gridTemplateRows.map((x, i) => { return (index == i) ? { val: newVal, unit: x.unit } : x }), gridTemplateColumns: grid.gridTemplateColumns, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding, } })}

                                            />
                                            <SelectControl className='mb-0'
                                                value={item.unit}
                                                options={[
                                                    { label: 'fr', value: 'fr' },
                                                    { label: 'px', value: 'px' },
                                                    { label: '%', value: '%' },
                                                    { label: 'em', value: 'em' },




                                                ]}
                                                onChange={(newVal) => setAttributes({ grid: { gridTemplateRows: grid.gridTemplateRows.map((x, i) => { return (index == i) ? { val: x.val, unit: newVal } : x }), gridTemplateColumns: grid.gridTemplateColumns, colGap: grid.colGap, rowGap: grid.rowGap, padding: grid.padding, } })}
                                            />
                                            <Button icon="no-alt"
                                                onClick={(ev) => { deleteGridRow(index) }}

                                            ></Button>

                                        </PanelRow>


                                    )
                                })}


                                <label for="">Column Gap</label>

                                <PanelRow>
                                    <InputControl
                                        value={grid.colGap.val}
                                        type="number"
                                        onChange={(newVal) => setAttributes({ grid: { gridTemplateRows: grid.gridTemplateRows, gridTemplateColumns: grid.gridTemplateColumns, colGap: { val: newVal, unit: grid.colGap.unit }, rowGap: grid.rowGap, padding: grid.padding, } })}

                                    />
                                    <SelectControl className='mb-0'
                                        value={grid.colGap.unit}
                                        options={[
                                            { label: 'fr', value: 'fr' },
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                        ]}
                                        onChange={(newVal) => setAttributes({ grid: { gridTemplateRows: grid.gridTemplateRows, gridTemplateColumns: grid.gridTemplateColumns, colGap: { val: grid.colGap.val, unit: newVal }, rowGap: grid.rowGap, padding: grid.padding, } })}
                                    />


                                </PanelRow>





                                <label for="">Row Gap</label>

                                <PanelRow>
                                    <InputControl
                                        value={grid.rowGap.val}
                                        type="number"
                                        onChange={(newVal) => setAttributes({ grid: { gridTemplateRows: grid.gridTemplateRows, gridTemplateColumns: grid.gridTemplateColumns, rowGap: { val: newVal, unit: grid.rowGap.unit }, colGap: grid.colGap, padding: grid.padding, } })}

                                    />
                                    <SelectControl className='mb-0'
                                        value={grid.rowGap.unit}
                                        options={[
                                            { label: 'fr', value: 'fr' },
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                        ]}
                                        onChange={(newVal) => setAttributes({ grid: { gridTemplateRows: grid.gridTemplateRows, gridTemplateColumns: grid.gridTemplateColumns, rowGap: { val: grid.rowGap.val, unit: newVal }, colGap: grid.colGap, padding: grid.padding, } })}
                                    />


                                </PanelRow>








                            </PanelBody>

                            <PanelBody title="Pagination" initialOpen={false} className={viewType == 'carousel' ? 'hidden' : ''}>

                                <SelectControl
                                    label="Enable"
                                    value={pagination.type}
                                    options={[
                                        { label: 'None', value: 'none' },
                                        { label: 'Normal Pagination', value: 'normal' },
                                        { label: 'Ajax Pagination', value: 'ajax' },
                                        { label: 'Next-Previous', value: 'next_previous' },
                                        { label: 'Filterable Pagination', value: 'filterable' },
                                        { label: 'Load More', value: 'loadmore' },
                                        { label: 'Infinite Load', value: 'infinite' },



                                    ]}
                                    onChange={(newVal) => setAttributes({ pagination: { type: newVal, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: pagination.nextText, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />

                                <label for="">Max Number of Pagination</label>
                                <InputControl
                                    value={pagination.maxPageNum}
                                    onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: newVal, prevText: pagination.prevText, nextText: pagination.nextText, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />

                                <label for="">Previous Text</label>

                                <InputControl
                                    value={pagination.prevText}
                                    onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: newVal, nextText: pagination.nextText, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />


                                <label for="">Next Text</label>

                                <InputControl
                                    value={pagination.nextText}
                                    onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: newVal, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />

                                <label for="">Font Size</label>

                                <InputControl
                                    value={pagination.fontSize}
                                    onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: pagination.nextText, fontSize: newVal, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />


                                <label for="">Text Color</label>

                                <ColorPalette
                                    color={pagination.textColor}
                                    colors={colors}
                                    enableAlpha
                                    onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: pagination.fontSize, fontSize: pagination.fontSize, textColor: newVal, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />



                                <label for="">Background Color</label>


                                <ColorPalette
                                    color={pagination.bgColor}
                                    colors={colors}
                                    enableAlpha
                                    onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: pagination.fontSize, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: newVal, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />


                                <label for="">Active/Hover Background Color</label>
                                <ColorPalette
                                    color={pagination.bgActiveColor}
                                    colors={colors}
                                    enableAlpha
                                    onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: pagination.fontSize, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: newVal, loadMoreText: pagination.loadMoreText, loadingIcon: pagination.loadingIcon, } })}
                                />





                                <div className={(pagination.type == 'loadmore' || pagination.type == 'infinite') ? '' : 'hidden'}>
                                    <label for="">Load More Text</label>

                                    <InputControl
                                        value={pagination.loadMoreText}
                                        onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: pagination.fontSize, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: newVal, loadingIcon: pagination.loadingIcon, } })}
                                    />


                                    <label for="">Loading Icon</label>

                                    <InputControl
                                        value={pagination.loadingIcon}
                                        onChange={(newVal) => setAttributes({ pagination: { type: pagination.type, maxPageNum: pagination.maxPageNum, prevText: pagination.prevText, nextText: pagination.fontSize, fontSize: pagination.fontSize, textColor: pagination.textColor, hoverColor: pagination.hoverColor, bgColor: pagination.bgColor, bgActiveColor: pagination.bgActiveColor, loadMoreText: pagination.loadMoreText, loadingIcon: newVal, } })}
                                    />
                                </div>





                            </PanelBody>


                            <PanelBody title="Filterable" initialOpen={false} className={viewType == 'filterable' ? '' : 'hidden'}>

                            </PanelBody>

                            <PanelBody title="Glossary" initialOpen={false} className={viewType == 'glossary' ? '' : 'hidden'}>

                            </PanelBody>
                            <PanelBody title="Carousel" initialOpen={false} className={(viewType == 'carousel') ? '' : 'hidden'}></PanelBody>
                            <PanelBody title="Masonry" initialOpen={false} className={(viewType == 'carousel' || viewType == 'glossary' || viewType == 'filterable') ? 'hidden' : ''}>

                                <SelectControl
                                    label="Enable"
                                    value={masonry.enable}

                                    options={[
                                        { label: 'No', value: 'no' },
                                        { label: 'Yes', value: 'yes' },
                                    ]}
                                    onChange={(newVal) => setAttributes({ masonry: { enable: newVal, } })}
                                />


                            </PanelBody>
                            <PanelBody title="Search" initialOpen={false} className={(viewType == 'grid' || viewType == 'filterable') ? '' : 'hidden'}>

                                <SelectControl
                                    label="Enable"
                                    value={search.enable}

                                    options={[
                                        { label: 'No', value: 'no' },
                                        { label: 'Yes', value: 'yes' },
                                    ]}
                                    onChange={(newVal) => setAttributes({ search: { enable: newVal, type: search.type, placeholder: search.placeholder, icon: search.icon, busyIcon: search.busyIcon } })}
                                />


                                <SelectControl
                                    label="Search action"
                                    value={search.type}

                                    options={[
                                        { label: 'Ajax - On change form data', value: 'ajax' },
                                        { label: 'On form submit - GET method', value: 'form_submit' },
                                    ]}
                                    onChange={(newVal) => setAttributes({ search: { enable: search.type, type: newVal, placeholder: search.placeholder, icon: search.icon, busyIcon: search.busyIcon } })}
                                />

                                <InputControl
                                    label="Placeholder text"

                                    value={search.placeholder}
                                    onChange={(newVal) => setAttributes({ search: { enable: search.type, type: search.type, placeholder: newVal, icon: search.icon, busyIcon: search.busyIcon } })}
                                />

                                <InputControl
                                    label="Search icon"

                                    value={search.icon}
                                    onChange={(newVal) => setAttributes({ search: { enable: search.type, type: search.type, placeholder: search.placeholder, icon: newVal, busyIcon: search.busyIcon } })}
                                />

                                <InputControl
                                    label="Loading icon"

                                    value={search.busyIcon}
                                    onChange={(newVal) => setAttributes({ search: { enable: search.type, type: search.type, placeholder: search.placeholder, icon: search.icon, busyIcon: newVal } })}
                                />




                            </PanelBody>
                            <PanelBody title="Custom Scripts" initialOpen={false}></PanelBody>




                        </div>

                    </InspectorControls>
                </div>
                ,


                <div className="my-custom-block">
                    <CustomCss cssData={props.attributes}>
                        <div className='bg-gray-400 p-3 '>1</div>
                        <div className='bg-gray-400 p-3'>2</div>
                        <div className='bg-gray-400 p-3'>3</div>
                        <div className='bg-gray-400 p-3'>4</div>
                        <div className='bg-gray-400 p-3'>5</div>
                        <div className='bg-gray-400 p-3'>6</div>
                        <div className='bg-gray-400 p-3'>7</div>
                        <div className='bg-gray-400 p-3'>8</div>
                        <div className='bg-gray-400 p-3'>9</div>
                        <div className='bg-gray-400 p-3'>10</div>
                        <div className='bg-gray-400 p-3'>11</div>
                        <div className='bg-gray-400 p-3'>12</div>
                        <div className='bg-gray-400 p-3'>1</div>
                        <div className='bg-gray-400 p-3'>2</div>
                        <div className='bg-gray-400 p-3'>3</div>
                        <div className='bg-gray-400 p-3'>4</div>
                        <div className='bg-gray-400 p-3'>5</div>
                        <div className='bg-gray-400 p-3'>6</div>
                        <div className='bg-gray-400 p-3'>7</div>
                        <div className='bg-gray-400 p-3'>8</div>
                        <div className='bg-gray-400 p-3'>9</div>
                        <div className='bg-gray-400 p-3'>10</div>
                        <div className='bg-gray-400 p-3'>11</div>
                        <div className='bg-gray-400 p-3'>12</div>




                    </CustomCss>


                    <code>
                        {/* {viewType} */}
                        <br />
                        {/* {JSON.stringify(viewType)}
                        {JSON.stringify(lazyLoad)}
                        {JSON.stringify(container)}
                        {JSON.stringify(pagination)}
                        {JSON.stringify(masonry)}
                        {JSON.stringify(search)}
                        {JSON.stringify(grid)}

                        {JSON.stringify(layout)} */}
                        {JSON.stringify(queryArgs)}


                    </code>



                </div>
            ]




        )
    },
    save: function (props) {
        // to make a truly dynamic block, we're handling front end by render_callback under index.php file
        return null;
    }
})