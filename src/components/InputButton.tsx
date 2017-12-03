import * as React from "react";

export interface InputButtonProps {
    buttonText: string;
}

export interface InputButtonState {

}

export class InputButton extends React.Component<InputButtonProps, InputButtonState> {

    public constructor(props: InputButtonProps) {
        super(props);
    }


    public render() {
        return (
            <div>
                <input type="button" value={this.props.buttonText}>
                </input>
            </div>
        );
    }
}