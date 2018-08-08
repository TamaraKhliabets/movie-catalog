import React from 'react';
import CurrentPage from "./CurrentPage";

const Page = ({ match: { params } }) => {
    return (
        <div>
            <CurrentPage direction={params.direction}/>
        </div>
    )
};

export default Page;