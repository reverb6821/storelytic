import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from './views/Auth';
import LoginForm from './components/form/LoginForm';
import Register from './components/form/Register';

function App() {

  // const { user: currentUser } = useSelector((state) => state.auth);

  // useEffect(() => {

  // }, [currentUser]);

  return (
    <div className="App">
      <Routes>
        <Route element={<Auth/>}>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/signup' element={<Register/>}/>
        </Route>
      </Routes>
      {/* {currentUser ? (
        <Routes>

        </Routes>
      ) : (
        <Routes>

        </Routes>
      )} */}
    </div>
  )
}

export default App
