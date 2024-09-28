import style from './QuoteCard.module.css';


const QuoteCard = (props) => {
    return (
        <div key={props.id} className={style['quote-card']}>
            <p className={style.text}><strong className={style.bold}>Quote:</strong> {props.quote}</p>
            <p className={style.author}><strong className={style.bold}>Author:</strong> {props.author}</p>
        </div>
    )
}

export default QuoteCard;