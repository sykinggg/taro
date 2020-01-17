import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import NavigatorBtn from "../../../components/navigator-btn/index";
var _styleSheet = indexStyleSheet;
let NavigationIndexesDemo = class NavigationIndexesDemo extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Indexes 索引选择器</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <NavigatorBtn parent="navigation" name="indexes"></NavigatorBtn>
                    </View>
                </View>
            </View>;
  }
};
export { NavigationIndexesDemo as default };