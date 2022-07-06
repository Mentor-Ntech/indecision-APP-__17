import React from "react";

const Option = (props) => {
    return (<div>
                <div className="option">
                    <p className="optionResult">{props.count}. {props.OptionText}</p>
                    
             <button onClick={(e) =>{props.handleRemoveItem(props.OptionText)}} className="buttonSmall buttonSmall--link">Remove</button>
                </div>

            
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