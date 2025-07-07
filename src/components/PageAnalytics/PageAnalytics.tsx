import React, {useEffect} from "react";

const PageAnalytics = () => {
    useEffect(() => {
        const startTime = Date.now();

        return () => {
            const endTime = Date.now();
            const timeSpent = Math.round((endTime - startTime) / 1000);

            console.log(`User stayed on page for ${timeSpent} seconds`);
        }
    }, []);
    return (
        <div>
            <h1>Welcome to the page</h1>
            <p>This component tracks how long the user stays on this page.</p>
        </div>
    )
}

export default PageAnalytics;
