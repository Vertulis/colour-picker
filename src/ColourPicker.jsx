import React, {useState, useEffect} from "react";

function ColourPicker(){
    const [colour, setColour] = useState("#aff8f8");
    function handleColourChange(event){
        setColour(event.target.value)
    }

    useEffect(() => {
        document.body.style.backgroundColor = colour;
    }, [colour]);

    return(
        <div className="colour-picker-container">
            <h1 style={{color: colour}}>Colour Picker</h1>
            <p>Selected colour: {colour}</p>
            <div className="colour-select-container">
                <label>Select a colour: </label>
                <input width="0" height="0" type="color" value={colour} onChange={handleColourChange}/> 
            </div>
        </div>
    )
}

export default ColourPicker