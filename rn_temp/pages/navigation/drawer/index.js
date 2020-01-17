import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtDrawer } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let NavigationDrawer = class NavigationDrawer extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftDrawerShow: false
    };
  }
  leftDrawerClick() {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow
    });
  }
  onDrawerClose() {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Drawer 抽屉</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.leftDrawerClick.bind(this)} style={_styleSheet["demo-btn"]}>左边滑出</View>
                        <AtDrawer show={this.state.leftDrawerShow} mask onClose={this.onDrawerClose.bind(this)} items={['菜单1', '菜单2']}>
                        </AtDrawer>
                    </View>
                </View>
            </View>;
  }
};
export { NavigationDrawer as default };