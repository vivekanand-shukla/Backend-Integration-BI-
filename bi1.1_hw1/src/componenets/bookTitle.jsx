import useFetch from "../useFetch"

const BookTitle = () => {
    const { data, loading, error} =  useFetch('https://backend-assignment1-done.vercel.app/books')
    console.log(data)
  return data ? (
    <div>
       <h1>title of all books</h1>
        { data.map(book => <p >{book.title}</p>)}
    </div>
  ):loading && <p>Loading</p>
}

export default BookTitle
