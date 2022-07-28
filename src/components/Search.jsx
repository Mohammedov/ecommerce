import {useState} from 'react';
import Grid from './Grid';


const Search = (props) => {
  

  const handleChange = event => {
    props.sendData(event.target.value);

    console.log('value is:', event.target.value);
  };

  

  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
        value={props.sendValue}
      />

      
    </div>
  );
};

export default Search;