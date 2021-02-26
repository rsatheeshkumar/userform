import React from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonnelDetails from "./FormPersonnelDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: "",
    };
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonnelDetails
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success />;

      default:
        return this.state;
    }
  }
}

export default UserForm;
