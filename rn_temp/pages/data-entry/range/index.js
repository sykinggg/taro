import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtRange } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryRange = class DataEntryRange extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: [20, 60]
    };
  }
  handleRangeChange(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Range 范围选择器</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>
                            数值范围：{this.state.rangeValue[0]}~{this.state.rangeValue[1]}
                        </View>
                        <AtRange min={0} max={100} value={this.state.rangeValue} onChange={this.handleRangeChange.bind(this, 'rangeValue')} />
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryRange as default };