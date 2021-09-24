import React from 'react'
import './Definitions.css'

const Definitions = ({word, category,meanings, lightMode}) => {
    return (
        <div className='meanings'>
            {
                // if the meanings array word and category strictly equals english 'en' display the audio element
                meanings[0] && word && category === 'en' && (
                    <audio 
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    style={{backgroundColor:'#fff', borderRadius:'10'}}
                    controls
                    >
                        Your Browser doesn't support audio element.
                    </audio>
                )
            }
            {/* if word strictly equals and empty string create a span that says Start by typing a word in Search else map throuhg the meanings array */}
           {word === "" ? (
           <span className='subTitle'> Start by typing a word in Search</span>
           ) : (
            //  creating a map that iterates through the meanings array and changes the data being pull to mean. It renders a list of means to the DOM. Mean is the callback and now represents each meaning every time it is executed.
            meanings.map((mean)=> (
            // another map is create to iterate through all of the items inside of the new array of means and are is rendering a list call item to the DOM. Item is the callback and now represents each meaning every time it is executed.
                mean.meanings.map((item)=>(
            // we are not mapping through the items of the mean to get the definitions of each item in the mean array.
                   item.definitions.map((def) => (
                    //    I'm returning a div with some embedded styling and calling the for the items that are being mapped through to display inside the curly braces.
                       <div 
                       className='singleMean' 
                    //    in styling I'm checking to see if lightMode exist and if it does I want the screen to be a certain color if not it will be white.
                       style={{backgroundColor: lightMode? '#3b5360' : 'white', 
                       color:lightMode? 'white' :'black'}}>
                           
                           <b>{def.definition}</b>
                           <hr style={{backgroundColor:'black', width:'100%'}}/>
                           {
                               def.example && (
                                   <span>
                                       <b>Example : </b>
                                       {def.example}
                                   </span>
                               )}
                               {def.synonyms && (
                                  <span>
                                  <b>Synonyms : </b>
                                  {def.synonyms.map((s)=> `${s},`)}
                              </span> 
                               )}
                       </div>
                   ))
                ))
            ))
           )}
        </div>
    )
}

export default Definitions
