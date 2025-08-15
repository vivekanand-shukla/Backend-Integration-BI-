
import useFetch from '../useFetch'
const HtoelByTitle = ({name}) => {
    const {data, loading, error}= useFetch(`http://localhost:3000/hotels/${name}`)
  return (
    
    <div>
     {data && <div>
       <h1>{data.name}</h1>
       <p><strong>Location : </strong>{data.location}</p>
       <p><strong>Rating : </strong>{data.rating}</p>
       <p><strong>Price Range :  </strong>{data.priceRange}</p>
          </div>  
       }
       {loading && <p>Loading ...</p>}
       {error && <p>error ...{error}</p>}
    
    </div>
  )
}

export default HtoelByTitle



