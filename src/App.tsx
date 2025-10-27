import { useCallback, useEffect, useMemo, useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { BenefitsPage } from './pages/BenefitsPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { RouteProvider } from './lib/route-context';

const routeMap: Record<string, JSX.Element> = {
  '/': <HomePage />,
  '/specialties': <SpecialtiesPage />,
  '/benefits': <BenefitsPage />,
  '/about': <AboutPage />,
  '/faqs': <FAQPage />,
  '/contact': <ContactPage />,
};

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (!routeMap[path]) {
      window.history.replaceState({}, '', '/');
      setPath('/');
    }
  }, [path]);

  const navigate = useCallback(
    (to: string) => {
      if (to === path) return;
      window.history.pushState({}, '', to);
      setPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [path]
  );

  const routeValue = useMemo(
    () => ({ path, navigate }),
    [path, navigate]
  );

  const currentPage = routeMap[path] ?? routeMap['/'];

  return (
    <RouteProvider value={routeValue}>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {currentPage}
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </RouteProvider>
  );
}
