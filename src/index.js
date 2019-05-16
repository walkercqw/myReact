import React from "react"
import ReactDom from "react-dom"
import Movie from "./components/big.jsx"

const div = <div>你好我是react</div>
const test = ["123","sdsf","ljlkjl","vs"]
const tag = {
    name: "tagname",
    age: "tagage"
}


ReactDom.render(
    <Movie {...tag}></Movie>
    ,document.querySelector("#app"))