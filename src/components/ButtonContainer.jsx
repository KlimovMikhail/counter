import React from "react"; 
import CustomButton from "./Button";

class ButtonContainer extends React.Component {
  state = {
    count: 0
  };

  handleClickPlus = () => {
    this.setState((prevState) => ({ count: prevState.count +1 }));
  };

  handleClickMinus = () => {
    this.setState((prevState) => ({ count: prevState.count -1 }));
  };

  render() {
    const {count} = this.state;
    return(
      <div>
        <CustomButton text="Plus" handleClick={this.handleClickPlus}></CustomButton>
        <p>Counter: {count}</p>
        <CustomButton text="Minus" handleClick={this.handleClickMinus}></CustomButton>
      </div>
    )
  }
}

export default ButtonContainer;