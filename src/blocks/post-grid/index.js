import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import styled from 'styled-components'


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

//console.log(breakPoints);

import breakPoints from '../../breakpoints'
import queryPrams from '../../queryprams'

//console.log(queryPrams);


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
                    { multiple: false, value: 0, val: [], id: 'postType', label: 'Post Types 1', description: "Select Post Types to Query" },
                    { multiple: false, value: 1, val: '', id: 'taxQuery', label: 'Tax Query', description: "Taxonomies query arguments" },
                    { multiple: false, value: 2, val: '', id: 'metaQuery', label: 'Meta Query', description: "Meta field query" },
                    { multiple: false, value: 3, val: '', id: 's', label: 'keyword', description: "Search keyword paramater" },

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


        //console.log(queryArgs);

        const colors = [
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
        ];



        const postTypes = useSelect(
            (select) => select(coreStore).getPostTypes({ per_page: -1 }), []
        );

        //console.log(postTypes);
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




        function updateName(content) {

            setAttributes({ dummyName: content });

        }



        function removeQueryPram(i) {

            console.log(i);
            queryArgs.items.splice(i, 1);



            setAttributes({ queryArgs: { items: queryArgs.items } });

        }


        function updateQueryPram(newVal, index) {

            console.log(index);
            console.log(newVal);

            var itemData = queryArgs.items[index];



            if (itemData.id == 's' || itemData.id == 'order') {
                itemData.val = newVal;
                queryArgs.items[index] = itemData;
                setAttributes({ queryArgs: { items: queryArgs.items } });

            }

            if (itemData.id == 'postType' || itemData.id == 'orderby' || itemData.id == 'postStatus') {
                itemData.val = newVal;
                queryArgs.items[index] = itemData;
                setAttributes({ queryArgs: { items: queryArgs.items } });

            }



            //queryArgs.items.splice(i, 1);

            console.log(queryArgs);


        }



        function generateQueryArgOptions(item, index) {


            return (


                <div className=' '>

                    <PanelBody title={item.label} initialOpen={false}>

                        <PanelRow>
                            <span
                                onClick={(ev) => { removeQueryPram(index) }}
                                className='cursor-pointer px-3 bg-red-300 text-sm'><span className='dashicon dashicons dashicons-no-alt'></span> Delete</span>
                        </PanelRow>


                        <div className={item.id == 'postType' ? '' : 'hidden'}>

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


                        </div>


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


                        </div>



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

                        </div>

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

                        </div>




                        <div className={item.id == 'taxQuery' ? '' : 'hidden'}>
                            post tax Query
                        </div>

                        <div className={item.id == 'metaQuery' ? '' : 'hidden'}>
                            post meta Query
                        </div>
                        <div className={item.id == 's' ? '' : 'hidden'}>
                            <InputControl
                                value={item.val}
                                onChange={(newVal) => updateQueryPram(newVal, index)}
                            />

                        </div>





                    </PanelBody>



                </div>


            )

        }



        function addQueryPram(id) {


            // console.log(queryPrams);

            var attrExist = false;

            console.log(id);
            var data = queryPrams[id];
            var multiple = data.multiple;
            console.log(multiple);

            var isExist = queryArgs.items.map((item) => {
                //console.log(item);

                if (item.id == id) {
                    console.log(item);
                    return true;
                }
            })

            console.log(isExist);



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
                                                //console.log('onClose')
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
                                            //console.log(media);
                                            updateLazyLoadsrcUrl(media.url, media.id);
                                            //updateLazyLoadsrcId(media.id);

                                        }


                                        }
                                        onClose={() => {
                                            //console.log('onClose')
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
                                    options={queryPrams}
                                    onChange={(newVal) => addQueryPram(newVal)}

                                />


                                {queryArgs.items.map((item, index) => {

                                    //console.log(item);
                                    //console.log(index);

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
                                    //console.log(item);
                                    //console.log(index);

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
                                    //console.log(item);
                                    //console.log(index);

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
                        {viewType}
                        <br />
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