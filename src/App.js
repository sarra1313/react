// import React from 'react'
// import {Navbar as NewNavbar} from './components/Navbar'



// export default 
// function App() {
//   return (
//     <div>
//       <NewNavbar title = "this is Navbar" />
//       <NewNavbar title = "this is not first Navbar"/>

//     </div>
//   )
// }


// import Event from "./components/Event"
// function App() {
//   return{
//     <div style={{padding:"20px"}}>
//     <h1>App</h1>
//     <Event/>
//     </div>
//   }
// }
// export default App


// этот урок от 10.03.23г == про фрукты, открываем нижнюю готовую часть
// 1ый шаг-- через -- rfce

import React from 'react'
import Container from './components/Container'

function App() {
  return (
    <div>
      {/* 9ый - сюда вставляем общий компонент,в к-ром находятся все шаги
      //  маленькие компоненты - части, переходим в Card==> */}
      <Container/>
    </div>
  )
}

export default App

 
