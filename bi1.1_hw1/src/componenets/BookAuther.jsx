
import useFetch from "../useFetch"

const BookAuther = ({author}) => {
    const { data, loading, error} =  useFetch(`https://backend-assignment1-done.vercel.app/books/author/${author}`)
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


