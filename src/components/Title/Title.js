import './Title.sass'

const Title = ({ scrollRef, content, alt, withMarginTop }) => {
    return (
        <h2
            className="Title"
            style={{ marginTop: withMarginTop ? "16rem" : "0" }}
            scroll-ref={scrollRef}>
                <img src={content} alt={alt} />
        </h2>
    )
}

export default Title