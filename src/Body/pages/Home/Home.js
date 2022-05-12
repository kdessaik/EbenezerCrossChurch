import React from 'react'
import DescriptionPhoto from "../../../images/BACK2.JPG"
import "./Home.css"

export function Description() {
  return (
    <section className='container'>
        <img src={DescriptionPhoto} alt="Loading"/>
        <div className='section1'>
        <h1 className='Description'>Ebenezer Cross Church</h1> <br/>
        <div className='section11'>
       <h4>~HOLINESS </h4><h4>~LOVE </h4><h4>~EQUILIBRIUM </h4>
        </div>
        </div>
    </section>
  )}
export function About(){
    return(
        <section className='container'>
            <h1>About</h1>
            <p>Ebenezer Cross Church was founded in 1992 as Zaïrian Church. 
                Refugees who came from DRCongo, 
            </p>
            <button>For More</button>

        </section>
    )
}

