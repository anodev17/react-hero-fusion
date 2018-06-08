import React, { Component } from 'react';
import './App.css';
import AllMight from './hero_fusion_cards/all_might_card.jpg';
import TitanEren from './hero_fusion_cards/eren_titan_card.png';
import Goku from './hero_fusion_cards/goku_card.png';
import Inuyasha from './hero_fusion_cards/inuyasha_card.jpeg';
import Midoriya from './hero_fusion_cards/midoriya_card.jpeg';
import Naruto from './hero_fusion_cards/naruto_card.jpg';
import Piccolo from './hero_fusion_cards/piccolo_card.png';
import Sasuke from './hero_fusion_cards/sasuke_card.jpg';
import Sesshomaru from './hero_fusion_cards/sesshomaru_card.jpeg';
import Vegeta from './hero_fusion_cards/vegeta_card.jpeg';
import Final_Valley from './battle_sites/final_valley.png';
import Mt_Hakurei from './battle_sites/Mt_Hakurei.png';
import N_Paradis from './battle_sites/N_Paradis.jpg';
import Planet_Namek from './battle_sites/planet_namek.jpeg';
import UA_High_School from './battle_sites/ua_high_school.jpeg';
import Hero from './Hero';
import Site from './Site';


const intialHeroState = [{name: "All Might", img: AllMight, ability: 5.0,wasPicked:false},
    {name: "Titan Eren", img: TitanEren, ability: 5.0,wasPicked:false},
    {name: "Goku", img: Goku, ability: 5.0,wasPicked:false},
    {name: "Inuyasha", img: Inuyasha, ability: 5.0,wasPicked:false},
    {name: "Midoriya", img: Midoriya, ability: 5.0,wasPicked:false},
    {name: "Naruto", img: Naruto, ability: 5.0,wasPicked:false},
    {name: "Piccolo", img: Piccolo, ability: 5.0,wasPicked:false},
    {name: "Sasuke", img: Sasuke, ability: 5.0,wasPicked:false},
    {name: "Sesshomaru", img: Sesshomaru, ability: 5.0,wasPicked:false},
    {name: "Vegeta", img: Vegeta, ability: 5.0 ,wasPicked:false}];


class App extends Component {


