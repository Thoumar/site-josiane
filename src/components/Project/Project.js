import './Project.sass';
import { NavLink } from 'react-router-dom';

const serverUri = 'http://localhost:1337'

// Disposition classmatcher
const getDispositionClass = (disposition) => {
    switch (disposition) {
        case 'two_items':
            return 'Project__Two-items'
        case 'four_items':
            return 'Project__Four-items'
        case 'two_items_crossed_bottom':
            return 'Project__Two-items-crossed-bottom'
        case 'two_items_crossed_top':
            return 'Project__Two-items-crossed-top'
        case 'three_items_gallery':
            return 'Project__Three-items-gallery'
        case 'two_items_l_style':
            return 'Project__Two-items-l-style'
        default:
            return ""
    }
}

// Size classmatcher
const getSizeClass = (size) => {
    switch (size) {
        case 'small':
            return 'Project__Small-width'
        default:
            return ""
    }
}

// Render functions
const renderItem = ({ ext, url, alt, background }, index) => {
    switch (ext) {
        case '.png':
            return (
                <img className="Project-illustration Project-illustration-image" src={serverUri + url} alt={alt} key={index + "-picture-item"} />
            )
        case '.mp4':
            return (
                <video className="Project-illustration Project-illustration-video"style={{ backgroundImage: "url('" + background + "')"}} autoPlay muted loop key={index + "-picture-item"}>
                    <source src={serverUri + url} type="video/mp4" />{alt}
                </video>
            )
        default:
            return null
    }
}

const renderFirstItem = (item, { title, domain, short_description }, index) => {
    return (
        <div className={"Project-caption"} key={index + "-first-item"}>
            {renderItem(item)}
            <h4>{title}</h4>
            <span>{short_description}</span>
            <span>{domain}</span>
        </div>
    )
}

const Project = ({ data, handleClick }) => {
    const { path, title, disposition, domain,short_description, previews, size } = data
    const dispositionClass = " " + getDispositionClass(disposition)
    const sizeClass = " " + getSizeClass(size)

    return (
        <section className={"Project" + dispositionClass + sizeClass} onClick={() => { handleClick(path)}}>
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

export default Project;