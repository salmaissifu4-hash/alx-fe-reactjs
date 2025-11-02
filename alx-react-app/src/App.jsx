import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;
