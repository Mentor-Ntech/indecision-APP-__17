import React from "react"
import Option from "./Option";

//STATELESS FUNCTIONAL
const Options = (props) => {
    return (<div>

                
                <div className="widget--header">
                    <h3>Your Options</h3>
                    
                <button onClick={props.handleRemoveAll} className="buttonSmall buttonSmall--link">Remove All</button>

                {/* <p>{this.props.optionList.length}</p>  */}
                

                </div>
                
                {props.optionList.length === 0 && <p className="widget__msg">Add new options</p>}
                {props.optionList.map((optionEl, index )=> <Option key={optionEl} OptionText={optionEl} handleRemoveItem={props.handleRemoveItem} count={index +1}></Option>)}
        
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
