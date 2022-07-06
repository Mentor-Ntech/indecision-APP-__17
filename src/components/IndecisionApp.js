import React from "react";
import AddOptions from "./AddOptions";
import Action from "./Action";
import Options from "./Options";
import Header from "./Header";
import OptionModal from "../OptionModal";

class IndecisionApp extends React.Component {

    constructor(props){
        super(props)
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.addOptions = this.addOptions.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            // optionList: ['Item 1', 'Item 2', 'Item 3']
            optionList:[],
            selectedOption: undefined,
        }
    }

    handlePick() {
        const randomNumb = Math.trunc( Math.random() * this.state.optionList.length)
        const finalOption = this.state.optionList[randomNumb];
        
        this.setState(() =>{
            return {
                selectedOption: finalOption
            }
        })
    
    }

    closeModal() {
        this.setState(()=>{
            return {
                selectedOption: undefined 
            }
        })
    }

    handleRemoveAll() {
        this.setState(() =>{
            return {
                optionList:[]
            }
        })
            
    }
    handleRemoveItem(optionToRemove) {
        this.setState((prevState) =>{
            return {
                optionList: prevState.optionList.filter(oddOption => oddOption !== optionToRemove)
            }
        })
    }
    
        

    addOptions(newOption) {
        // console.log(newOption)
        this.setState((prevState) =>{
            return{
                optionList: prevState.optionList.concat(newOption)
            }
        })
    }


    render() {
        return (<div>
                    
            <Header />

            <div className="container">
            <Action hasOption={this.state.optionList.length > 0} handlePick={this.handlePick}/>
            <div className="widget">
            <Options  optionList={this.state.optionList} handleRemoveAll={this.handleRemoveAll} handleRemoveItem={this.handleRemoveItem}/>
            <AddOptions  addOptions={this.addOptions}/>
            </div>
            
          <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
            </div>
            
        </div>)
    }
}
export default IndecisionApp