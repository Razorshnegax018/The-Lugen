import React from 'react'
import styles from '../app.module.css'


interface State {
  atk: string,
  hp: string,
  motion: string,
  sharp: string,
  efct: string
}

export default class MHGUcalc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sharp: '',
      motion: '',
      atk: '',
      efct: '',
      hp: ''
    }

    this.Calc = this.Calc.bind(this)
  }
  Calc(){
    let shrpint
        switch (this.state.sharp){
      case "red": 
      shrpint = 0.50
      break
      case "orange":
      shrpint = 0.80
      break
      case "yellow":
      shrpint = 1.00
      break
      case "green":
      shrpint = 1.05
      break
      case "blue":
      shrpint = 1.20
      break
      case "white":
      shrpint = 1.32
      break
      case "purple":
      shrpint = 1.39
      break
    }
    let mot = parseInt(this.state.motion)
    let atk = parseInt(this.state.atk)
    let efct = parseInt(this.state.efct)
    let hp = parseInt(this.state.hp)
    mot = mot/100
    atk = atk * mot
    atk = atk * shrpint
    efct = efct/100
    atk = atk * efct
    let atk2 = atk.toString()
    atk2 = atk.toFixed(0)
    alert("Calculation has been completed. You will do ~"+atk2+"/hit damage to the monster (This is a rounded number, as at the end of all damage calculations in monster hunter, all decimals are dropped). If the following values are displayed as NaN (Not a Number), then you pressed the enter button instead of entering a value")
  }
  render(){
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return(
      <div className={styles.App} >
        <form onSubmit={this.Calc}>
        <input value={this.state.sharp} onChange={(e) => this.setState({sharp: e.target.value})} placeholder="Enter your sharpness here" style={BarStyling}/>
        <input value={this.state.motion} onChange={(e) => this.setState({motion: e.target.value})} placeholder="Enter your motion value here" style={BarStyling}/>
        <input value={this.state.atk} onChange={(e) => this.setState({atk: e.target.value})} placeholder="Enter your Attack value here" style={BarStyling}/>
        <input value={this.state.hp} onChange={(e) => this.setState({hp: e.target.value})} placeholder="Enter the Monster's health here" style={BarStyling}/>
        <input value={this.state.efct} onChange={(e) => this.setState({efct: e.target.value})} placeholder="Enter The effectiveness value here" style={BarStyling}/>
        <br/>
        <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
