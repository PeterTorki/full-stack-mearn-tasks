import React, { useState } from 'react';
import Search from './Search';
import Students from './Students';

const Root = () => {

  let studentArr = [
    {id:1, name:'Ahmed'},
    {id:2, name:'fatma'},
    {id:3, name:'Ebrahim'},
    {id:4, name:'omar'},
    {id:5, name:'Rana'},
    {id:6, name:'Hamza'},
    {id:7, name:'mohamed'},
    {id:8, name:'Nader'},
    {id:9, name:'sarah'},
    {id:10, name:'Abdo'},
  ]

  const [stdData, setStdData] = useState(studentArr);

  const getSearchData = (student)=>{
    // console.log(std)

    setStdData(studentArr.filter((std)=> std.name.toLowerCase().includes(student.toLowerCase())))
  }

  return (
    <>
      <Search getSearchData={getSearchData}></Search>
      <Students stdData={stdData}></Students>
    </>
  );
}

export default Root;
