import './App.css';
import { MainPage } from './page/MainPage'
import { WorkspaceContextProvider } from './context/WorkspaceContext'

function App() {
  return (
    <WorkspaceContextProvider>
        <div className="App">
            <MainPage/>
        </div>
    </WorkspaceContextProvider>
  );
}

export default App;
