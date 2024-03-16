import './gridLetter.css'
import { Card } from './Card'
import {Button} from './Button'
import doc from "./assets/tour.json"


export const Turismo = ()=>{
	const idParagraphs=doc.map(e=>{
		e.id=crypto.randomUUID()
		return e
	})
	return (
		<>
			<header className='hs-header'><h1>Lugares Turisticos</h1><h2> de Tokio</h2></header>
			<section className='cards'>
				{idParagraphs.map(({image,footText,place,id})=>{
					return <Card key={id} image={image} footText={footText}><Button href={place}>Conocelo</Button></Card>
				})}
			</section>
		</>
	)
}
