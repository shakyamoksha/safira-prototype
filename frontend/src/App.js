import {Container} from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './screens/dashboard';
import ProductScreen from './screens/ProductScreen';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
            <Container>
                <Route path='/' component={Dashboard} exact/>
                <Route path='/product/:id' component={ProductScreen}/>
                <Route path='/cart/:id?' component={CartScreen}/>
            </Container>
        </main>  
      <Footer/>
    </Router>
  );
}

export default App;
