import './Project.sass';

// Disposition classmatcher
const getDispositionClass = (disposition) => {
    switch (disposition) {
        case 'two-items':
            return 'Project__Two-items'
        case 'four-items':
            return 'Project__Four-items'
        case 'two-items-crossed':
            return 'Project__Two-items-crossed'
        case 'three-items-gallery':
            return 'Project__Three-items-gallery'
        default:
            return ""
    }
}

// Render functions
const renderItem = ({ type, src, alt }) => {
    switch (type) {
        case 'picture':
            return (
                <img className="Project-illustration Project-illustration-image" src={src} alt={alt} />
            )
        case 'video':
            return (
                <video className="Project-illustration Project-illustration-video" autoPlay muted loop>
                    <source src={src} type="video/mp4" />{alt}
                </video>
            )
        default:
            return null
    }
}

const renderFirstItem = (item, { title, domain, description }) => {
    return (
        <div className={"Project-caption"}>
            {renderItem(item)}
            <h4>{title}</h4>
            <span>{domain}</span>
            <span>{description}</span>
        </div>
    )
}

const Project = ({ disposition, title, domain, description, items }) => {

    const dispositionClass = " " + getDispositionClass(disposition)

    return (
        <section className={"Project" + dispositionClass}>
            {
                items.map((item, i) => {
                    if(i === 0) {
                        return renderFirstItem(item, { title, domain, description })
                    } else {
                        return renderItem(item)
                    }
                })
            }
        </section>
    )
};

export default Project;