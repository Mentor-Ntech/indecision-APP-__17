// import  './utils'
// import depodef, {square, intro} from './utils' 





// console.log('New react application');
// console.log(square(10))
// intro('Naheem')
// console.log(depodef())


// import validator from 'validator';

// const myEmail = validator.isEmail('oloyedeaderayo11@gmail.com')
// console.log(myEmail)

import React from "react";
import ReactDOM  from "react-dom";

import IndecisionApp from "./components/IndecisionApp";
import './css/style.css'

const Layout = (props) => {
    return (<div>
        <h1>Header</h1>

        {props.children}
        <p>footer</p>
    </div>)

}






// ReactDOM.render(
// <Layout>
//     <div>
//         <h3>Body Content</h3>
//         <p>This is prop</p>
//     </div>
// </Layout>, 
// document.getElementById('app'))

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))