import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtTabBar } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let NavigationBTabBar = class NavigationBTabBar extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabbarCurrent: 0
    };
  }
  handleTabBarClick(value) {
    this.setState({
      tabbarCurrent: value
    });
  }
  render() {
    const tabbarList = [{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: 99 }];
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>TabBar 标签栏</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtTabBar tabList={tabbarList} onClick={this.handleTabBarClick.bind(this)} current={this.state.tabbarCurrent} />
                    </View>
                </View>
            </View>;
  }
};
export { NavigationBTabBar as default };