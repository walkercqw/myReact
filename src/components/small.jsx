import React from "react"

export default function Small(props){
    return <div>
        <h1>我是small组件</h1>
        <p>我的名字是{props.name}</p>
        <p>我的年齡是{props.age}</p>
    </div>
}