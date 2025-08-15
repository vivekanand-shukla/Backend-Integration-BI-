
import useFetch from '../useFetch'
const Hetel = () => {
    const {data, loading, error}= useFetch(`http://localhost:3000/hotels`)
    console.log(data)
   const handleDelete = async(id)=>{
  try {
    const response = await fetch(`http://localhost:3000/hotels/${id}` ,
      {method :"DELETE"}
    )
    if(!response.ok){
      throw "fail to delete hotel "
    }
    const data = await response.json()
   if(data){
     alert("hotel deleted successfully")
     window.location.reload()
   }

  } catch (error) {
     console.log(error)
  }

}


  return (
    <div>
       <h1>All Hotels</h1>
       <ul>
        {data? data.map(hotel => <li key={hotel._id}>{hotel.name} <button onClick={()=>handleDelete(hotel._id)}>Delete</button> </li>):loading && <p>Loading ...</p>}
       </ul>
    </div>
  )
}

export default Hetel


