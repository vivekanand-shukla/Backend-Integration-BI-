import Movies from "./components/movies"
import MovieByTitle from "./components/movieByTitle"
import AddMovieForm from "./components/AddMovieForm"

function App() {
  

  return (
    <>
       <AddMovieForm/>
       <Movies/>
       <MovieByTitle  title="PK"/>
    </>
  )
}

export default App
