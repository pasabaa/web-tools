import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from './layout/container';
import { Footer } from './layout/footer';
import { Navbar } from './layout/navbar';
import { ContactPage } from './pages/contact';
import { HomePage } from './pages/home';
import { GradientTool, ImagePage, TextPage, CategoriesPage, LoremTool, CaseTool, CountTool, FontTool, EditorTool } from './pages/tools';

function App() {

  return (
    <BrowserRouter>
    <Container>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/image' element={<ImagePage />} />
        <Route path='/text' element={<TextPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/text/lorem' element={<LoremTool />} />
        <Route path='/text/case' element={<CaseTool />} />
        <Route path='/text/count' element={<CountTool />} />
        <Route path='/text/gradient' element={<GradientTool />} />
        <Route path='/text/font' element={<FontTool />} />
        <Route path='/image/editor' element={<EditorTool />} />
      </Routes>
    <Footer />
    </Container>

    </BrowserRouter>
  )
}

export default App
