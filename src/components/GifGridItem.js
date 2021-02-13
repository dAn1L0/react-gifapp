import React from 'react'

export const GifGridItem = ( { title, url } ) => {


  return (
    <div className="card">
      <img src={ url } alt={ title } className="animate__animated animate__backInUp"/>
      <p className="animate__animated animate__backInDown" >{ title }</p>
    </div>
  )
}
