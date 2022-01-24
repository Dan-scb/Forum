import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import TopRanking from "./TopRanking";
import './LoadTop.css'

export default class LoadTop extends Component{

    state = {
        data: [],
        topRanking: []
    }

    componentDidMount(){

        axios.get('http://localhost:9000/getTopicandResponses').then(res => {
            this.setState({data: res.data})
            let data = res.data.map(value => value.id) 
            

       let responses = []
      let  vaiableParam = []
      let podium = 0
      let topRanking = []
        for(let i =0; i <= data.length; i++){
            if(data[i] == data[i-1]){
                vaiableParam.push(data[i])
            }else{
                responses.push(vaiableParam)
                vaiableParam = []
            }
        }
        
      let order =  responses.map(item => [item.length, item[0]]).sort().reverse()

      if(order.length <= 2){
        topRanking = []
      }else{
        do{
            topRanking.push(order[podium])
           podium++
            
       }while(podium <= 2) 
      }
       
        this.setState({topRanking: topRanking})
        
    })
       }



    render(){
        const {data, topRanking} = this.state
      let cont = 0

        if(topRanking.length <= 2){
            return <div className="cardTop">
                <strong>Mais movimentados</strong>
                <div className="Top">
                <h2 className="Setp">Sem tópicos</h2>
                </div>
                
            </div>
            
        }else{
            
               return <div className="cardTop">
                    <strong>Mais movimentados</strong>
                    <div className="Top">
                        {topRanking.map(topic => {
                          
                            let content = data.filter( item => item.id == topic[1])
                          content = content.length == 0 ? [{id:0, title:'Adicione+', content:'adicione...'}] : content
                           let url =  `/questOpen/${content[0].id}` 
                           cont++
                            return<Link to={url}><TopRanking key={cont} title={content[0].title} content={content[0].content} /></Link>
                        
                        })}
                        </div>
                    </div>
        }     
    }
}