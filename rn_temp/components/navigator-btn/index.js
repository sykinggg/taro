import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
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
    return <View className="demo-goto-btn" onClick={this.handleGoto.bind(this, parent, name)}>查看详情</View>;
  }
};
export { NavigatorBtn as default };