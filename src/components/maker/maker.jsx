import React from 'react';
import {useLocation} from "react-router-dom";

const Maker = (props) => {

    let location = useLocation();

    console.log(location);

    return(
        <h1>maker</h1>
    )
};

export default Maker;