import style from './Quotes.module.css';
import QuoteCard from '../../components/QuoteCard/QuoteCard';
import { useState, useEffect } from 'react';

const Quotes = () => {
    const [data, setDeta] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(res => res.json())
            .then(data => setDeta(data.quotes));
    }, [])
    return (
        <div className={style.quotes}>
            <h1 className={style.heading}>Quotes</h1>
            <div className={style['quote-container']}>
                {
                    data.map((quote) => {
                        return <QuoteCard key={quote.id} {...quote} />
                    })
                }

            </div>
        </div>
    );
}

export default Quotes;