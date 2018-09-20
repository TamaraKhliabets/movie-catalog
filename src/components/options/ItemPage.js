import React from 'react';
import CurrentItemPage from "./CurrentItemPage";
import CurrentPersonPage from './CurrentPersonPage';

const Page = ({ match: { params } }) => {
    let direction = params.direction;
    let id = params.id;
    return (direction === 'person') ?
        <CurrentPersonPage direction={direction} id={id}/> :
        <CurrentItemPage direction={direction} id={id}/>
};

export default Page;