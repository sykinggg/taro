import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtToast } from 'taro-ui';
var _styleSheet = indexStyleSheet;
const INIT_STATE = {
  image: '',
  icon: '',
  text: '',
  status: '',
  duration: 3000,
  hasMask: false,
  isOpened: false
};
let FeedbackToast = class FeedbackToast extends Taro.Component {
  constructor(props) {
    super(props);
    this.handleToastClose = () => {
      this.setState({
        isOpened: false
      });
    };
    this.state = {
      ...INIT_STATE
    };
  }
  // 轻提示
  handleToastClick(text, icon, image, hasMask, status) {
    if (this.state.isOpened) {
      return this.setState(INIT_STATE);
    }
    const state = Object.assign({ ...INIT_STATE, isOpened: true }, { text, icon, image, hasMask, status });
    this.setState(state);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Toast 轻提示</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleToastClick.bind(this, '文本内容', '', '', false, '')} style={_styleSheet["demo-btn"]}>文本 Toast</View>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleToastClick.bind(this, '文本内容', 'analytics', '', false, '')} style={_styleSheet["demo-btn"]}>文本 + ICON</View>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleToastClick.bind(this, '凹凸实验室', '', 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png', false, '')} style={_styleSheet["demo-btn"]}>自定义图片 Toast</View>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleToastClick.bind(this, '文本内透明遮罩层的作用在于不可点击下面的元素容', '', '', true, '')} style={_styleSheet["demo-btn"]}>添加遮罩层 Toast</View>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleToastClick.bind(this, '错误提示', '', '', true, 'error')} style={_styleSheet["demo-btn"]}>错误提示 Toast</View>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleToastClick.bind(this, '正确提示', '', '', true, 'success')} style={_styleSheet["demo-btn"]}>正确提示 Toast</View>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleToastClick.bind(this, '正在加载…', '', '', true, 'loading')} style={_styleSheet["demo-btn"]}>加载中 Toast</View>
                    </View>
                </View>

                
                <AtToast icon={this.state.icon} text={this.state.text} image={this.state.image} status={this.state.status} hasMask={this.state.hasMask} isOpened={this.state.isOpened} duration={this.state.duration} onClose={this.handleToastClose} />
            </View>;
  }
};
export { FeedbackToast as default };