//  это урок про фрукты от 10.03.23г.
// 2ой шаг -- это мы открыли один общий большой контейнер (открыли файл 
// Container.jsx)
// 4ый шаг - вызываем другой компонент importом, те Card вызываем сюда
// 5ый шаг - создаём style.css, для придания стиля
// 6ой - внизу в div-еоькрываем className, проверяем результат в терменале
//  набираем - npm start, проект работает, переходим в Card

import React from 'react'
import Card from './Card'
// 15ый-- соединяем style c container
import'./style.css'
function Container() {
  return (
    <div className='container'>
      {/* 13ый-- даём название классу--Контейнер--container, дальше переходим
      в style.css, для придания стиля */}
         {/* 23ий-- вводим данные в карды, для этого вписываем в карды src,title,info
         24ый--переходим сначало в Card и копируем сорс банана  и дальше в каждый кард
         вставляем картинку, потом пишем навание фрукта*/}
         <Card  title='banan'  info='fruit' src='https://cdn.shopify.com/s/files/1/0018/8327/5325/products/6_370x.jpg?v=1669704783%20370w'/>
         <Card  title='apple'  info='fruit' src='https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834'/>
         <Card  title='orange' info='fruit' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbySpjw_YpYg_JEce4JHjkOTOPApdjG197Q&usqp=CAU'/>
         <Card  title='marakya'info='fruit' src='https://cdn.shopify.com/s/files/1/0512/2542/8161/products/passionfruit-exoticfruitscouk-270048.jpg?v=1645488927'/>
         <Card  title='grape'  info='fruit' src='https://www.jiomart.com/images/product/360x360/590000042/sonaka-seedless-grapes-1-kg-product-images-o590000042-p590116962-0-202203142035.jpg'/>
         <Card  title='pear'   info='fruit' src='https://dailyshoppingbd.com/images/detailed/32/0316597_nagfall-1kg.jpeg'/>
         <Card  title='kivi'   info='fruit' src='https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=556,505'/>
         <Card  title='limon'  info='fruit' src='https://qph.cf2.quoracdn.net/main-qimg-3e8e3cb9e1c1af48fafd141f8b6172fc-lq'/>
         <Card  title='avakado'info='fruit' src='https://www.escoffieronline.com/wp-content/uploads/avocado-are-among-the-fruits-that-need-to-be-cored-_1107_40085675_1_14065460_500.jpg'/>
         <Card  title='
pomegranate' info='fruit' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsbVQQieKNelK-1wOBsqs5fCYBnOZEXbA8zWH8WjycNbbRgv4Yvm94oEskVF9__DzYzc&usqp=CAU'/>
        {/* 27ой--прописав все фрукты переходим в Card */}


    </div>
  )
}

export default Container

// есть 2 способа для создания компонента -- 1) класс компонент, который
// использовался в ранних версиях reacta; 2) фанкшен  компонент - больше
//функций, поэтому используют в основном его
