import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          <div className='rate'>
            <button className='btn_shadow '>{props.rate}</button>
          </div>
        </div>
        {/* <hr /> */}
        {/* <p>{props.desc}</p> */}
        {/* <ul>
        {props.desc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
       {Array.isArray(props.desc) ? (
      <ul className="bullet-list">
        {props.desc.map((item, index) => (
          <li key={index}>
             <span className="bullet-icon">&#8226;</span>  {item}</li>
        ))}
      </ul>
        ) : (
          <p>{props.desc}</p>
        )}
      </div>
    </>
  )
}

export default Card
