import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Admin/Signup';
import Signin from './Admin/Signin';
import Dashboard from './Admin/Dashboard';
import EditPlayer from './Admin/EditPlayer';
import ViewPlayer from './Pages/ViewPlayer';
import AddPlayer from './Admin/AddPlayer';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Signin' element={<Signin/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/Dashboard/edit/:productId' element={<EditPlayer/>}/>
        <Route exact path='/Dashboard/add' element={<AddPlayer/>}/>
        <Route exact path='/View/:productId' element={<ViewPlayer/>}/>
      </Routes>
  );
}

export default App;