  constructor () {
    super();
    this.state = {
    intialState: intialHeroState,
    heroes: [{name: "All Might", img: AllMight, ability: 5.0,wasPicked:false},
    {name: "Titan Eren", img: TitanEren, ability: 5.0,wasPicked:false},
    {name: "Goku", img: Goku, ability: 5.0,wasPicked:false},
    {name: "Inuyasha", img: Inuyasha, ability: 5.0,wasPicked:false},
    {name: "Midoriya", img: Midoriya, ability: 5.0,wasPicked:false},
    {name: "Naruto", img: Naruto, ability: 5.0,wasPicked:false},
    {name: "Piccolo", img: Piccolo, ability: 5.0,wasPicked:false},
    {name: "Sasuke", img: Sasuke, ability: 5.0,wasPicked:false},
    {name: "Sesshomaru", img: Sesshomaru, ability: 5.0,wasPicked:false},
    {name: "Vegeta", img: Vegeta, ability: 5.0 ,wasPicked:false}],
    counter: 0,
    siteCounter: 0,
    playerOne: true,
    playerTwo: null,
    selectedHeroes: [],
    wasPicked: false,
    sites:[{img: Final_Valley, name: 'Final Valley'},{img: Mt_Hakurei, name: 'Mt. Hakurei'}, 
    {img: N_Paradis, name: 'N. Paradis'}, {img:Planet_Namek, name: 'Planet Namek'}, {img: UA_High_School, name: 'UA High School'}],
    fuseHeroPlayerOne: null,
    fuseHeroPlayerOneImg: null,
    fuseHeroPlayerTwo: null,
    playerTwoImg: intialHeroState[0].img,
    playerTwoCounter:0,
    fuseHeroPlayerTwoImg: null
    };
  }


changeHero = () => {
  if (this.state.counter < 9) {
  this.setState({counter: this.state.counter + 1});
   } else {
  this.setState({counter: 0});
   }
}

changeSetting = () => {
  if (this.state.siteCounter < 4) {
  this.setState({siteCounter: this.state.siteCounter + 1});
   } else {
  this.setState({siteCounter: 0});
   }
}

chooseHero = () => {
  if (this.state.selectedHeroes.length < 1) {
  let counter = this.state.counter;
 
 let heroesCopy = this.state.heroes.slice();

 heroesCopy[counter].wasPicked = !this.state.wasPicked;
 this.setState({
   heroes: heroesCopy 
 })
 this.state.selectedHeroes.push(heroesCopy[counter]); 
} else {
   let counter = this.state.counter;
 
 let heroesCopy = this.state.heroes.slice();
 heroesCopy[counter].wasPicked = !this.state.wasPicked;
 this.setState({
   heroes: heroesCopy
 })
 this.state.selectedHeroes.push(heroesCopy[counter]); 

 //fuse heroes
  this.fuse();

  if (this.state.playerOne === null && this.state.playerTwo !== null) {
    this.setState({ playerTwo: null}, () => {
  console.log(this.state.playerTwo);
});
  }

}
}

battle = () => {
 let currentSetting = this.state.sites[this.state.siteCounter];
 let name = currentSetting.name;
 const heroOne = this.state.fuseHeroPlayerOne;
 const heroTwo = this.state.fuseHeroPlayerTwo;
 //heroes affected by battlefield
 let affectedHeroes = [];
let fusionScoreOne = 10.0;
let fusionScoreTwo = 10.0;
let reason = '';
   switch (name) {
    //break down into syllables so they can be matched with fused hero names
    case 'Final Valley':
    reason = '-Close quarters, heroes who fly would not be very successful\n-Neither would being very a large fighter';
    
    affectedHeroes = ['Titan','Eren', 'Go', 'ku', 'Ve','ge','ta','Pi','cco','lo'];
    break;
    case 'Mt. Hakurei':
    reason = '-Demons cannot use their powers here';
    affectedHeroes = ['Na','ru','to','Inu','ya','sha','Se','ssho','ma','ru'];
    break;
    case 'N. Paradis':
    reason = '-Titans need sunlight to fight\n-Fire attacks would prove unaffective';
    affectedHeroes = ['Titan', 'Eren','Sa','su','ke','Go','ku','Ve','ge','ta','Pi','cco','lo'];
    break;
    case 'Planet Namek':
    reason = '-Not on Earth';
    affectedHeroes = ['All','Might', 'Mi','do','ri','ya','Sa','su','ke',
    'Na','ru','to', 'Se','ssho','ma','ru','Inu','ya','sha'];
    break;
    default:
    affectedHeroes = [];
  }


  for (var hero in affectedHeroes) {
    if (heroOne.match(affectedHeroes[hero])){
      fusionScoreOne--;
    }

    if (heroTwo.match(affectedHeroes[hero])){
       fusionScoreTwo--;
    }
  }

if(fusionScoreOne > fusionScoreTwo){
window.alert(heroOne + ' wins!\n' + reason);
this.reset();
} else if (fusionScoreOne < fusionScoreTwo){
window.alert(heroTwo + ' wins!\n' + reason);
this.reset();
} else if (fusionScoreOne == fusionScoreTwo) {
window.alert('It was a tie!');
this.reset();
}


  
}

reset = () => {

 this.setState({intialState: [{name: "All Might", img: AllMight, ability: 5.0,wasPicked:false},
    {name: "Titan Eren", img: TitanEren, ability: 5.0,wasPicked:false},
    {name: "Goku", img: Goku, ability: 5.0,wasPicked:false},
    {name: "Inuyasha", img: Inuyasha, ability: 5.0,wasPicked:false},
    {name: "Midoriya", img: Midoriya, ability: 5.0,wasPicked:false},
    {name: "Naruto", img: Naruto, ability: 5.0,wasPicked:false},
    {name: "Piccolo", img: Piccolo, ability: 5.0,wasPicked:false},
    {name: "Sasuke", img: Sasuke, ability: 5.0,wasPicked:false},
    {name: "Sesshomaru", img: Sesshomaru, ability: 5.0,wasPicked:false},
    {name: "Vegeta", img: Vegeta, ability: 5.0 ,wasPicked:false}],
    heroes: [{name: "All Might", img: AllMight, ability: 5.0,wasPicked:false},
    {name: "Titan Eren", img: TitanEren, ability: 5.0,wasPicked:false},
    {name: "Goku", img: Goku, ability: 5.0,wasPicked:false},
    {name: "Inuyasha", img: Inuyasha, ability: 5.0,wasPicked:false},
    {name: "Midoriya", img: Midoriya, ability: 5.0,wasPicked:false},
    {name: "Naruto", img: Naruto, ability: 5.0,wasPicked:false},
    {name: "Piccolo", img: Piccolo, ability: 5.0,wasPicked:false},
    {name: "Sasuke", img: Sasuke, ability: 5.0,wasPicked:false},
    {name: "Sesshomaru", img: Sesshomaru, ability: 5.0,wasPicked:false},
    {name: "Vegeta", img: Vegeta, ability: 5.0 ,wasPicked:false}],
    counter: 0,
    siteCounter: 0,
    playerOne: true,
    playerTwo: null,
    selectedHeroes: [],
    wasPicked: false,
    sites:[{img: Final_Valley, name: 'Final Valley'},{img: Mt_Hakurei, name: 'Mt. Hakurei'}, 
    {img: N_Paradis, name: 'N. Paradis'}, {img:Planet_Namek, name: 'Planet Namek'}, {img: UA_High_School, name: 'UA High School'}],
    fuseHeroPlayerOne: null,
    fuseHeroPlayerOneImg: null,
    fuseHeroPlayerTwo: null,
    playerTwoImg: intialHeroState[0].img,
    playerTwoCounter:0,
    fuseHeroPlayerTwoImg: null}, () => {
  console.log(this.state.intialState);
});

}

fuse = () => {
  const vowels = ['a','e','i','o','u'];
  let heroOne = this.state.selectedHeroes[0].name;
  let heroTwo = this.state.selectedHeroes[1].name;
  let charIndexOne = 0;
  let charIndexTwo = 0;
  let firstHalfFusedName = '';
  let secondHalfFusedName = '';

 
 if (/\s/.test(heroOne)){
  let spaceIndex = heroOne.indexOf(' ');
   for (var charOne in heroOne) {
      charIndexOne++;
      if (charIndexOne <= spaceIndex) {
        firstHalfFusedName += heroOne[charOne];
      }
   }
 } else {
  //This works!!!
    for (var chars in heroOne) {
     firstHalfFusedName += heroOne[chars];
     if (heroOne.charAt(chars) === vowels[0] || 
      heroOne.charAt(chars) === vowels[1] ||
      heroOne.charAt(chars) === vowels[2] || 
      heroOne.charAt(chars) === vowels[3] ||
      heroOne.charAt(chars) === vowels[4]) {
      break;
     }
    }
 }

 if (/\s/.test(heroTwo)){
   let spaceIndex = heroTwo.indexOf(' ');
   for (var charTwo in heroTwo) {
     charIndexTwo++;
      if (charIndexTwo > spaceIndex) {
        secondHalfFusedName += heroTwo[charTwo];
      }
   }
  } else {
    let syllable = '';
    let syllableArr = [];

//This works too!!!
   for (var charsTwo in heroTwo) {
    syllable += heroTwo[charsTwo];
     if (heroTwo.charAt(charsTwo) === vowels[0] || 
      heroTwo.charAt(charsTwo) === vowels[1] ||
      heroTwo.charAt(charsTwo) === vowels[2] || 
      heroTwo.charAt(charsTwo) === vowels[3] ||
      heroTwo.charAt(charsTwo) === vowels[4]) {
      syllableArr.push(syllable);
      syllable = '';
      continue;
     }
    }
    secondHalfFusedName = syllableArr[syllableArr.length - 1];
}
let fuseName = firstHalfFusedName + ' ' + secondHalfFusedName;

let imgOne = this.state.selectedHeroes[0].img;
let imgTwo = this.state.selectedHeroes[1].img;

let returnToState = this.state.intialState;
//chooses between fused heroes

 if (this.state.playerOne !== null) {
 this.setState({
   playerOne: null,
   playerTwo: true,
   counter: 0,
  fuseHeroPlayerOne: fuseName,
  fuseHeroPlayerOneImg: [imgOne,imgTwo],
  heroes: returnToState,
  selectedHeroes: [],
  playerTwoCounter: null
 })

} else {
  this.setState({
  fuseHeroPlayerTwo: fuseName,
  fuseHeroPlayerTwoImg: [imgOne,imgTwo]
 })
}
}


