import React from 'react';
import { Button } from 'antd';
import styles from './index.module.scss';

//定义props和state的类型接口
interface IProps {
  add: () => void; // () => void表示函数类型
}
interface IState {
  msg: string;
}
export default class Child extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  render(){
    return(
      <div className={styles.child}><Button onClick={this.props.add}>click ajax</Button></div>
    )
  }
}