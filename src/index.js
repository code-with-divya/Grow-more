import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import Card from './card';
import ChildComponent from './home';
import Watch from './fancy.webp';
import Braclet from './braclet.webp';
import Bappa from './bappa.jpeg';
import Bag from './bag.jpg';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';


// const routes = createBrowserRouter(
// [
//   {
//     path :'/',
//     element:<simple/>,
//   },
//   {
//     path :'/',
//     element :<nav/>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

{/* {{<ChildComponent  number="1" name = "divya"  />  } } */}< Card user="Watch" name="Fancy kids watch and attractive" prize="$120" src={Watch}/>
< Card user="Braclet" name="Fancy silver braclet for womens " prize="$120" src={Braclet}/>
< Card user="Bappa" name="Bappa pendant " prize="$320" src={Bappa}/>
< Card user="Bag" name="Fancy bag for girls " prize="$520" src={Bag}/> 


</React.StrictMode>
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

