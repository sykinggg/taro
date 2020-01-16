import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtList, AtListItem } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let LayoutList = class LayoutList extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>List</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtList>
                            <AtListItem title="标题文字" />
                            <AtListItem title="标题文字" note="描述信息" arrow="right" />
                            <AtListItem arrow="right" note="描述信息" title="标题文字标题文字标题文字标题文字标题文字" extraText="详细信息详细信息详细信息详细信息" />
                            <AtListItem title="禁用状态" disabled extraText="详细信息" />
                        </AtList>
                    </View>
                </View>
            </View>;
  }
};
export { LayoutList as default };