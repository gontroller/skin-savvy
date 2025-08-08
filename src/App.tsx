import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        {/* Outras seções virão aqui */}
      </main>
    </div>
  );
}

export default App;
