import ReactDOM from 'react-dom/client'
import './letter.css'
import { Paragraph } from './Paragraph'
import doc from "./assets/history.json"

const idParagraphs=doc.map(e=>{
	e.id=crypto.randomUUID()
	return e
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<header className='hs-header'><h1>Historia</h1><h2> de Tokio</h2></header>
		{idParagraphs.map(({subtitle,text,image,footText,id})=>{
			return <Paragraph key={id} id={id} subtitle={subtitle} text={text} image={image} footText={footText}/>
		})}

	</>
)
