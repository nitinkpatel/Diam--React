import React from "react"
import { useState } from "react";

export default function List({ people }) {

  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;

        return (
          <article key={id} className="person">
            <img src={image} alt="name" />
            <div>
              <h6>{id}</h6>
              <h4>{name}</h4>
              <p>Contact Number {age}</p>
            </div>
            <button onClick={() => alert("Good Going")}>Done</button>
          </article>

        )
      }
      )
      }
    </>
  )
}