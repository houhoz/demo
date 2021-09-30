import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames';

import ActionSheetPanel from './ActionSheetPanel';

class ActionSheetContainer extends Component {
  constructor(props){
    super(props);
    //确定初始状态，options为ActionSheet的选项，desc为描述，maskClosable为遮罩可否关闭，callback为选择之后的回调，active为是否激活显示ActionSheet
    this.state = {
      options: [],
      desc: '',
      maskClosable: true,
      callback: undefined,
      active: false
    }
    this.onClose = this.onClose.bind(this);
    this.onMaskClose = this.onMaskClose.bind(this);
  }
  //声明onOpen函数，因为每次打开，都有可能是一个新的状态，显示时先更新相应状态
  onOpen(props){
    const { options, desc, callback } = props;
    //此处设置延迟0秒后执行，让setState在第三次事件循环后执行，保证能正确获取到动态改变后的props。
    setTimeout(() => {
      this.setState({
        options,
        desc,
        callback,
        active: true
      });
    }, 0);
  }
  //关闭
  onClose(){
    this.setState({
      active: false
    });
  }
  //遮罩关闭
  onMaskClose(e){
    const { maskClosable } = this.state;

    if(maskClosable && (e.target === e.currentTarget)){
      this.onClose();
    }
  }
  //选择选项后的回调，这里只传入选择的索引
  onSelect(selectedIndex){
    const { callback } = this.state;

    callback && callback(selectedIndex);
    this.onClose();
  }
  render(){
    const { options, desc, active} = this.state;
    const actionSheetMaskClass = classnames({
      'grp-action-sheet': true,
      'active': active
    });

    return (
      <div
        className={actionSheetMaskClass}
        onClick={e => this.onMaskClose(e)}
      >
       {/* //此处子组件和我们可以传入的props */}
        <ActionSheetPanel
          options={options}
          desc={desc}
          onCancel={this.onClose}
          onSelect={selectedIndex => this.onSelect(selectedIndex)}
        />
      </div>
    );
  }
}

//这里我们为类ActionSheetContainer添加一个静态方法，用于初次渲染组件
ActionSheetContainer.renderActionSheet = () => {
  const actionSheetWrap = document.createElement('div');
  document.body.appendChild(actionSheetWrap);
  
  //将ActionSheetContainer渲染到创建好的div里并返回ActionSheetContainer组件实例
  const actionSheetInstance = ReactDOM.render(
    React.createElement(
      ActionSheetContainer
    ),
    actionSheetWrap
  );

  return {
    open(props){
      //调用ActionSheetContainer实例的onOpen方法并传入外部props
      actionSheetInstance.onOpen(props);
    },
    close(){
      actionSheetInstance.onClose();
    },
    //添加销毁组件的方法
    distroy(){
      ReactDOM.unmountComponentAtNode(actionSheetWrap);
      document.body.removeChild(actionSheetWrap);
    }
  }
}

export default ActionSheetContainer;
