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
            <form onSubmit={this.handleAddOptions}>
            <input type="text" name="options" />
            <button>Add option</button>
            </form>

        </div>)
    }
}
export default AddOptions;
