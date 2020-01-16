import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
import { AtButton } from 'taro-ui';
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
    return <View className="panel__content no-padding">
                <View className="example-item">
                    <View className="btn-item">
                        <AtButton type="primary" onClick={this.goIndex}>返回主页</AtButton>
                    </View>
                </View>
            </View>;
  }
};
export { ToHome as default };