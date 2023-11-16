import { Buscador } from "../../components/buscador/Buscador"
import { GrillaPeliculasPage } from "../grilla-peliculas-page/GrillaPeliculasPage"


export const PageGrid = () => {
  return (
    <div>   
          <Buscador/>
          <GrillaPeliculasPage/>
    </div>
  )
}
