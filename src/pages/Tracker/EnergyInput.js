
import React, { useContext, useState, useEffect } from 'react'
import TimeContext from '../../context/TimeContext'
import RequestContext from '../../context/RequestContext'
import dd from '../../utilities/Debugger'

const EnergyInput = (props) => {

    // Options
        /// Deselection?
            // false. HTTP function will not send 0. Selection can be changed but not nullified.

    let { time } = useContext(TimeContext)
    let { updateEntry } = useContext(RequestContext)

    // STATE
    let [selection, setSelection] = useState(0)
    let [userInteraction, setUserInteraction] = useState(false)

    // Props not available on first render -- must be saved to state here in useEffect
    // props.data needed as dependency
    useEffect(() => {

            setSelection(props.data[`energy_${time.timeOfDay}`])

    }, [props.data[`energy_${time.timeOfDay}`]])

    useEffect(() => {

    // As it is now, energy cannot be deselected, just changed
    // To allow deselection:
    // if (selection > -1 && selection < 4){
        if (selection > 0 &&  selection < 4 && userInteraction){
            updateEntry({
                [`energy_${time.timeOfDay}`]: selection
            })
        }

    }, [selection, updateEntry, time.timeOfDay])

    let handleSelection = (e, n) => {

        /* This block allows for deselection:
        if (selection === n)setSelection(0)
        else setSelection(n) */
        setUserInteraction(true)
        setSelection(n)
        dd(selection)
    }


    return (
        <div className = "section">
            <div > ⚡️ This <span id = "dayRegion">{time.timeOfDay}</span>, I have this much energy: </div>
            <p id = "energyNote"></p>
            <div id = "energyOptions">

                <button
                onClick = {(e) => handleSelection(e, 1)}
                className = {"button button-energy "
                + (selection === 1 ? "selected saved" : "")}
                >Little</button>

                <button
                onClick = {(e) => handleSelection(e, 2)}
                className = {"button button-energy "
                + (selection === 2 ? "selected saved" : "")}
                >Some</button>

                <button
                onClick = {(e) => handleSelection(e, 3)}
                className = {"button button-energy "
                + (selection === 3 ? "selected saved" : "")}
                >Lots</button>

            </div>
        </div>
    )
}

export default EnergyInput