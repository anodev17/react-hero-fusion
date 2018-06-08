import React, { Component } from 'react';
import './App.css';
import Check from './accept-circle-512.png';

function ShowScroll (props) {
  let actualPlayer = props.player;
 

  if (actualPlayer != null) {

  	return (<div>
  		<button onClick= {props.action}>Scroll</button>
  		    <button onClick= {props.select}>Select</button>
  		    <ShowSelection picked={props.picked}/>
  		    </div>);
  }

  return null;
}

function ShowSelection (props) {
let picked = props.picked;

if (picked !== false) {
return(<img style={{width: '50px', height: '50px', bottom: '0', right: '0'}} 
       src={Check} alt="selected"/>);
     }
    return null;
}

function FuseHeroImg (props) {
	let imgs = props.imgs;
	let name = props.name;

	if (Array.isArray(imgs)) {
     return (<div>
     	<img style={{ width: '100%', height: '50%', fit: 'contain'}} src={imgs[0]} alt={name} 
 	 />
 	 <img style={{ width: '100%', height: '50%', fit: 'contain'}} src={imgs[1]} alt={name} 
 	 />
 	 </div>)
	}

	return (<img style={{ width: '100%', height: '100%', fit: 'contain'}} src={imgs} alt={name} 
 	 />);
}
const Hero = (props) => {
 let name = props.name;
 let img = props.img;
 let player = props.player;
 let wasPicked = props.wasPicked;

 return (<div className="row" style={{width: '350px', height: '400px'}}>
 	<FuseHeroImg imgs={img} name= {name}/>
 	<header style= {{padding: '0px'}} className='App-header'>{name}</header>
 	 <ShowScroll player={player} action={props.action} select={props.select} picked={wasPicked}/>
 </div>)

}

export default Hero;