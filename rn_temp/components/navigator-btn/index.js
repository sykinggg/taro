import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
// import './index.scss'
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let NavigatorBtn = class NavigatorBtn extends Taro.Component {
  constructor(props) {
    super(props);
  }
  handleGoto(parent, name) {
    Taro.navigateTo({
      url: `/pages/${parent.toLowerCase()}/${name.toLowerCase()}/index`
    });
  }
  render() {
    const { parent, name } = this.props;
    return <View onClick={this.handleGoto.bind(this, parent, name)} style={_styleSheet["demo-goto-btn"]}>查看详情</View>;
  }
};
export { NavigatorBtn as default };