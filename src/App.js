import './App.css';

import { CustomRoutes } from './allRoutes/CustomRoutes';

// import components
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
      <div>
        <Header/>
        <CustomRoutes />
        <Sidebar />
        <Footer />
      </div>
    );
}

export default App;
