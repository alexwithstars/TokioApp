import {Routes,Route} from "react-router-dom"
import { Home } from "./Home"
import { Turismo } from "./Turismo"
import { Cultura } from "./Cultura"
import { Historia } from "./Historia"
import { Gastronomia } from "./Gastronomia"
import "./index.css"

function App(){
	return(
		<Routes>
			<Route path='/TokioApp/' element={<Home/>}/>
			<Route path='/TokioApp/turismo' element={<Turismo/>}/>
			<Route path='/TokioApp/cultura' element={<Cultura/>}/>
			<Route path='/TokioApp/historia' element={<Historia/>}/>
			<Route path='/TokioApp/gastronomia' element={<Gastronomia/>}/>
			<Route path='*' element={<h1>No hay	</h1>}/>
		</Routes>
	)
}

export default App
