import {useEffect} from "react";

function Stories () {
    useEffect(() => {
        document.title = 'Stories'
    }, []);
    return (
        <div>
            <h2>Movies</h2>
        </div>
    )
}

export default Stories;