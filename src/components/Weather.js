import React from 'react'

const weather = (props) => {
   
    return(
        <div className="weather-div">
            {props.state.city && props.state.country && <p>Location: {props.state.city}, {props.state.city}</p>}
            {props.state.city && <p>Temperature: {props.state.temperature}</p>}
            {props.state.city && <p>Humidity: {props.state.humidity}</p>}
            {props.state.city && <p>Description: {props.state.description}</p>}
            {props.state.error && <p>{props.state.error}</p>}
        </div>
    )
}

export default weather