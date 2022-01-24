import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShowTopic from "./contents/ShowTopic";
import './Topic.css'


export default class Topic extends Component  {

    state = {
        data: [],
        responses: []
    }
    
       componentDidMount(){
        axios.get('http://localhost:9000/getTopics').then(res => {
            this.setState({data:res.data})
            
        })
        axios.get('http://localhost:9000/getTopicandResponses').then(res => {
            
        let data = res.data.map(value => value.id) 
        
        let p2 = 0 
       let count = 0
       let responses = []
        for(let i = 1; i <= data.length; i++){
            if(data[i] != data[i-1]){
                count = i - p2
                p2 = i
                responses.push(count)
            }
        }
        
        this.setState({responses})
          
    })      
    }
   
      

    render(){
        const {data, responses} = this.state
        let count = 0
        
     return  <React.Fragment >

         <div className="Topic">
    <Link to="/registopic"> <button className="btnRegisTopic">Registrar novo Tópico</button></Link>
      {data.map(data => {
          
          let url = `/questopen/${data.id}`
        let resp = responses[count]
        count++
          return <Link to={url}><ShowTopic key={count} title={data.title}  id={data.id} resp={resp}   /></Link>
      })}
      </div>  
    </React.Fragment> 
    }
  
    
     
}