import styles from "../page.module.css";
import {useState, useEffect} from 'react';

const MiddleInfo: React.FC<any> = ({infoClicked}) => {
    
     if (infoClicked === "about") {
        return (
          <div className = {styles.text}>
          <h1 className = {styles.header}>about</h1>
          <p>i'm lola, a high schooler expected to graduate in 2026 from NY who's becoming a fullstack developer. 
            i love coding with react with next.js, and host all of my websites on my raspberry pi in my room with tailscale's
            free proxy service. i am part of codingpower.org as a teacher, a new york state lead, and the co-lead of a emerging web 
            development curriculum. i love cats, skiing, coding, tennis, miami, and nerds gummy clusters.
            </p>
          </div>
     
        )
      } else if (infoClicked === "projects") {
        return (
        <div className = {styles.projCont}>
          <h1 className = {styles.projHead}>graphing the sec</h1>
          <p>a website that graphs the entirety of the sec's data through the sec's edgar api. 
            extremely difficult in terms of sorting through the sec's messy json, from null labels to inconsistent data,
            but ultimately very rewarding! completed with react, next.js, node.js, and express.js. available at graphthesec.xyz</p>
        </div>
        )
      } else if (infoClicked === "education"){
        return (
          <div className = {styles.text}>
            <h1 className = {styles.header}>education</h1>
            <p>i am currently a rising high schooler at grace church high school in NYC. while most of
              my web development skills are self-taught, i took computer science I with my school, experimental economics at uchicago's summer program,
              cybersecurity at gw's summer program,  a course in 
              NLP machine learning with inspirit ai and a introductory swift course with kode with klossy.
            </p>
          </div>
        )
      } else if (infoClicked === "links") {
        return (
          <div className = {styles.text}>
            <h1 className = {styles.header}>links</h1>
            <div className = {styles.linkCont}>
            <a className = {styles.links} href = "https://github.com/lolasanchezz">github</a>
            <a className = {styles.links} href = "https://github.com/lolasanchezz">transcript</a>
            
            
          </div>
          </div>
        )
      }
      return (
            <p></p>
        
        );
     }


export default MiddleInfo;