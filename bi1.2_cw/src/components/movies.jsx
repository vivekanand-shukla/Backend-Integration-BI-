import useFetch from "../useFetch";

const Movies =()=>{
   const {data ,loading ,error}= useFetch("http://localhost:3000/movies")
//    console.log(data)

const handleDelete = async(id)=>{
  try {
    const response = await fetch(`http://localhost:3000/movies/${id}` ,
      {method :"DELETE"}
    )
    if(!response.ok){
      throw "fail to delete movie "
    }
    const data = await response.json()
   if(data){
     window.location.reload()
    alert("movie deleted successfully")
   }

  } catch (error) {
     console.log(error)
  }

}
 
  return (<div>
    <ul>
    {data?.map(movie => 
        <li key={movie._id}>{movie.title} <button onClick={() => handleDelete(movie._id)}>Delete</button></li>
     )}

    </ul>
  </div>)

}
export default Movies;




