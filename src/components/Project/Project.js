import './Project.sass';
import { NavLink } from 'react-router-dom';

// Disposition classmatcher
const getDispositionClass = (disposition) => {
    switch (disposition) {
        case 'two-items':
            return 'Project__Two-items'
        case 'four-items':
            return 'Project__Four-items'
        case 'two-items-crossed-bottom':
            return 'Project__Two-items-crossed-bottom'
        case 'two-items-crossed-top':
            return 'Project__Two-items-crossed-top'
        case 'three-items-gallery':
            return 'Project__Three-items-gallery'
        case 'two-items-l-style':
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
const renderItem = ({ type, src, alt }, index) => {
    switch (type) {
        case 'picture':
            return (
                <img className="Project-illustration Project-illustration-image" src={src} alt={alt} key={index + "-picture-item"} />
            )
        case 'video':
            return (
                <video className="Project-illustration Project-illustration-video" autoPlay muted loop key={index + "-picture-item"}>
                    <source src={src} type="video/mp4" />{alt}
                </video>
            )
        default:
            return null
    }
}

const renderFirstItem = (item, { title, domain, description }, index) => {
    return (
        <div className={"Project-caption"} key={index + "-first-item"}>
            {renderItem(item)}
            <h4>{title}</h4>
            <span>{description}</span>
            <span>{domain}</span>
        </div>
    )
}

const Project = ({ data, handleClick }) => {
    const { path, disposition, title, domain, description, items, size } = data
    const dispositionClass = " " + getDispositionClass(disposition)
    const sizeClass = " " + getSizeClass(size)

    return (
        <section className={"Project" + dispositionClass + sizeClass} onClick={() => { handleClick(path)}}>
                {
                    items.map((item, i) => {
                        if(i === 0) {
                            return renderFirstItem(item, { title, domain, description })
                        } else {
                            return renderItem(item, i)
                        }
                    })
                }
        </section>
    )
};

export default Project;