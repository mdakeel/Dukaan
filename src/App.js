
import './App.css';
import CreateContainer from './components/admin/CreateContainer';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom'
import MainContainer from './components/home/MainContainer';
import { AnimatePresence } from 'framer-motion'
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store} >
    <AnimatePresence>
     
        <div className='w-screen h-screen flex flex-col bg-primary'>
            <Header />
            <main className='mt-14 md:mt-20 md:px-16 bg-primary px-8 py-4 w-full'>
              <Routes>
                <Route path='/*' element={<MainContainer />} />
                <Route path='/createItem' element={<CreateContainer />} />
              </Routes>
            </main>
        </div>
        </AnimatePresence>
    </Provider>
    );
}

export default App;
//