import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Salma Issifu" age="23" bio="Frontend Developer passionate about React." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
