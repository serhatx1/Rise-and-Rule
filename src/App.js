import './App.css';
import { CountProvider } from './Context/context'; 
import { PageHandler } from './PageHandler';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <CountProvider>
      <div className="App">
        <PageHandler /> 
      </div>
    </CountProvider>
  );
}

export default App;
