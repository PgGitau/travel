// import logo from './logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import dataArray from '../../Data';

function App() {
  const newData = dataArray.map(contents => {
    return (
      <Card 
        key={contents.id}
        contents={contents}
      />
      ) 
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <h1 className='card-header'>Here are some of my favorite places:</h1>
      <section>{newData}</section>
     
    </div>
  );
}

export default App;
