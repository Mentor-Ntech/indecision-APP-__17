import React from "react"


// class Action extends React.Component {
    
//     render() {
//         return (<div>
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>What should i do...</button>
//         </div>)
//     }
// }

const Action =(props) => {
    return (<div>
            <button onClick={props.handlePick} disabled={!props.hasOption}>What should i do...</button>
        </div>)
}
export default Action;