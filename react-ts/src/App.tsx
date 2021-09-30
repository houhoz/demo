import React from "react";
import Child from "@/components/Child";
import Header from "@/components/Header";
import ChildFC from "@/components/ChildFC";
import Hello from "@/components/Hello";
import Test from "@/components/Test";
//定义props和state的类型接口
interface IProps {}
interface IState {
  count: number;
}
export default class Parent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  add = () => {
    fetch("/api/test")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Test />
        <Hello name={'小洋洋呀'} enthusiasmLevel={3} />
        <Child add={this.add} />
        {ChildFC()}
      </div>
    );
  }
}
