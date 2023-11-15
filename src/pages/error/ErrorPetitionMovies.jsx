/* eslint-disable react/prop-types */


export const ErrorPetitionMovies = ({error}) => {
  return (
    <div>
        <h1>{error.status}</h1>
        <h1>{error.message}</h1>
    </div>
  )
}
