import React from 'react';
import CurrentPage from "./CurrentPage";

const Page = ({ match: { params }, location }) => {
    console.log(location);
    return (
        <div>
            <CurrentPage direction={params.direction} page={location.search.slice(6)}/>
        </div>
    )
};

export default Page;