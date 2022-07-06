import React from "react";

// STATELESS FUNCTIONAL COMPONENT
const Header = (props) => {
    return (
        <div>
            <div className="header">
                <div className="container">
                <h1 className="header__title">{props.topic}</h1>
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
                </div>
            
            </div>
           
        </div>
    )
}

Header.defaultProps = {
    topic: 'Indecision App',
    subtitle: 'Let computer make  decision ...💫',
}
    


// class Header extends React.Component {
//     render() {
//         return (<div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>)
//     }
// }
export default Header;