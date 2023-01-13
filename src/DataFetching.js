import React ,{useState, useEffect} from "react";
// import axios from "axios";
const API = "https://mosesochacha.github.io/server1/db.json"

 function DataFetching(props){
    const [  transactions, setTransactions] = useState([])
    useEffect(()=>{
        fetch(API)
        .then((response)=>response.json())
        .then((data)=>{
         data.transactions.map((dataObj)=>{
        
         },[])
        })
        
    })
    return (
        <div>
         </div>
    )
}

export default DataFetching