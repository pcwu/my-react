import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class Data extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText=""
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Email"
        />
        <br />
        <AutoComplete
          hintText=""
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Password"
          fullWidth={false}
        />
      </div>
    );
  }
}

export default Data;
