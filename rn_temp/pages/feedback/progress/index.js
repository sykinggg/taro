import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtProgress } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let FeedbackProgress = class FeedbackProgress extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Progress 进度条</View>
                
                <View style={[_styleSheet["panel__content"], _styleSheet["panel__content--progress"]]}>
                    <View style={_styleSheet["example-item__desc"]}>基础进度条</View>
                    <View style={_styleSheet["example-item"]}>
                        <AtProgress percent={25} />
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtProgress percent={50} />
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtProgress percent={75} />
                    </View>
                </View>

                
                <View style={[_styleSheet["panel__content"], _styleSheet["panel__content--progress"]]}>
                    <View style={_styleSheet["example-item__desc"]}>隐藏进度文案</View>
                    <View style={_styleSheet["example-item"]}>
                        <AtProgress percent={25} isHidePercent />
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtProgress percent={75} isHidePercent />
                    </View>
                </View>

                
                <View style={[_styleSheet["panel__content"], _styleSheet["panel__content--progress"]]}>
                    <View style={_styleSheet["example-item__desc"]}>不同的状态</View>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>暂停</View>
                        <AtProgress percent={25} />
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>进行中</View>
                        <AtProgress percent={50} status="progress" />
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>错误</View>
                        <AtProgress percent={75} status="error" />
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>已完成</View>
                        <AtProgress percent={100} status="success" />
                    </View>
                </View>
            </View>;
  }
};
export { FeedbackProgress as default };