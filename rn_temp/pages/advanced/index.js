import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import ToHome from 'src/components/to-home';
import DocsHeader from 'src/components/doc-header';
import { AtCalendar } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let Advanced = class Advanced extends Taro.Component {
  constructor(props) {
    super(props);
    this.config = {
      navigationBarTitleText: 'Taro UI'
    };
    this.state = {
      multiCurentDate: {
        start: Date.now()
      }
    };
  }
  handleClick(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <ToHome />
                <DocsHeader title="高阶" desc="日历组件"></DocsHeader>
                <View style={_styleSheet["doc-body"]}>
                    <View style={_styleSheet["panel"]}>
                        <View style={_styleSheet["panel__title"]}>Calendar 日历</View>
                        <View style={_styleSheet["panel__content"]}>
                            
                            <View style={[_styleSheet["example-item"], _styleSheet["example-item--calendar"]]}>
                                <View style={_styleSheet["example-item__desc"]}>一般案例</View>
                                <AtCalendar />
                            </View>

                            
                            <View style={[_styleSheet["example-item"], _styleSheet["example-item--calendar"]]}>
                                <View style={_styleSheet["example-item__desc"]}>范围选择</View>
                                <AtCalendar isMultiSelect currentDate={this.state.multiCurentDate} />
                            </View>

                            <View style={_styleSheet["example-item"]}>
                                <View onClick={this.handleClick.bind(this, 'multiCurentDate', {
                start: '2018/10/28',
                end: '2018/11/11'
              })} style={_styleSheet["demo-btn"]}>设置选择区间为 2018/10/28 - 2018/11/11</View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>;
  }
};
export { Advanced as default };