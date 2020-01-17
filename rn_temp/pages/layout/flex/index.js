import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
var _styleSheet = indexStyleSheet;
let LayoutFlex = class LayoutFlex extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Flex 弹性布局</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={[_styleSheet["example-item"], _styleSheet["flex-page"]]}>
                        <View style={_styleSheet["example-item__desc"]}>基本案例</View>
                        <View style={_styleSheet["at-row"]}>
                            <View style={_styleSheet["at-col"]}>A</View>
                            <View style={_styleSheet["at-col"]}>B</View>
                            <View style={_styleSheet["at-col"]}>C</View>
                        </View>
                    </View>

                    <View style={[_styleSheet["example-item"], _styleSheet["flex-page"]]}>
                        <View style={_styleSheet["example-item__desc"]}>定义长度</View>
                        <View style={_styleSheet["at-row"]}>
                            <View style={[_styleSheet["at-col"], _styleSheet["at-col-3"]]}>A</View>
                            <View style={[_styleSheet["at-col"], _styleSheet["at-col-6"]]}>B</View>
                            <View style={[_styleSheet["at-col"], _styleSheet["at-col-2"]]}>C</View>
                            <View style={[_styleSheet["at-col"], _styleSheet["at-col-1"]]}>D</View>
                        </View>
                    </View>
                </View>
            </View>;
  }
};
export { LayoutFlex as default };