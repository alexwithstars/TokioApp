import './letter.css'
import { Paragraph } from './Paragraph'
import doc from "./assets/culture.json"

export const Cultura = ()=>{
	const idParagraphs=doc.map(e=>{
		e.id=crypto.randomUUID()
		return e
	})
	return (
		<>
			<header className='hs-header'><h1>Cultura</h1><h2> de Tokio</h2></header>
			{idParagraphs.map(({subtitle,text,image,footText,id})=>{
				return <Paragraph key={id} id={id} subtitle={subtitle} text={text} image={image} footText={footText}/>
			})}
		</>
	)
}
