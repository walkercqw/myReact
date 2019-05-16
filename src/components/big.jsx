import React from "react"
import Small from "./small.jsx"

const aaa = 1
export default class Movie extends React.Component {
    constructor(props){
        super()
        this.state = {
            name: "cqw",
            age: 22,
            small:{
                name: "mysmall",
                age: "mysmallage"
            }
        }
    }
    render(){
        return <div>
            <h1>我是父组件</h1>
            <p> 我的名字是{this.state.name} </p>
            <p>我是传过来的值我叫{this.props.name} 我今年{this.props.age}岁了</p>
            <p>我是aaa 我的值等於{aaa}</p>
            <Small {...this.state.small}></Small>
        </div>
    }
    
}