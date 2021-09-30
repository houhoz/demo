import React from 'react';

const ActionSheetPanel = ({ options, desc, onSelect, onCancel }) => (
  <div className="action-sheet-panel">
    <h3 className="action-sheet-header">{desc}</h3>
    <ul className="action-sheet-options">
      {
        options.map((option, index) => (
          <li
            key={option.toString()}
            onClick={e => onSelect(index, e)}
          >{option}</li>
        ))
      }
    </ul>
    <span className="action-sheet-spliter"></span>
    <div
      className="action-sheet-cancel"
      onClick={onCancel}
    >
      取消
    </div>
  </div>
);

export default ActionSheetPanel;