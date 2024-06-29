
import './App.css';
import CreateContainer from './components/CreateContainer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import MainContainer from './components/MainContainer';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
        <div className='w-screen h-screen flex flex-col bg-primary'>
            <Header />
            <main className='mt-14 md:mt-20 md:px-16 px-8 py-4 w-full'>
              <Routes>
                <Route path='/*' element={<MainContainer />} />
                <Route path='/createItem' element={<CreateContainer />} />
              </Routes>
            </main>
        </div>
        </AnimatePresence>
    );
}

export default App;
//