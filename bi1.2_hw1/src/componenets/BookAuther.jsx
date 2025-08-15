
import useFetch from "../useFetch"

const BookAuther = ({author}) => {
    const { data, loading, error} =  useFetch(`http://localhost:3000/books/author/${author}`)
    console.log(data)
  return data ? (
    <div>
       <h1> Book By : {data.author}</h1>
       <ul>
      
           <li>{data.title}</li>
        
       </ul>
    </div>
  ):error && <p>error</p>
}

export default BookAuther


