import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
import { AtButton } from 'taro-ui';
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let ToHome = class ToHome extends Taro.Component {
  constructor(props) {
    super(props);
    this.goIndex = this.goIndex.bind(this);
  }
  goIndex() {
    Taro.navigateTo({
      url: '/pages/index/index'
    });
  }
  render() {
    return <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                <View style={_styleSheet["example-item"]}>
                    <View style={_styleSheet["btn-item"]}>
                        <AtButton type="primary" onClick={this.goIndex}>返回主页</AtButton>
                    </View>
                </View>
            </View>;
  }
};
export { ToHome as default };