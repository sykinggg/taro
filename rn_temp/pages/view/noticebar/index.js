import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtNoticebar } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewNoticebar = class ViewNoticebar extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Noticebar 通告栏</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar icon="volume-plus" single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar marquee>[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar marquee icon="volume-plus">[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar showMore single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar close single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtNoticebar close>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                </View>
            </View>;
  }
};
export { ViewNoticebar as default };