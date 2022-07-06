import React from "react";


class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this)
    }
    handleAddOptions(e) {
        e.preventDefault();

        const formOption = e.target.elements.options.value;

        if(formOption) {
            this.props.addOptions(formOption)
            e.target.elements.options.value = ''
        }


        // alert(formOption)
        
    }
    render() {
        return (<div>

                <div>
                <form onSubmit={this.handleAddOptions} className="addOption">
                    <input type="text" name="options" className="addOption--input"/>
                    <button className="buttonSmall">Add option</button>
                </form>
                </div>
            

        </div>)
    }
}
export default AddOptions;
