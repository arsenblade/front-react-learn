import AuthDesktop from './components/screen/Auth/AuthDesktop/AuthDesktop';
import MainProvider from './main-provider/MainProvider';

function App() {

  return (
    <div className="app">
      <MainProvider>
        <AuthDesktop/>
      </MainProvider>
    </div>
  );
}

export default App;
