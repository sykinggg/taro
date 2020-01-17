import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtSearchBar } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntrySearchBar = class DataEntrySearchBar extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbarValue: ''
    };
  }
  handleSearchBarChange(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }
  onActionClick() {
    Taro.showToast({
      title: '开始搜索',
      icon: 'success',
      duration: 2000
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>SearchBar 搜索栏</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["component-item"]}>
                        <AtSearchBar value={this.state.searchbarValue} onChange={this.handleSearchBarChange.bind(this, 'searchbarValue')} onActionClick={this.onActionClick.bind(this)} />
                    </View>
                </View>
            </View>;
  }
};
export { DataEntrySearchBar as default };