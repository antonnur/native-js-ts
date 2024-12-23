import React from 'react';
import './App.css';
import {User} from './06-callbacks/06-callbacks';

function App() {

  //05 - JS/TS for students - map
  const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
  const liElements = names.map(n => <li>{n}</li>)
  //05 - JS/TS for students - map
  const users = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Ignat'}
  ]
  //05 - JS/TS for students - map
  // const liElements = users.map((u, index) => <li>{index} - {u.name}</li>)
  const liElementsUsers = users.map((u) => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      <ul>
        {/*05 - JS/TS for students - map*/}
        {liElements}
      </ul>
      <ul>
        {/*05 - JS/TS for students - map*/}
        {liElementsUsers}
      </ul>
      {/*06 - JS/TS for students - callback*/}
      <User/>
    </div>
  );
}

export default App;
