import React from "react"
import ReactDom from "react-dom"

const div = <div>你好我是react</div>
const test = ["123","sdsf","ljlkjl","vs"]
let arr = []
test.map(item => {
    let abc = <h1>{item}</h1>
    arr.push(abc)
})
ReactDom.render(
    arr
    ,document.querySelector("#app"))