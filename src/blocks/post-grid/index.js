import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import styled from 'styled-components'


import { createElement } from '@wordpress/element'
import { PanelBody, RangeControl, Button, Panel, PanelRow, Dropdown, DropdownMenu, SelectControl, ColorPicker, ColorPalette } from '@wordpress/components'
import { InspectorControls, BlockControls, AlignmentToolbar, RichText } from '@wordpress/block-editor'
import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState } from '@wordpress/compose';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

const ALLOWED_MEDIA_TYPES = ['image'];

//var el = element.createElement;

console.log(breakPoints);

import breakPoints from '../../breakpoints'



const CustomCss = styled.div`
display: grid;
grid-template-columns: ${(props) => { return props.cssData.grid.columnCount }};
grid-template-rows: ${(props) => { return props.cssData.grid.rowCount }};

 

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
            default: { columnCount: '1fr 1fr 1fr', rowCount: '1fr 1fr 1fr', colGap: '', rowGap: '', padding: '', },
        },


        layout: {
            type: 'object',
            default: { id: '' },
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


        const colors = [
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
        ];



        const postTypes = useSelect(
            (select) => select(coreStore).getPostTypes({ per_page: -1 }), []
        );

        console.log(postTypes);
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
                                                console.log(media);
                                                setAttributes({ container: { padding: container.padding, margin: container.margin, bgColor: container.bgColor, bgImg: { id: media.id, url: media.url } } })
                                            }


                                            }
                                            onClose={() =>

                                                console.log('onClose')
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
                                            console.log(media);
                                            updateLazyLoadsrcUrl(media.url, media.id);
                                            //updateLazyLoadsrcId(media.id);

                                        }


                                        }
                                        onClose={() =>

                                            console.log('onClose')
                                        }

                                        allowedTypes={ALLOWED_MEDIA_TYPES}
                                        value={lazyLoad.srcId}
                                        render={({ open }) => (

                                            <Button onClick={open}>Open Media Library</Button>


                                        )}
                                    />
                                </MediaUploadCheck>
                            </PanelBody>


                            <PanelBody title="Query Post" initialOpen={false}></PanelBody>
                            <PanelBody title="Layouts" initialOpen={false}></PanelBody>
                            <PanelBody title="Grid Settings" initialOpen={false} className={(viewType == 'grid' || viewType == 'filterable' || viewType == 'glossary') ? '' : 'hidden'}>

                                <InputControl
                                    label="Column Count"
                                    value={grid.columnCount}
                                    onChange={(newVal) => setAttributes({ grid: { columnCount: newVal, rowCount: grid.rowCount, colGap: grid.colGap, rowGap: grid.rowGap } })}
                                />


                                <InputControl
                                    label="Row Count"
                                    value={grid.rowCount}
                                    onChange={(newVal) => setAttributes({ grid: { columnCount: grid.columnCount, rowCount: newVal, colGap: grid.colGap, rowGap: grid.rowGap } })}
                                />


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
                    <h1>Hello from asdasd Gutenberg Editor!!! {dummyName}</h1>

                    <CustomCss cssData={props.attributes}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>




                    </CustomCss>





                    <code>
                        {viewType}
                        <br />
                        {JSON.stringify(grid)}
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