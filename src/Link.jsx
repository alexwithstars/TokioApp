import arrowRight from "./assets/arrow-right.svg"
import "./Link.css"

export function Link({href,title,image}){
	const handleClick = ()=>{
		location.assign(href)
	}
	return (
		<article onClick={handleClick} className="link">
			<img className="link-image" src={image} alt={title}/>
			<h2 className="link-title">{title}</h2>
			<img className="link-arrow" src={arrowRight} alt="flecha" />
		</article>
	)
}