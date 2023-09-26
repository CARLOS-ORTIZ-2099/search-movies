/* eslint-disable react/prop-types */


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
                                    companie.logo_path ? <img style={{width:'15%'}} src={`https://image.tmdb.org/t/p/original${companie.logo_path}`}/>: 'No hay imagen disponible'
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

                      

                       {
                            infoPeli?.images?.backdrops?.map((ele, index) => (index < 10 ? <img key={index} src={`https://image.tmdb.org/t/p/original${ele.file_path}`} alt="" />: ''
                            ))
                       }

    </div>
  )
}
