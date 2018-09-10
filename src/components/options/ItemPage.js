import React from 'react';
import CurrentItemPage from "./CurrentItemPage";

const Page = ({ match: { params } }) => {
    return (
        <div>
            <CurrentItemPage direction={params.direction} id={params.id}/>
        </div>
    )
};

export default Page;