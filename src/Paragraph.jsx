import React from "react"
import "./Paragraph.css"
import { Card } from "./Card.jsx"


export function Paragraph({subtitle,text,image,footText,id}){
	const formatedText=(text??"").split('\n')
	const header = subtitle?
		(
			<>
				<hr/>
				<h3 className="paragraph-header">{subtitle}</h3>
			</>
		)
		:<></>
	const img = image ? <Card image={image} footText={footText}/> : <></>
	return (
		<article className="paragraph">
			{header}
			<p>
				{formatedText.map((e,idx)=>{
					return (<React.Fragment key={id+idx}>{e}<br/></React.Fragment>)
				})}
			</p>
			{img}
		</article>
	)
}