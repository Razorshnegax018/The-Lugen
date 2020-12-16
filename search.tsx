import React from 'react'
import Link from 'next/link'
import styles from './app.module.css'

interface SearchState{
  value: string,
}


export default class SearchBar extends React.Component<{}, SearchState>{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      names : [
        "greatsword",
        "longsword",
        "swordnshield"
      ]
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  render(){
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
      return(
        <div className={styles.Search} >
        <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} style={BarStyling} placeholder="Search the Lügen..."/>
        </form>
  {this.state.names.filter(name => name.includes(this.state.value)).map(filteredName => (
    <li>
      {filteredName}
      <br/>
    </li>
  ))}
        </div>
      )
  }
}