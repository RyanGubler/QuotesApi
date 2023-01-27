import {useState} from 'react'
import {Quote} from './quote'

interface Quote {
    content: string;
    _id: string;
    author: string;
}

export function QuoteList() {
    const [quoteList, setQuoteList] = useState<Quote[]>([])
    const [search, setSearch] = useState("");
    async function searchQuotes(){
    const response = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${search}`)
        const data = await response.json();
        setQuoteList(data.results)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        searchQuotes();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="component-container">
                    <div className="quote-title">
                        <h1 className="quote-title">Quote Search</h1>
                    </div>                
                    <form onSubmit={handleSubmit}>
                        <div className="col-xs-12 search-bar">
                            <input 
                                className="search" 
                                type="text" 
                                value={search}
                                placeholder="ex: Albert Einstein" 
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="col-xs-12" >
                        <Quote />
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="quote">
                        {quoteList.map((quote => 
                            <div key={quote._id}>
                                <p className="quote quote-back">{quote.content}
                                <p className="quote">{'- ' + quote.author}</p>
                                </p>
                            </div>
                            ))}
                    </div>
                    
                </div>
            </div>
        </div>
        
                
    )
}