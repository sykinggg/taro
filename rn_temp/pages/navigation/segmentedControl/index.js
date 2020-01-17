import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtSegmentedControl } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let NavigationSegmentedControl = class NavigationSegmentedControl extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      segmentedValue: 0
    };
  }
  handleSegmenentedClick(value) {
    this.setState({
      segmentedValue: value
    });
  }
  render() {
    const { segmentedValue } = this.state;
    const segmentedList = ['标签页1', '标签页2', '标签页3'];
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>SegmentedControl 分段器</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtSegmentedControl onClick={this.handleSegmenentedClick.bind(this)} current={segmentedValue} values={segmentedList} />
                        <View style={_styleSheet["tab-content"]}>标签 {segmentedValue + 1} 的内容</View>
                    </View>
                </View>
            </View>;
  }
};
export { NavigationSegmentedControl as default };