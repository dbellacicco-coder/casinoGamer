import logo from './logo.svg';
import './App.css';
// import NavBar from './components/navbar/navbar';
import TitleComponent from './components/navbar/title';


function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <TitleComponent name = "Daniel Bellacicco" />;
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
