import React from 'react'

function Card({username, btnText="visit me"
}) {
 console.log(username)
    return (
        <div className="outline rounded-xl card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <p>If a dog chews shoes whose shoes does he choose? {btnText}</p>
        </div>
        <figure>
          <img
            className= 'rounded-xl'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
      </div>
    )
}

export default Card
