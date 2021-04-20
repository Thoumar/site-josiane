import './Title.sass'

const Title = ({ scrollRef, content, alt }) => {
    return (
        <h2 className="Title" scroll-ref={scrollRef}><img src={content} alt={alt} /></h2>
    )
}

export default Title