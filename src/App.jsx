import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from './layout/container';
import { Footer } from './layout/footer';
import { Navbar } from './layout/navbar';
import { ContactPage } from './pages/contact';
import { HomePage } from './pages/home';
import { ColorPage, ImagePage, TextPage, CategoriesPage, LoremTool } from './pages/tools';

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
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/text/lorem' element={<LoremTool />} />
      </Routes>
    <Footer />
    </Container>

    </BrowserRouter>
  )
}

export default App
