
import useFetch from "../useFetch"

const BookDetail = ({title}) => {
    const { data, loading, error} =  useFetch(`http://localhost:3000/books/${title}`)
    console.log(data)
  return data ? (
    <div>
       <h1>{data.title}</h1>
       <p><strong>Auther : </strong>{data.author}</p>
       <p><strong>ReleaseYear :</strong> {data.publishedYear} </p>
       <p><strong>Genre :</strong> {data.genre.join(", ")}</p>
    </div>
  ):loading && <p>Loading</p>
}

export default BookDetail


