import * as React from "react";
import { AddRuleForm } from "./AddRuleForm";
import { InputOnChangeData } from "semantic-ui-react";
import { append } from "ramda";
import { nameof } from "../../utils/Reflection";

type State = {
  sender: string;
  subject: string;
  content: string;
  folderName: string;
  period: number;
  errors: string[];
};

class AddRule extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      errors: [],
      sender: "",
      subject: "",
      content: "",
      folderName: "",
      period: 0
    };
  }

  handleChange = (_: {}, data: InputOnChangeData) => {
    this.setState({ [data.name]: data.value, errors: [] });
  };

  onSubmit = () => {
    let errors: string[] = [];
    if (!this.state.period || !Number.isInteger(this.state.period)) {
      errors = append(nameof<State>("period"), errors);
    }
    if (!this.state.sender) {
      errors = append(nameof<State>("sender"), errors);
    }
    if (!this.state.folderName) {
      errors = append(nameof<State>("folderName"), errors);
    }
    if (errors.length > 0) {
      return this.setState({ errors });
    }
    console.log("OK");
  };

  render() {
    return (
      <>
        <AddRuleForm
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />
      </>
    );
  }
}

export { AddRule };
