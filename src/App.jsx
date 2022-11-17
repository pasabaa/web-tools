import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from './layout/container';
import { Footer } from './layout/footer';
import { Navbar } from './layout/navbar';
import { HomePage } from './pages/home';
import { ColorPage, ImagePage, TextPage, OtherPage } from './pages/tools';

function App() {

  return (
    <BrowserRouter>
    <Container>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/color' element={<ColorPage />} />
        <Route path='/image' element={<ImagePage />} />
        <Route path='/text' element={<TextPage />} />
        <Route path='/other' element={<OtherPage />} />
      </Routes>
    <Footer />
    </Container>

    </BrowserRouter>
  )
}

export default App
