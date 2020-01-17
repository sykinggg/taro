import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtDivider } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewDivider = class ViewDivider extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Divider 分隔线</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <AtDivider content="没有更多了" />
                    </View>
                </View>
            </View>;
  }
};
export { ViewDivider as default };