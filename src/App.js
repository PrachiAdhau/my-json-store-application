
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Header from './Header';
import AddItem from './product/AddItem';
import ViewItem from './product/ViewItem';


function App() {
  return (


    <div className="App">
      
    <BrowserRouter>
     <Header/>
     <div className='background'>
     <Routes>
     <Route path="/" element={<ViewItem></ViewItem>}></Route>
      <Route path="add" element={<AddItem></AddItem>}></Route>
      <Route path="view" element={<ViewItem></ViewItem>}></Route>
      <Route path='edit/:id' element={<AddItem></AddItem>}></Route>
     </Routes>
     </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
