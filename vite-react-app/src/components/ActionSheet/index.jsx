import ActionSheetContainer from './ActionSheetContainer';

import './ActionSheet.css';

let newActionSheet;

const initActionSheet = (() => {
  if (!newActionSheet) {
    newActionSheet = ActionSheetContainer.renderActionSheet();
  }
  return newActionSheet;
})();

//这里就设置暴露出的API
const ActionSheet = {
  openActionSheetWithOptions(props = {}, callback) {
    const { options = [], desc = '', maskClosable = true } = props;

    initActionSheet.open({options, desc, maskClosable, callback});
  },
  close(){
    initActionSheet.close();
  },
  distroy() {
    if(newActionSheet){
      initActionSheet.distroy();
      newActionSheet = null;
    }
  }
}

export default ActionSheet;