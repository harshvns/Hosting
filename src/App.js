import './App.css';
import Faq from './components/FAQ/Faq';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';

function App() {
  return (
    <div className="App">
      <Page1/>
      {/* <Page2/> */}
      <Page3/>
      <Faq/>
    </div>
  );
}

export default App;
