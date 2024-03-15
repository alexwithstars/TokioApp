import ReactDOM from 'react-dom/client'
import './gridLetter.css'
import { Card } from './Card'
import doc from "./assets/gastro.json"

const idParagraphs=doc.map(e=>{
	e.id=crypto.randomUUID()
	return e
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<header className='hs-header'><h1>Gastronomia</h1><h2> de Tokio</h2></header>
		<section className='cards'>
			{idParagraphs.map(({image,footText,description,id})=>{
				console.log(description)
				return (
					<Card key={id} image={image} footText={footText}>
						{description}
					</Card>
				)
			})}
		</section>
	</>
)