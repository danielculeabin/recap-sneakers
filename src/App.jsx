import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 14200,
  },
];

function App() {
  return (
    <>
      <div className="wrapper clear">
        <Drawer />л
        <Header />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex">
            {arr.map((obj) => (
              <Card />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
