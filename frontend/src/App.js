import {Container} from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './screens/dashboard'

function App() {
  return (
    <div>
      <Header/>
        <main>
            <Container>
                <Dashboard/>
            </Container>
        </main>  
      <Footer/>
    </div>
  );
}

export default App;
