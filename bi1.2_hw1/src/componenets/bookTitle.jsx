import useFetch from "../useFetch"

const BookTitle = () => {
    const { data, loading, error} =  useFetch('http://localhost:3000/books')
    console.log(data)
  return data ? (
    <div>
       <h1>title of all books</h1>
        { data.map(book => <p >{book.title}</p>)}
    </div>
  ):loading && <p>Loading</p>
}

export default BookTitle
