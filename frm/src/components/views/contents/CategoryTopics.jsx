import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import './CategoryTopic.css'

export default class CategoryTopics extends Component{

    state ={
        data: []
    }

    componentDidMount(){
        axios.get(`http://localhost:9000/getCategoryTopics/${this.props.id}`).then(res => {
            this.setState({data: res.data})
            
        }).catch(err => {
            console.log(err)
        })
    }
    render(){
        const {data} = this.state
        return <main className="AlignTopics">
            {data.map(dat => {
                let url = `/questopen/${dat.id}`
               return  <Link to={url}><div className="CategoryTopic">
                    <h3>{dat.title}</h3>
                    
                </div> </Link>
            })}
        </main>
    }
}