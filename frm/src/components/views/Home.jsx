import React, { Component, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./contents/Card";
import LoadTop from "./contents/LoadTop";

import './Home.css'

export default class Home extends Component {
    
    state = {
        data: [],
        
    }
    
       componentDidMount(){
        axios.get('http://localhost:9000/getTopics').then(res => {
            this.setState({data:res.data})
           
        })

        
       }
     

    render(){
        const {data} = this.state
        let count = 0

        if(data.length == 0 ){
            return <main className="Home">
                <h2>Sem tópicos</h2>
            </main>
             
        }else{
           return <main className="Home">
               <LoadTop />

               {data.map(dat => {
                   let url = `/questOpen/${dat.id}}`
                   count++
                 return  <Link to={url}><Card key={count} title={dat.title} content={dat.content} category={dat.name} /></Link>
               })}
           </main>
           
        }
    }

}