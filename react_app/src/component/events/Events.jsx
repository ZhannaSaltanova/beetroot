import Comics from "../comics/Comics";
import {useEffect} from "react";

function Events () {
    useEffect(() => {
        document.title = 'Events'
    }, []);
    return (
        <div>
            <h2>News</h2>
        </div>
    )
}

export default Events;