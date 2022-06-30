import React from "react"
import Option from "./Option";

//STATELESS FUNCTIONAL
const Options = (props) => {
    return (<div>
            <button onClick={props.handleRemoveAll}>Remove All</button>

         {/* <p>{this.props.optionList.length}</p>  */}
         {props.optionList.map(optionEl => <Option key={optionEl} OptionText={optionEl} handleRemoveItem={props.handleRemoveItem}></Option>)}

        
        </div>)
    }


// class Options extends React.Component {
//     render() {
//         return (<div>
//             <button onClick={this.props.handleRemoveAll}>Remove All</button>

//          {/* <p>{this.props.optionList.length}</p>  */}
//          {this.props.optionList.map(optionEl => <Option key={optionEl} OptionText={optionEl}></Option>)}

        
//         </div>)
//     }
// }
export default Options;
