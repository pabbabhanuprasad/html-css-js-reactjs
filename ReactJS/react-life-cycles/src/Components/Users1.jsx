import React, {Component} from 'react'
export default class Users1 extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div></div>
        )
    }
    componentDidMount(){
        fetch("http://localhost:3000/typeOf").then(res=>{
            return res.json()
        }).then((response)=>{
            console.log(response)
        })
    }
}