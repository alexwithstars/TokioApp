import "./Button.css"

export function Button({children,href}){
	const handleClick = ()=>{
		location.assign(href)
	}
	return (
		<button className="button" onClick={handleClick}>{children}</button>
	)
}