import React, { Component } from 'react';
import './App.css';
import Check from './accept-circle-512.png';




const Site = (props) => {
 let fusedHeroTwo = props.playerTwoFused;
 let name = props.name;
 let img = props.img;

if (fusedHeroTwo !== null){
 return (<div>
    <img style={{ width: '100px', height: '100px', fit: 'contain'}} src={img} name={name}/>
          <header>{name}</header>
          <button onClick={props.scroll}>Scroll</button>
          <button className="button" onClick={props.battle}>Battle</button>
    </div>);
}

return null;

}

export default Site;