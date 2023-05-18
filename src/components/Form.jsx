import React from 'react'

const Form = (props) => {

    const searchTypes = ['people', 'planets']


    return (
        <div>
            <label class ="input-group-text">Search for:</label>
            <select class = "custom-select" value = {props.type}
                onChange = {(e) => props.selectType(e.target.value)}>
                {searchTypes.map((searchType, idx) =>(
                    <option key = {idx} value = {searchType}>{searchType}</option>
                ))}
            </select>
            <label class ="input-group-text" >ID:</label>
            <input type = 'number' class = "form-control" value = {props.itemId} onChange = {(e) => props.idSelect(e.target.value)}/>
            <button class = "btn btn-primary" onClick = {props.newRequest}>Search</button>
        </div>
    )
}

export default Form