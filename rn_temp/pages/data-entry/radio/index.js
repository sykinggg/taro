import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtRadio } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryRadio = class DataEntryRadio extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioOptions: [{ label: '单选项一', value: 'option1', desc: '单选项描述' }, { label: '单选项二', value: 'option2' }, { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }],
      radioValue: 'option1'
    };
  }
  handleRadioChange(value) {
    this.setState({
      radioValue: value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Radio 单选框</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["radio-container"]}>
                        <AtRadio options={this.state.radioOptions} value={this.state.radioValue} onClick={this.handleRadioChange.bind(this)} />
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryRadio as default };