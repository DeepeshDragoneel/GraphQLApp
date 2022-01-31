import './App.css';
import BooksList from "./components/BooksList/BooksList";
import AddBook from './components/AddBook/AddBook';

function App() {

  return (
    <div className="App">
      <h1>Deepesh Book list!</h1>
      <BooksList/>
      <AddBook/>
    </div>
  );
}

export default App;
