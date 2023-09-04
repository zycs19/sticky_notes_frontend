import{Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Public></Public>}></Route>
        <Route path= "login" element = {<Login></Login>}></Route>

        <Route path='dash' element={<DashLayout></DashLayout>}>
          
          <Route index element={<Welcome/>}></Route>

          <Route path="notes">
            <Route index element={<NotesList/>}></Route>
          </Route>

          <Route path="users">
            <Route index element={<UsersList/>}></Route>
          </Route>

        </Route>{/* End Dash*/}
      </Route>
    </Routes>
  );
}

export default App;
