import {Routes,Route} from "react-router-dom"
import { Home } from "./Home.jsx"
import { Turismo } from "./Turismo.jsx"
import { Cultura } from "./Cultura.jsx"
import { Historia } from "./Historia.jsx"
import { Gastronomia } from "./Gastronomia.jsx"
import "./index.css"

function App(){
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
