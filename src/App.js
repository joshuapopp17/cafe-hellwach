import './App.css';
import { Container } from 'react-bootstrap';
import NavContainer from './components/NavContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './components/Footer';
import Menu from './screens/Menu';
import Store from './screens/Store';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className='App' style={{minHeight: '100vh',}}>
      <Router> 
        <NavContainer></NavContainer>
        <Container style={{minHeight: '100vh'}}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:id" element={<Store />} />
          </Routes>
        </Container>
      </Router>
      <div style={{paddingBottom: 50}}></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
