
import React from 'react'
import '../css/App.css';
// import ProfileCard from '../pages/card';
import Login from '../pages/login';
import Form from '../pages/form.jsx';
import GetReq from '../pages/getrout.jsx';
import Ser from '../pages/search'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {

return(

  <div>
<BrowserRouter>

<Routes>


<Route index element={<Form/>}/>


<Route path='getdata' element={<GetReq/>} />
 <Route path='login' element={<Login/>} />
<Route path='*' element= <h1>no page</h1> />
<Route path='ser' element={<Ser/>} />

</Routes>



</BrowserRouter>





  </div>
)




}
export default App;
