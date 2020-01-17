import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtNavBar } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let NavigationNavBar = class NavigationNavBar extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>NavBar 导航栏</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtNavBar title="NavBar 导航栏示例" leftIconType="chevron-left" rightFirstIconType="bullet-list" rightSecondIconType="user" />
                    </View>
                </View>
            </View>;
  }
};
export { NavigationNavBar as default };