import './Title.sass'

const Title = ({ scrollRef, text }) => {
    return (
        <h2 className="Title" scroll-ref={scrollRef}>{text}</h2>
    )
}

export default Title