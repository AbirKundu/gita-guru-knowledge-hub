
import { ThemeProvider } from '@/providers/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '@/providers/LanguageProvider';

// Pages
import IndexPage from '@/pages/Index';
import ChaptersPage from '@/pages/Chapters';
import PhilosophyWithFlowers from '@/pages/PhilosophyWithFlowers';
import VersesPage from '@/pages/Verses';
import AboutPage from '@/pages/About';
import NotFound from '@/pages/NotFound';

// CSS
import './App.css';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="gita-guru-theme">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/philosophy" element={<PhilosophyWithFlowers />} />
            <Route path="/verses" element={<VersesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
