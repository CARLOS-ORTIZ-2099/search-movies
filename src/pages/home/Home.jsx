import { Buscador } from "../../components/buscador/Buscador"
import { GrillaPeliculas } from "../grilla-peliculas/GrillaPeliculas"


export const Home = () => {
  return (
    <div className="home">
       
        <Buscador/>
        {/* peliculas de la bd  */}
        <GrillaPeliculas/>

    </div>
  )
}
