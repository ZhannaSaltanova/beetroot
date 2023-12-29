
import {useEffect} from "react";

function Home () {
    useEffect(() => {
        document.title = 'MARVEL'
    }, []);
    return (
        <>
           <h2>Home</h2>
        </>
    )
}

export default Home;