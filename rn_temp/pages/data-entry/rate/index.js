import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtRate } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryRate = class DataEntryRate extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      rateValue: 3
    };
  }
  handleRateChange(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Rate 评分</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtRate value={this.state.rateValue} onChange={this.handleRateChange.bind(this, 'rateValue')} />
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryRate as default };