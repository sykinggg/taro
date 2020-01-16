import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtInputNumber } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryInputNumber = class DataEntryInputNumber extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber1: 1,
      inputNumber2: 1,
      inputNumber3: 1
    };
  }
  handleNumberChange(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>InputNumber 数字输入框</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>min=0, max=10, step=1</View>
                        <AtInputNumber type="number" min={0} max={10} step={1} value={this.state.inputNumber1} onChange={this.handleNumberChange.bind(this, 'inputNumber1')} />
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>禁用</View>
                        <AtInputNumber type="number" disabled min={0} max={10} step={1} value={this.state.inputNumber2} onChange={this.handleNumberChange.bind(this, 'inputNumber2')} />
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>大尺寸</View>
                        <AtInputNumber type="number" size="lg" min={0} max={10} step={1} value={this.state.inputNumber3} onChange={this.handleNumberChange.bind(this, 'inputNumber3')} />
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryInputNumber as default };