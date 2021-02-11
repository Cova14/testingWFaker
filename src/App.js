import logo from './logo.svg';
import './App.css';
import WelcomeBanner from './components/WelcomeBanner';
import CompaniesList from './components/CompaniesList';

function App() {

  const user = {
    firstName: 'Arturo',
    lastName: 'Covarrubias',
    companies: [
      {
        name: 'Devsavant',
        createdAt: '',
        updatedAt: '',
      },
      {
        name: 'Intelepeer',
        createdAt: '',
        updatedAt: '',
      },
    ],
    createdAt: '',
    updatedAt: ''
  };

  return (
    <div className="App">
      <WelcomeBanner user={user} />
      <CompaniesList companies={user.companies} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
