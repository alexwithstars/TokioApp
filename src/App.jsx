import {Routes,Route} from "react-router-dom"
import { Home } from "./Home"
import { Turismo } from "./Turismo"
import { Cultura } from "./Cultura"
import { Historia } from "./Historia"
import { Gastronomia } from "./Gastronomia"
import "./index.css"

function App(){
	console.log(location.pathname)
	return(
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/turismo' element={<Turismo/>}/>
			<Route path='/cultura' element={<Cultura/>}/>
			<Route path='/historia' element={<Historia/>}/>
			<Route path='/gastronomia' element={<Gastronomia/>}/>
			<Route path='*' element={<h1>No hay	</h1>}/>
		</Routes>
	)
}

export default App
