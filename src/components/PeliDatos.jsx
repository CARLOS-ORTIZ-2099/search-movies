/* eslint-disable react/prop-types */
import { Gallery } from './Gallery'
const images = import.meta.env.VITE_IMAGES

export const PeliDatos = ({infoPeli, back}) => {

  return (
    <div>
                    <h1>{infoPeli.title}</h1>
                    <p>{infoPeli.overview}</p>
                    <h2>Date : {infoPeli.release_date}</h2>
                    <h2>Language Original: {infoPeli.original_language}</h2>
                    <h3>Average : {infoPeli.vote_average}%</h3>
                    <button onClick={back}>retur home</button>
                   
                    <h3>Genre: </h3>
                       {
                            infoPeli.genres?.map(genre => (
                            <span key={genre.id}> {genre.name}</span>
                            ))
                       }

                        <h3>Run Time : { infoPeli.runtime} minutes</h3>
                        
                        <h2 style={{color:'tomato'}}> Companies Production : </h2>

                       {
                            infoPeli.production_companies?.map(companie => (
                            <div key={companie.id}>
                                <h3>{companie.name}</h3>
                                {
                                    companie.logo_path ? <img style={{width:'15%'}} src={`${images}/original${companie.logo_path}`}/>: 'No hay imagen disponible'
                                }                             
                            </div>
                        ))
                       }
                         <h2 style={{color:'tomato'}}>Production Countries: </h2>
                       {
                             infoPeli.production_countries?.map((countrie, index) => (
                              <h3 key={index}>{countrie.name}</h3>
                        ))
                       }
                      <Gallery infoPeli={infoPeli}/>
    </div>
  )
}
/* NOTA SOBRE EL ENCADENAMIENTO OPCIONAL
  Exactamente, el operador de encadenamiento opcional `?.` en React (y en JavaScript en general) es útil cuando estás trabajando con datos asincrónicos, como los datos que provienen de una API. Cuando utilizas `?.`, le estás diciendo a React que espere hasta que el valor de la propiedad `production_companies` en `infoPeli` esté definido y luego realice el mapeo. Esto evita errores en tiempo de ejecución cuando intentas acceder a propiedades de objetos que aún no se han cargado o inicializado, lo que es común cuando trabajas con datos asincrónicos.

Por ejemplo, si `infoPeli` inicialmente es `null` o `undefined` y luego se actualiza con los datos de la API después de una solicitud asincrónica, el operador de encadenamiento opcional `?.` evita que se produzcan errores al tratar de acceder a `production_companies` antes de que los datos estén disponibles. En lugar de generar un error, React esperará pacientemente hasta que `infoPeli.production_companies` tenga un valor antes de ejecutar el mapeo. Esto es especialmente útil en aplicaciones React que trabajan con datos en tiempo real o datos cargados de manera asincrónica.
*/
