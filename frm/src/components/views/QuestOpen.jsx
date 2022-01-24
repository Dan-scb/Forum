import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './QuestOpen.css'

import Response from "./contents/Response";
  


export default class QuestOpen extends Component {
    
    state ={
        data: [],
        responses:[]
    }
    componentDidMount(){
    axios.get(`http://localhost:9000/getTopic/${this.props.identity}`).then(res => {
       
        this.setState({data: res.data})
        let responses = res.data.map(data => data.resposta)
        this.setState({responses: responses})
        
    })   
        
    }

    
    render(){  
        const {data, responses} = this.state
        var quest = 0
        let param = 0
        return  <div className="Align">
    <div className="QuestOpen">
        {data.map(dat => {
            
          return quest == 0 ?  <> <span><h3>{dat.title}</h3></span>
           <div>{dat.content}</div>
           <div className="Param">{quest = dat.id}</div> 
            </>  : <></>
             
        })}
    
    </div>
    {responses.map(response => {
       param = data[0].id
        return <div key={param} className="response">
            <p>{response}</p>
        </div>
    })}
    <Response quest={param} />
    </div>          

    }
    
    
}