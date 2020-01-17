import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtFloatLayout } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let LayoutFloat = class LayoutFloat extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFloatLayoutOpened: false
    };
  }
  handleFloatLayoutChange(flag) {
    this.setState({
      isFloatLayoutOpened: flag
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>FloatLayout 浮动弹层</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleFloatLayoutChange.bind(this, true)} style={_styleSheet["demo-btn"]}>打开 Float Layout</View>
                    </View>
                </View>

                <AtFloatLayout title="这是个标题" isOpened={this.state.isFloatLayoutOpened} onClose={this.handleFloatLayoutChange.bind(this, false)}>
                    <View style={_styleSheet["content-wrapper"]}>
                        《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
                        封笔的诗人与智力障碍的儿子一起生活；
                        绝望的备胎照顾梦中情人与别人的孩子
                        外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
                        指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
                        邻居当中有个永生不死的老头 …
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
                        封笔的诗人与智力障碍的儿子一起生活；
                        绝望的备胎照顾梦中情人与别人的孩子
                        外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
                        指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
                        邻居当中有个永生不死的老头 …
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                        然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
                    </View>
                </AtFloatLayout>
            </View>;
  }
};
export { LayoutFloat as default };