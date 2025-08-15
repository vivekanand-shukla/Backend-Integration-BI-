import useFetch from "../useFetch"

const BookTitle = () => {
    const { data, loading, error} =  useFetch('http://localhost:3000/books')
    console.log(data)

    async function handleDelete(id){
      try {
        
        let response =   await fetch(`http://localhost:3000/books/${id}`,{
        method:"DELETE"
      })
      if(!response.ok){
        throw "fial to delete book"
      }

          const data = await response.json()
            if(data){
              alert("book deleted successfully")
              window.location.reload()
   }
      } catch (error) {
         console.log( "error is : ",error)
      }
      
    }
  return data ? (
    <div>
       <h1>title of all books</h1>
        { data.map(book => <p key={book._id} >{book.title} <button onClick={()=>handleDelete(book._id)}>delete</button> </p>)}
    </div>
  ):loading && <p>Loading</p>
}

export default BookTitle
