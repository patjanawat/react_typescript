import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { Status } from './components/status';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

import { UserContextProvider } from './components/context/UserContext';
import {User } from './components/context/User';
import { MutableRef } from './components/ref/MutableRef';

import { CCounter } from './components/class/CCounter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

function App() {
  const personName = {
    first: 'John',
    last:'Doe'
  }
  const nameList = [
    { first: 'Bruce', last: 'Wayne' },
    { first: 'Clark', last: 'Kent' },
    { first: 'Princess', last: 'Diana' }
  ]
  return (
    <div className="App">
      <Status status='success' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name='Kingkong' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Button handleClick={(event,id)=>{
             console.log('Button clicked!',event,id)
        }
      } />
      <Input value='' handleChange={(event) => { console.log(event) }} />
      <Container styles={{ border: '1px solid red', padding: '10px', background: '#eee' }} />      
      <Counter />
      <Box />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableRef />
      <CCounter />
      <Private isLoggedIn={false} component={Profile} />
      {/* <List
        items={['Batman', 'Superman', 'Spiderman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {id:1, first: 'Bruce', last: 'Wayne' },
          {id:2, first: 'Clark', last: 'Kent' },
          {id:3, first: 'Princess', last: 'Diana' }          
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      <RandomNumber value={10} isPositive />
      <Toast position='center'  />
    </div>
  );
}

export default App;
