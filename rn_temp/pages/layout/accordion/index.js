import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtAccordion, AtList, AtListItem } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let LayoutAccordion = class LayoutAccordion extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Accordion 手风琴</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtAccordion title="展开列表">
                            <AtList hasBorder={false}>
                                <AtListItem title="标题文字" thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png" />
                                <AtListItem title="标题文字" note="描述信息" thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png" />
                            </AtList>
                        </AtAccordion>
                    </View>
                </View>
            </View>;
  }
};
export { LayoutAccordion as default };