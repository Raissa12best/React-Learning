import {useState} from 'react'

export default function Joke(props) {
    const [isShown, setIsShown] =useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    /**
     * Only display the punchline paragraph if `isShown` is true
     */
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{isShown && props.punchline}</p>
            <button onClick={toggleShown}>{!isShown ? "Show" : "Hide"} punchline</button>
            <hr />
        </div>
    )
}