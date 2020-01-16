import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtTimeline } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewTimeline = class ViewTimeline extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Timeline 时间轴</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>一般用法</View>
                        <AtTimeline items={[{ title: '刷牙洗脸' }, { title: '吃早餐' }, { title: '上班' }, { title: '睡觉' }]}></AtTimeline>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>自定义图标</View>
                        <AtTimeline items={[{ title: '刷牙洗脸', icon: 'check-circle' }, { title: '吃早餐', icon: 'clock' }, { title: '上班', icon: 'clock' }, { title: '睡觉', icon: 'clock' }]}></AtTimeline>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>幽灵节点</View>
                        <AtTimeline pending items={[{ title: '刷牙洗脸' }, { title: '吃早餐' }, { title: '上班' }, { title: '睡觉' }]}></AtTimeline>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>丰富内容</View>
                        <AtTimeline pending items={[{ title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' }, { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' }, { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' }, { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }]}></AtTimeline>
                    </View>
                </View>
            </View>;
  }
};
export { ViewTimeline as default };