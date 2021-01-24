import React from 'react';
// import { Link } from "react-router-dom";

const Option = (props) => {
    return (
        <li>
            {/* <Link to={ props.link }> */}
                <button className="option">{
                    props.children
                }</button>
            {/* </Link> */}
        </li>
    );
}

export default Option;