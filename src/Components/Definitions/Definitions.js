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
            meanings.map((mean)=> (
                mean.meanings.map((item)=>(
                   item.definitions.map((def) => (
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
