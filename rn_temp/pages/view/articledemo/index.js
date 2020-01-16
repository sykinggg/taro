import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import NavigatorBtn from "../../../components/navigator-btn/index";
var _styleSheet = indexStyleSheet;
let ViewArticledemo = class ViewArticledemo extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Article 文章</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <NavigatorBtn parent="view" name="article"></NavigatorBtn>
                    </View>
                </View>
            </View>;
  }
};
export { ViewArticledemo as default };