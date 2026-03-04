import './App.css';
import Header from './components/Header.jsx';
import TextCompare from './pages/TextCompare.jsx';

function App() {
  return (
    <div className="layout">
     <Header/>
    <main className="main">
     <TextCompare/>
     </main>
    </div>
  );
}

export default App;
