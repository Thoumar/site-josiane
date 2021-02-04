import './Paragraph.sass';

const Paragraph = ({ text }) => {
    return (
        <section className="Paragraph">
            <p className="Paragraph__Text">{text}</p>
        </section>
    )
};

export default Paragraph;