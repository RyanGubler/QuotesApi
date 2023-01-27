import {useState, useEffect} from 'react'

export function Quote() {
	const [quote, setQuote] = useState<Record<string, string>|null>(null)

		useEffect (() => { 
			fetch('https://usu-quotes-mimic.vercel.app/api/random')
				.then(response => response.json())
				.then(data => setQuote(data))
		},[]);

  return (
    <div className="quote">
        <div className="container">
			<div className="row">
				<div className="col-xs-6"></div>
				<div className="col-xs-6">
					<p className="quote"> {quote?.content + '\n'}
						<p>{ '- ' + quote?.author}</p>
					</p>
				</div>
			</div>
		</div>
    </div>
  )
}