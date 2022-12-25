import React from 'react'

export const ListItem = ({ id, text,color }) => {
    let classes=`list-group-item ${color}`;
    return (
        <div>
            <li className={classes}>
                {id ? id + "-" : " "}
                {text}
            </li>
        </div>
    )
}
export default ListItem;
