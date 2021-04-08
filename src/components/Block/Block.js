import React from 'react'
import './Block.sass';
import './Block__Two-items.sass';
import './Block__Two-items-aligned.sass';
import './Block__Two-items-overlap.sass';
import './Block__Four-items.sass';
import './Block__Two-items-crossed-bottom.sass';
import './Block__Three-items-gallery.sass';
import './Block__Two-items-crossed-top.sass';
import './Block__Two-items-crossed-top-overlap.sass';
import './Block__Two-items-crossed-bottom-spaced.sass';
import './Block__Two-items-crossed-bottom-squared.sass';

import ReactPlayer from 'react-player'

import parse from 'html-react-parser'


// Disposition classmatcher
const getDispositionClass = (disposition) => {
    switch (disposition) {
        case 'two_items':
            return 'Block__Two-items'
        case 'two_items_overlap':
            return 'Block__Two-items-overlap'
        case 'four_items':
            return 'Block__Four-items'
        case 'two_items_crossed_bottom':
            return 'Block__Two-items-crossed-bottom'
        case 'two_items_crossed_bottom_spaced':
            return 'Block__Two-items-crossed-bottom-spaced'
        case 'two_items_crossed_bottom_squared':
            return 'Block__Two-items-crossed-bottom-squared'
        case 'two_items_crossed_top':
            return 'Block__Two-items-crossed-top'
        case 'two_items_crossed_top_overlap':
            return 'Block__Two-items-crossed-top-overlap'
        case 'three_items_gallery':
            return 'Block__Three-items-gallery'
        case 'two_items_l_style':
            return 'Block__Two-items-l-style'
        default:
            return ""
            
    }
}

// Size classmatcher
const getSizeClass = (size) => {
    switch (size) {
        case 'small':
            return 'Block__Small-width'
        default:
            return ""
    }
}

const VideoItem = ({ url, background }) => {
    return (
        <div className={"Block-illustration Block-illustration-video"} style={{ backgroundImage: "url('" + background + "')"}}>
            <ReactPlayer controls playing={true} muted={true} loop url={url} width='100%' height='100%' />
        </div>
    )
}

// Render functions
const renderItem = ({ ext, url, alt, background }, index) => {
    switch (ext) {
        case '.png':
            return (
                <img className="Block-illustration Block-illustration-image" src={url} alt={alt} key={index + "-picture-item"} />
            )
        case '.mp4':
            return (<VideoItem url={url} background={background} />)
        default:
            return null
    }
}

const renderFirstItem = (item, { title, domain, short_description }, index) => {
    return (
        <div className={"Block-caption"} key={index + "-first-item"}>
            {renderItem(item)}
            <h4>{title}</h4>
            {parse(short_description)}
            {parse(`<p>${domain}</p>`)}
        </div>
    )
}

const Block = ({ data, handleClick }) => {
    const { path, title, disposition, domain,short_description, previews, size } = data
    const dispositionClass = " " + getDispositionClass(disposition)
    const sizeClass = " " + getSizeClass(size)

    return (
        <section className={"Block" + dispositionClass + sizeClass} onClick={() => { handleClick(path)}}>
                {
                    previews.map((item, i) => {
                        if(i === 0) {
                            return renderFirstItem(item, { title, domain, short_description })
                        } else {
                            return renderItem(item, i)
                        }
                    })
                }
        </section>
    )
};

export default Block;