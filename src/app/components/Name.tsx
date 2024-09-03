
import styles from "../page.module.css";

export const Name: React.FC<any>  = ({setInfo}) => {




return (
    <div className = {styles.leftTxt}>
    <div className = {styles.name}>
    <p>{"{ "}name:</p>
    <h1>`&quot;`lola sanchez`&quot;`</h1>
    <p>{"}"};</p>
    </div>
    <div className = {styles.buttons}>
    <div className = {styles.rowButtons}>
        <p onClick = {() => {setInfo("about")}}>{"{about}"}</p>
        <p onClick = {() =>{setInfo("projects")}}>{"{projects}"}</p>
    </div>
    <div className = {styles.rowButtons}>
        <p onClick = {() => {setInfo("education")}}>{"{education}"}</p>
        <p onClick = {() => {setInfo("links")}}>{"{links}"}</p>
    </div>
    </div>
    </div>


    
)
}