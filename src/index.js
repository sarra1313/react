import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// компонент простыми словами?
// componens, род. п. componentis «составляющий») — составная часть, элемент чего-либо.

// для чего используются компоненты?
// Компоненты - это подразделы проекта. Они используются для группировки задач 
// внутри проекта на более мелкие части.

// Компоненты React – это самодостаточные элементы, которые можно использовать
// на странице любое количество раз. Во многом компоненты ведут себя как 
// обычные JavaSript функции.Они принимают входные данные, так называемые 
// props, и возвращают React-элементы, описывающие то, что мы хотим увидеть
// на экране.
