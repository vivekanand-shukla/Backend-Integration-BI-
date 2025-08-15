
import useFetch from '../useFetch'
const Hetel = () => {
    const {data, loading, error}= useFetch(`http://localhost:3000/hotels`)
    console.log(data)
  return (
    <div>
       <h1>All Hotels</h1>
       <ul>
        {data? data.map(hotel => <li>{hotel.name}</li>):loading && <p>Loading ...</p>}
       </ul>
    </div>
  )
}

export default Hetel