  render() {

  
    const currentHero = this.state.heroes[this.state.counter];
    let currentHeroTwo = this.state.heroes[this.state.playerTwoCounter];

    if (this.state.playerTwoCounter === null) {
    currentHeroTwo = this.state.heroes[this.state.counter];
  }

  let currentSetting = this.state.sites[this.state.siteCounter];

    return (
       <div>
      <header className= "App-header"> Hero Fusion </header> 
       <div className="App">
        <header style= {{align: 'center'}}>Player {this.state.playerOne ? 1: 2}</header>
        <Site name={currentSetting.name} img={currentSetting.img} 
        playerTwoFused={this.state.fuseHeroPlayerTwo} 
        scroll= {this.changeSetting} battle={this.battle}/>
         <Hero player={this.state.playerOne} name={this.state.fuseHeroPlayerOne ? this.state.fuseHeroPlayerOne : currentHero.name} img={this.state.fuseHeroPlayerOne ? this.state.fuseHeroPlayerOneImg : currentHero.img} wasPicked={currentHero.wasPicked}
         action={this.changeHero} 
         select={this.chooseHero}/>
         <Hero  player={this.state.playerTwo} name={this.state.fuseHeroPlayerTwo ? this.state.fuseHeroPlayerTwo : currentHeroTwo.name} img={this.state.fuseHeroPlayerTwo ? this.state.fuseHeroPlayerTwoImg : currentHeroTwo.img} wasPicked={currentHeroTwo.wasPicked}
         action={this.changeHero}
         select={this.chooseHero}/>
       </div>
       </div>
    );
  }
  
}

export default App;
