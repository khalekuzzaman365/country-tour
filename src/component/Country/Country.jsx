import { useState } from "react";

const Country = ({country}) => {
const {name, flags, population, area, cca3} = country;

const [visited, setVisited] = useState(false);
const handleVisited = () =>{
   setVisited (!visited);
}
 return (
  <div className={`country ${visited ? 'visited': 'non-visited'}`}>
   <h3>{name.common}</h3>
   <img src={flags.png} alt="" />
   <p>Population:{population}</p>
   <p>Area:{area}</p>
   <p><small>Code:{cca3}</small></p>
   <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
   {visited ?' I have visited the country.' : 'I want to visit the country '}
   
  </div>
 );
};

export default Country;