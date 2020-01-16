import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtSwipeAction } from 'taro-ui';
var _styleSheet = indexStyleSheet;
const OPTIONS = [{
  text: '删除',
  style: {
    color: '#333',
    backgroundColor: '#F7F7F7'
  }
}, {
  text: '确认',
  style: {
    backgroundColor: '#E93B3D'
  }
}];
let FeedbackSwipeAction = class FeedbackSwipeAction extends Taro.Component {
  constructor(props) {
    super(props);
    this.handleSwipeClick = this.handleSwipeClick.bind(this);
  }
  // 滑块
  handleSwipeClick(e) {
    console.log(e);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>SwipeAction 滑动操作</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--border"]]}>
                        <AtSwipeAction onClick={this.handleSwipeClick} options={OPTIONS}>
                            <View style={_styleSheet["normal"]}>AtSwipeAction 一般使用场景</View>
                        </AtSwipeAction>
                    </View>
                </View>
            </View>;
  }
};
export { FeedbackSwipeAction as default };