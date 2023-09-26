/* eslint-disable react/prop-types */


export const PeliDatos = ({infoPeli, back}) => {
  return (
    <div>

                    <h1>{infoPeli.title}</h1>
                    <p>{infoPeli.overview}</p>
                    <h3>Date :{infoPeli.release_date}</h3>
                    <h3>Language Original: {infoPeli.original_language}</h3>
                    <h3>Average : {infoPeli.vote_average}%</h3>
                    <button onClick={back}>retur home</button>

                    <h1>Genre: </h1>
                       {
                            infoPeli.genres?.map(genre => (
                            <span key={genre.id}> {genre.name}</span>
                            ))
                       }

                        <h2>Run Time : { infoPeli.runtime} minutes</h2>
                        <h2> Companies Production</h2>

                       {
                            infoPeli.production_companies?.map(companie => (
                            <div key={companie.id}>
                                <h2>{companie.name}</h2>
                                {
                                    companie.logo_path ? <img style={{width:'15%'}} src={`https://image.tmdb.org/t/p/original${companie.logo_path}`}/>: 'sin data'
                                }                             
                            </div>
                        ))
                       }

                         <h2>Production Countries: </h2>

                       {
                             infoPeli.production_countries?.map((countrie, index) => (
                              <h2 key={index}>{countrie.name}</h2>
                        ))
                       }

                      

                       {
                            infoPeli?.images?.backdrops?.map((ele, index) => (index < 10 ? <img key={index} src={`https://image.tmdb.org/t/p/original${ele.file_path}`} alt="" />: ''
                            ))
                       }

    </div>
  )
}
