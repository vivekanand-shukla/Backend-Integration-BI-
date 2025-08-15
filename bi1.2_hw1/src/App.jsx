  import BookTitle from './componenets/bookTitle'
  import BookDetail from './componenets/BookDetail'
  import  BookAuther from './componenets/BookAuther'
  import AddBookForm from './componenets/AddBookForm'
function App() {

  return (
    <>
    <AddBookForm/>
    <BookTitle/>
    <BookDetail title="Lean In"/>
    <BookAuther author="Sheryl Sandberg"/>
    </>
  )
}

export default App
