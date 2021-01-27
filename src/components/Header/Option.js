import React from 'react';

const Option = (props) => {
    return (
        <li>
            <a href={ props.link }>
                <button className="option">{
                    props.children
                }</button>
            </a>
        </li>
    );
}

export default Option;