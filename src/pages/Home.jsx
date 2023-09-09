import { Buscador } from "../components/Buscador"
import { GrillaPeliculas } from "./GrillaPeliculas"


export const Home = () => {
  return (
    <div className="home">
       
        <Buscador/>
        {/* peliculas de la bd  */}
        <GrillaPeliculas/>

    </div>
  )
}
