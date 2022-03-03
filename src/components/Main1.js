import './Main1.css'
import React, {useState} from 'react'
import bckimage from '../img/background.png';

function main1({image}) {
  return (
    <main>
        <img src={bckimage} alt ="background"/>
        <div>
          <p>
            <span>
              Lorem ipsum 
            </span>
            &nbsp;para bonum
          </p>
          <p class = "secondp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button>Download</button>
        </div>
    </main>
  )
}

export default main1