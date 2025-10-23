import React from 'react';

const Search = ({getSearchData}) => {

  const handelChange = (e)=> {
    // console.log(e.target.value)
    getSearchData(e.target.value)
  }

  return (
    <>
      <div style={Styles.divStyle}>
        <input onChange={handelChange} style={Styles.inputStyle} type="text" placeholder='Search'/>
      </div>
    </>
  );
}

export default Search;

let Styles = {
  divStyle: {width:"40%", margin:"20px auto", display:"flex", flexDirection:"column", border:"2px solid crimson", padding:"20px", borderRadius:"5px"},
  inputStyle: {width:"70%", margin:"5px auto", outline:"none", border:"2px solid cornflowerblue", padding:"10px", borderRadius:"5px"},
} 
