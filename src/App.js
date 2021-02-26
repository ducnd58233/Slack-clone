import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { auth, provider } from './firebase'

function App() {

  // useState create new db
  // 2 elements: values itself and function to change the element
  // rooms -> section in db, setRooms -> change data
  const [ rooms, setRooms ] = useState([])
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')))


  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }
  
  // It will be called when something get upgraded
  useEffect(() => {
    getChannels();
  }, [])
  

  return (
    <div className="App">
      <Router>
        {
          !user ? 
          <Login setUser = {setUser}/>
          :
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms = {rooms}/> 
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user = {user}/>
                </Route>
                <Route path="/">
                  Select or Create Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        }
        
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`
// minmax(0, 1fr): min -> 0, max -> 1 free space

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
