import ReactDOM from 'react-dom/client'
import './gridLetter.css'
import { Card } from './Card'
import {Button} from './Button'
import doc from "./assets/tour.json"

const idParagraphs=doc.map(e=>{
	e.id=crypto.randomUUID()
	return e
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<header className='hs-header'><h1>Lugares Turisticos</h1><h2> de Tokio</h2></header>
		<section className='cards'>
			{idParagraphs.map(({image,footText,place,id})=>{
				return <Card key={id} image={image} footText={footText}><Button href={place}>Conocelo</Button></Card>
			})}
		</section>
	</>
)