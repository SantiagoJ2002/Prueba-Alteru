import { useEffect, useState } from "react";




export const GetMovieList = (Year)  => {
  const API = 'https://jsonmock.hackerrank.com/api/movies?Year=2015'
  const [dataApi, setDataApi] = useState(null)
  useEffect(() => {
    fetch(API).then(response => response.json()).then(data => {
      console.log(data);


    })
  },[])
    return dataApi;
  };