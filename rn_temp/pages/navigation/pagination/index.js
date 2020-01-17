import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtPagination } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let NavigationPagination = class NavigationPagination extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Pagination 分页器</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>基础</View>
                        <AtPagination total={50} pageSize={10} current={1}></AtPagination>
                    </View>

                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>图标</View>
                        <AtPagination icon total={50} pageSize={10} current={1}></AtPagination>
                    </View>
                </View>
            </View>;
  }
};
export { NavigationPagination as default };