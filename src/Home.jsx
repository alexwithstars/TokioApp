import {LinkTo} from "./LinkTo.jsx"
import tokioLogo from "./assets/tokio.png"
import samurai from "./assets/samurai.jpg"
import cultura from "./assets/cultura.jpg"
import turismo from "./assets/turismo.jpg"
import gastronomia from "./assets/gastronomia.jpg"
import map from "./assets/map.png"
import whatsapp from "./assets/whatsapp.png"
import './Home.css'

const links=[
	{
		title:"Historia",
		image:samurai,
		href:"./historia"
	},
	{
		title:"Cultura",
		image:cultura,
		href:"./cultura"
	},
	{
		title:"Lugares Turisticos",
		image:turismo,
		href:"./turismo"
	},
	{
		title:"Gastronomia",
		image:gastronomia,
		href:"./gastronomia"
	},
	{
		title:"Como Llegar",
		image:map,
		href:"https://maps.app.goo.gl/wj9vN7KPshckKneD6",
	},
	{
		title:"Contactanos",
		image:whatsapp,
		href:"https://wa.me/524522039910/?text=Informacion%20sobre%20tokio%20plis",
	},
]

export const Home = ()=>{
	const linkElements=links.map(({title,image,href})=>{
		return <LinkTo title={title} key={title} image={image} href={href}/>
	})
	return(
		<div className="back">
			<article className="home">
				<header className='home-header'>
					<img className='home-logo' src={tokioLogo} alt="Tokio" />
					<h1 className='home-title'>Vive<br/>Tokio</h1>
				</header>
				<section className='home-links'>
					{linkElements}
				</section>
			</article>
		</div>
	)
}