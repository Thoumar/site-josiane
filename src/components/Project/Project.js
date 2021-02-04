import './Project.sass';

// Disposition classmatcher
const getDispositionClass = (disposition) => {
    switch (disposition) {
        case 'two-items':
            return 'Project__Two-items'
        default:
            return ""
    }
}

// Render functions
const renderItem = ({ type, src, alt, style }) => {
    switch (type) {
        case 'picture':
            return (
                <img className="Project-illustration Project-illustration-image" src={src} alt={alt} style={style} />
            )
        case 'video':
            return (
                <video className="Project-illustration Project-illustration-video" autoPlay muted loop style={style}>
                    <source src={src} type="video/mp4" />{alt}
                </video>
            )
        default:
            return null
    }
}

const renderFirstItem = (item, { title, domain, description }) => {
    return (
        <div className="Project-caption">
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