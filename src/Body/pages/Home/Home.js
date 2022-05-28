import React from 'react'
import DescriptionPhoto from "../../../images/BACK2.JPG"
import Holiness from "../../../images/Holiness.png"
import Love from "../../../images/love2.jpg"
import Equilibrium from "../../../images/Equilibre.JPG"
import "./Home.css"
import bgConstruction from '../../../images/Constrution.jpg'


export function Description() {
  return (
    <section className='container'>
        
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
        <section className='container' id='About'>
            <h1>ABOUT</h1><br/>
            <p>Ebenezer Cross Church was founded in 1992 as Zaïrian Church. 
                Refugees who came from DRCongo, created the church for praising God.
                The church has tree extensions in Kakuma camp and Kalobei settlement.
            </p>
            <button type="button" className="btn btn-warning">For More</button>

        </section>
    )
}
export function OurValue(){
   

    return(
        <section className='container' id='Value'>
            <h1>OUR VALUES</h1>
            <div className='container-lg'>
                <p className='Holiness'><img src={Holiness} className="container-fluid"  />HOLINESS</p> 
                <p className='Love'><img src={Love} className="container-fluid" />LOVE</p>
                <p className='Equilibrium'><img src={Equilibrium} className="container-fluid"  />EQUILIBRIUM</p>

            </div>

             
        </section>


    )
}
export function Construction(){
    return (
        <section className='container' >
            
            <img src={bgConstruction} alt='loading...' className='imgConstrution'/>
            <div className='container-Ction' >
            <h1>Ebenezer Cross Church Construction</h1> <br/>
            
             <p>
                 This project consists in building  the main church of Ebenezer Cross Church, in Kakuma Camp,
                 a temple for the glory of our God.<br/>
                 We want to build this temple with you, to give a great awakening to all mankind.
                 We want to build this temple according to the vision that God has given us and by associating you with its construction,
                 so that this blessing is distributed to all of God's children.</p>
                 <button>Discover</button>
            
            </div>


        </section>
    )
}

