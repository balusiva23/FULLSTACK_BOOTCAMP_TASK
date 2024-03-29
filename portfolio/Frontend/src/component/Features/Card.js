import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div style={{"display":"flex","justifyContent":"center"}}>
        <img src={props.image} alt='' style={{"width":"40px"}}/>
        </div>
        
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href='/'>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </>
  )
}

export default Card
