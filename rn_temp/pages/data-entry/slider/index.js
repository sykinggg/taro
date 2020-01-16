import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtSlider } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntrySlider = class DataEntrySlider extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Slider 滑动条</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>step=1</View>
                        <AtSlider step={1} value={50} activeColor="#EC585A"></AtSlider>
                    </View>
                </View>
            </View>;
  }
};
export { DataEntrySlider as default };