import React from "react";

const Option = (props) => {
    return (<div>
           available Option <p>{props.OptionText}</p>
           <button onClick={(e) =>{props.handleRemoveItem(props.OptionText)}}>Remove</button>
    </div>)

}

// class Option extends React.Component {
//     render() {
//         return (<div>
//            available Option <p>{this.props.OptionText}</p>
//         </div>)
//     }
// }
export default Option