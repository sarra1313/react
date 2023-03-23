// это урок про фрукты от 10.03.23г.
// 3 ий шаг -- открываем ещё один компонент называем  Card.jsx, это 
// компонент создающий один кард, также открываем--делаем экспорт через rfce
// 7ой в div ставим img(банан),снизу пишем h1 текст(пока title),
// потом h4(пока lorem)
// 8ой - чтобы увидеть на экране, нам надо перейти на App.js и поработать там,

import React from 'react'
// 21ый-- соединяем (импортируем style в Card)
import './style.css'

function Card(props)
// 25ый--прописываем внутри Card props,удаляем  src--ссылку картинки(я ставлю в комментарий)
{
  return (
    // 19ый-- придаём стиль карду--чтоб прилаит стиль в style, надо задать
    // класснейм div-у здесь, мы задаём -- wrapper,переходим в style.css
  <div className='wrapper'>
     {/*10ый-- находим картинку, копируем URL и вставляем в src , смотрим 
     результат и переходим в файл index.css, где прописываем общие стили
      */}
      <img style={{width:"300px",height:"300px"}} alt="banan" 
      // src= "https://cdn.shopify.com/s/files/1/0018/8327/5325/products/6_370x.jpg?v=1669704783%20370w" 
      // 26ой--пишем другой src с фигурными скобками, потому что  только так мы увидем всё
      // на экране
      src={props.src}
      />
      {/* 28ой--вместо тайтела пишем в фигурных скобках-- props  и у нас изменятся названия
      шаблона фрукта*/}
      {/* <h1>title</h1> */}
      <h1>{props.title}</h1>
      {/* также меняем и h4 */}
      {/* <h4>lorem, imsum.</h4> */}
      <h4>{props.info}</h4>
  </div>
  )
}

export default Card

