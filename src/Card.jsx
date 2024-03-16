import "./Card.css"

export function Card({children,image,footText}){
	return (
		<div className="card">
			<img className="card-img" src={image} alt={image}/>
			<span className="card-footText">{footText??image}</span>
			<footer className="card-children">{children}</footer>
		</div>
	)
}