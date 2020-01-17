import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View, Picker } from "@tarojs/components-rn";
var _styleSheet = indexStyleSheet;
let DataEntryPicker = class DataEntryPicker extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: ['中国', '美国', '巴西', '日本'],
      selectorValue: 0
    };
  }
  handlePickerChange(e) {
    this.setState({
      selectorValue: e.detail.value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Picker 选择器</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <Picker mode="selector" range={this.state.selector} value={this.state.selectorValue} onChange={this.handlePickerChange.bind(this)}>
                            <View style={_styleSheet["demo-list-item"]}>
                                <View style={_styleSheet["demo-list-item__label"]}>国家地区</View>
                                <View style={_styleSheet["demo-list-item__value"]}>{this.state.selector[this.state.selectorValue]}</View>
                            </View>
                        </Picker>
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryPicker as default };