
import './App.css';
import ColorList from './Components/ColorList';

function App() {
  return (
    <div className="App w-11/12 mx-auto">
      <h1 className='text-2xl font-bold mt-5 mb-3'>Welcome to Color Book</h1>
      <p className='mb-3 text-green-600'>Click any color to copy the color code!</p>
      <ColorList/>

    </div>
  );
}

export default App;
