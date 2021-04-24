import './Title.sass'

const Title = ({ scrollRef, text, withMarginTop }) => {
    return (
        <h2
            className="Title"
            style={{ marginTop: withMarginTop ? "12rem" : "0" }}
            scroll-ref={scrollRef}>
                {text}
        </h2>
    )
}

export default Title