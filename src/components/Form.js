import React from 'react'

 const form = (props) => {
    return(
        <div className="form-div">
            <form onSubmit = {props.getWeather}>
                <input type="text" name="city" placeholder="city..."/><br></br>
                <input type="text" name="country" placeholder="country..."/><br></br>
                <button> Get Weather </button>
            </form>
        </div>
    )
}

export default form