import React from 'react'
import Link from 'next/link'
import styles from './app.module.css'

export default class Navigation extends React.Component{
  render(){
    return(
    <div className={styles.App}>
     <div className={styles.Appheader} >
     <h1>Modules:</h1>
     <h3>Weapons</h3>
     <ul>
     <li><Link href="/weapons/greatsword"><a>Great Sword</a></Link></li>
     </ul>
     <h3>Tools</h3>
     <ul>   
     <li>    
      <Link href="/search">
      <a class={styles.Button} >Searchpage</a>
      </Link>
      </li>
      <br/>
      <li>
      <Link href="/tools/calculator">
      <a class={styles.Button} >Calculator</a>
      </Link>
      </li>
     </ul>
     </div>
    </div>
    )
  }
}