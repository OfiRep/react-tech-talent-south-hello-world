import * as React from "react";
import {InputButton} from "../components/InputButton";

export interface HomePageProps {

}

export interface HomePageState {

}

export class HomePage extends React.Component<HomePageProps, HomePageState> {

    public constructor(props: HomePageProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Home Page</h1>
                <InputButton buttonText="Button1"/>
            </div>
        );
    }
}