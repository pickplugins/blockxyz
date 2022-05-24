import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'



import { createElement } from '@wordpress/element'
import { PanelBody, RangeControl, Button, Panel, PanelRow, Dropdown, DropdownMenu, SelectControl } from '@wordpress/components'
import { InspectorControls, BlockControls, AlignmentToolbar, RichText } from '@wordpress/block-editor'
import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState } from '@wordpress/compose';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';


const ALLOWED_MEDIA_TYPES = ['image'];

//var el = element.createElement;

console.log(breakPoints);

import breakPoints from '../../breakpoints'




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
            default: { type: '', maxPageNum: '', prevText: '', nextText: '', fontSize: '', textColor: '', hoverColor: '', bgColor: '', bgActiveColor: '' },
        },
        loadMore: {
            type: 'object',
            default: { text: 'Load More', defaultIcon: '', loadingIcon: '', textColor: '', hoverColor: '', bgColor: '', bgActiveColor: '' },
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


                <div >


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
                                    onChange={(newSize) => updateViewType(newSize)}
                                />
                            </div>

                            <PanelBody title="General" initialOpen={false}>
                                <PanelRow>
                                    <SelectControl
                                        label="View Type"
                                        value={viewType}
                                        options={[
                                            { label: 'Grid', value: 'grid' },
                                            { label: 'Filterable', value: 'filterable' },
                                            { label: 'Carousel', value: 'carousel' },
                                            { label: 'Glossary', value: 'glossary' },

                                        ]}
                                        onChange={(newSize) => updateViewType(newSize)}
                                    />


                                </PanelRow>


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
                            <PanelBody title="Pagination" initialOpen={false}></PanelBody>
                            <PanelBody title="Filterable" initialOpen={false}></PanelBody>
                            <PanelBody title="Carousel" initialOpen={false}></PanelBody>
                            <PanelBody title="Masonry" initialOpen={false}></PanelBody>




                        </div>

                    </InspectorControls>
                </div>
                ,



                <div className="my-custom-block">
                    <h1>Hello from asdasd1 Gutenberg Editor!!! {dummyName}</h1>

                    <pre>
                        {viewType}
                        <br />
                        {lazyLoad.enable}
                        <br />
                        {lazyLoad.srcUrl}
                        <br />
                        {lazyLoad.srcId}
                        <br />
                    </pre>



                </div>
            ]




        )
    },
    save: function (props) {
        // to make a truly dynamic block, we're handling front end by render_callback under index.php file
        return null;
    }
})