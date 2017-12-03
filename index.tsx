import * as React from "react";
import * as ReactDOM from "react-dom";

import {HomePage} from "./src/pages/HomePage";

export class Index {

    public constructor() {

        ReactDOM.render(
            <HomePage/>,
            document.getElementById('root')
        );
    }
}

new Index();

