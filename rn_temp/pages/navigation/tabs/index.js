import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtTabs, AtTabsPane } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let NavigationTabs = class NavigationTabs extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsListValue: 0,
      tabsListValue2: 0
    };
  }
  handleTabsClick(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }
  render() {
    const { tabsListValue, tabsListValue2 } = this.state;
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }, { title: '标签页4' }, { title: '标签页5' }, { title: '标签页6' }];
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Tabs 标签页</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>水平标签页</View>
                        <AtTabs swipeable={false} scroll current={tabsListValue} tabList={tabList} onClick={this.handleTabsClick.bind(this, 'tabsListValue')}>
                            <AtTabsPane current={tabsListValue} index={0}>
                                <View style={_styleSheet["tab-content"]}>标签页一的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={1}>
                                <View style={_styleSheet["tab-content"]}>标签页二的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={2}>
                                <View style={_styleSheet["tab-content"]}>标签页三的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={3}>
                                <View style={_styleSheet["tab-content"]}>标签页四的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={4}>
                                <View style={_styleSheet["tab-content"]}>标签页五的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={5}>
                                <View style={_styleSheet["tab-content"]}>标签页六的内容</View>
                            </AtTabsPane>
                        </AtTabs>
                    </View>

                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["example-item__desc"]}>垂直标签页</View>
                        <AtTabs height="200px" scroll tabDirection="vertical" current={tabsListValue2} tabList={tabList} onClick={this.handleTabsClick.bind(this, 'tabsListValue2')}>
                            <AtTabsPane tabDirection="vertical" current={tabsListValue2} index={0}>
                                <View style={_styleSheet["tab-content--vertical"]}>标签页一的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection="vertical" current={tabsListValue2} index={1}>
                                <View style={_styleSheet["tab-content--vertical"]}>标签页二的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection="vertical" current={tabsListValue2} index={2}>
                                <View style={_styleSheet["tab-content--vertical"]}>标签页三的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection="vertical" current={tabsListValue2} index={3}>
                                <View style={_styleSheet["tab-content--vertical"]}>标签页四的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection="vertical" current={tabsListValue2} index={4}>
                                <View style={_styleSheet["tab-content--vertical"]}>标签页五的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection="vertical" current={tabsListValue2} index={5}>
                                <View style={_styleSheet["tab-content--vertical"]}>标签页六的内容</View>
                            </AtTabsPane>
                        </AtTabs>
                    </View>
                </View>
            </View>;
  }
};
export { NavigationTabs as default };