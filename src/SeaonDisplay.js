import React from 'react';

import './SeasonDisplay.css';

const getSeason=(lat,mon) =>
{

    if(mon>2 && mon<9){
        if(lat>0) return "Winter";
        else return "Summer";
    }
    else if(lat>0) return "Summer";
        else return "Winter";
    
}
const SeasonDisplay = (props)=>
{
    const Season =getSeason(props.latOfMyPosition,new Date().getMonth())
    
    const text= Season === 'winter'?"Burrrr....... Its chilly":"Lets Hit the Beach"

  const iconName =  Season === 'winter'?"snowflake icon":"sun"
   
   
    return  ( 
    <div  className={`Season-display  ${Season}`}>
           
           <i className={` icon-left massive ${iconName} loading icon`}></i>
        <h1>{text}</h1>
        <i className={` icon-right massive ${iconName} loading icon`}></i> 
        </div>
    );
}
export default SeasonDisplay;