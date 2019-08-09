import React, {Component} from "react";
import "highlight.js/styles/monokai-sublime.css";
import {Button, Form, FormGroup, Label} from "reactstrap";


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {user: props.user};
    console.log("user---",this.props.user);
    }

      render() {
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">${this.props.user.name}</Label>

                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>

                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}


export default User;
