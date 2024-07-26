
import './App.css';
import Greetings from './Greetings';
import Heading from './Heading';
import List from './List';

function App() {
  return (
    <>
    <Greetings name='Abhishek'/>
    <Greetings name=''/>
    <Greetings name='Ashish'>
      <p>Ashish lives in Mumbai</p>
    </Greetings>
    <Greetings name='Vijay'>
      <p>Vijay lives in Fulaira</p>
    </Greetings>
    <Greetings name='Rinky'>
      <p>Rinky lives in Bihar</p>
    </Greetings>

    <br /><br /><br /><br /><hr></hr>
    <div>Welcome to WSA Academy</div>
    <Heading/>
    <List/>
    </>
  )
}

export default App;

