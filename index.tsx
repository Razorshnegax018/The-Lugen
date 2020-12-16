import React from 'react'
import Link from 'next/link'
import styles from './app.module.css'

class Home extends React.Component{
  render(){
    return(
      <div className={styles.App}>
       <div className={styles.Appheader} >
      <h1>Welcome to the The Lügen</h1>
      <Link href="/navigation">
      <a class={styles.Button} >Navigation</a>
      </Link>
      <h3>What is The Lügen?</h3>
      <p>
      The Lügen is an easy-to-use and beginner-friendly resource for all hunters everywhere to know the priciples of defense and monster hunting. The Lügen will have various components that will construct a deep understanding of combat, defense, and monster hunting as a whole. 
      </p>
      <h3>A few of the things that The Lügen will have</h3>
      <p>
      The Lügen will have the following:
      <ul>
        <li>Monster hit values: how effective your attacks will be on said monster parts (Will be imported from <Link href ="placeholder" ><a> Ping's MHXX Dex)</a></Link></li>
        <li>Detailed documents on monster movements, including safe areas, and prime attack areas</li>
        <li>Stratigies for each weapon and style</li>
      </ul>
      And much more! 
      <br/>
      This is The Lügen ver 0.0.1, with Reviews for the Guild styles of the first four weapons, and docs for Rathian and Zinogre 
      </p>
      </div>
    </div>
    )
  }
}


export default Home