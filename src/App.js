import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Middle Pictures Section */}
      < TinderCards />
      {/* Swipe buttons */}
      <SwipeButtons />

    </div>
  );
}

export default App;
