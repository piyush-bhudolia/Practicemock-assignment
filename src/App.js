
import './App.css';
import ComparisonTable from './ComparisonTable';
import Header from './Header';
import jsonData from './data.json';

function App() {
  return (
    <div className="App">
      <Header title={jsonData.pagetitle} subtitle={jsonData.pagesubtitle} />
      <ComparisonTable data={jsonData} />
    </div>
  );
}

export default App;
