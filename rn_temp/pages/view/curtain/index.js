import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View, Image } from "@tarojs/components-rn";
import { AtCurtain } from "taro-ui";
import curtainPng from '../../../assets/images/curtain.png';
var _styleSheet = indexStyleSheet;
let ViewCurtain = class ViewCurtain extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurtainOpened: false
    };
  }
  handleCurtainClick(flag) {
    this.setState({
      isCurtainOpened: flag
    });
  }
  render() {
    const { isCurtainOpened } = this.state;
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Curtain 幕帘</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleCurtainClick.bind(this, true)} style={_styleSheet["demo-btn"]}>显示幕帘</View>
                    </View>
                </View>

                <AtCurtain isOpened={isCurtainOpened} closeBtnPosition="bottom" onClose={this.handleCurtainClick.bind(this, false)}>
                    <Image style="width:100%" mode="widthFix" src={curtainPng} />
                </AtCurtain>
            </View>;
  }
};
export { ViewCurtain as default };