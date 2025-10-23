import React, { useState } from 'react';

const Students = ({stdData}) => {

  

  return (
    <>

    {stdData.map((std)=> <div key={std.id} style={Styles.divStyle}>{std.name}</div>)}
      
    </>
  );
}

export default Students;

let Styles = {
  divStyle: {width:"30%", margin:"10px auto", backgroundColor:"cornflowerblue", color:"white", fontSize:"18px", fontWeight:"bold", padding:"20px", textAlign:"center", borderRadius:"5px"}
}
