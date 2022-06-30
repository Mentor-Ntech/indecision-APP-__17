// console.log('Application run from Utilis file')

// const square = (x) => x * x;

// const intro = (firstName, sch = 'Unilage') => console.log(`I am ${firstName} i  attended ${sch}`);

// const depodef = () => `i am working on Rea
// export {
//     square,
//     intro,
//     depodef as default
// }

/////////////////////////////////////////////////////////////////////////////

import React from "react";
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (<Modal
        isOpen={!!props.selectedOption}
        contentLabel='open modal'
    
    >
        
        <button onClick={props.closeModal}>okay</button>
        
        {props.selectedOption && <h2>{props.selectedOption}</h2> }
        
    </Modal>)
    
}

export default OptionModal
