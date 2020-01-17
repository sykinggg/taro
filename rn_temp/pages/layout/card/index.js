import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtCard } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let LayoutCard = class LayoutCard extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Card 卡片</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--card"]]}>
                        <View style={_styleSheet["example-item__desc"]}>基础卡片</View>
                        <AtCard title="这是个标题">
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>

                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--card"]]}>
                        <View style={_styleSheet["example-item__desc"]}>带图标的卡片</View>
                        
                        <AtCard title="这是个标题">
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>

                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--card"]]}>
                        <View style={_styleSheet["example-item__desc"]}>完整的卡片</View>
                        <AtCard note="小Tips" extra="额外信息" title="这是个标题" thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png">
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>

                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--card"]]}>
                        <View style={_styleSheet["example-item__desc"]}>通栏卡片</View>
                        <AtCard isFull note="小Tips" extra="额外信息" title="这是个标题" thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png">
                            这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>
                </View>
            </View>;
  }
};
export { LayoutCard as default };