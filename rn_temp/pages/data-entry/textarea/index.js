import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtTextarea } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryTextarea = class DataEntryTextarea extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: ''
    };
  }
  handleTextareaChange(stateName, e) {
    this.setState({
      [stateName]: e.target.value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Textarea 多行文本框</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtTextarea value={this.state.textareaValue} onChange={this.handleTextareaChange.bind(this, 'textareaValue')} maxLength={200} placeholder="你的问题是..." />
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryTextarea as default };