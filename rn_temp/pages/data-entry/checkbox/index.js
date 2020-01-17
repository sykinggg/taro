import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtCheckbox } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryCheckbox = class DataEntryCheckbox extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxOption: [{ value: 'list1', label: 'iPhone X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' }, { value: 'list2', label: 'HUAWEI P20' }, { value: 'list3', label: 'OPPO Find X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true }, { value: 'list4', label: 'vivo NEX', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true }],
      checkedList: ['list1', 'list4']
    };
  }
  handleCheckboxChange(value) {
    this.setState({
      checkedList: value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Checkbox 复选框</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["checkbox-container"]}>
                            <AtCheckbox options={this.state.checkboxOption} selectedList={this.state.checkedList} onChange={this.handleCheckboxChange.bind(this)} />
                        </View>
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryCheckbox as default };