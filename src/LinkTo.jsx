import { Link } from "react-router-dom"
import arrowRight from "./assets/arrow-right.svg"
import "./LinkTo.css"

export function LinkTo({href,title,image}){
	return (
		<Link to={href} className="anchor">
			<article className="link">
				<img className="link-image" src={image} alt={title}/>
				<h2 className="link-title">{title}</h2>
				<img className="link-arrow" src={arrowRight} alt="flecha" />
			</article>
		</Link>
	)
}