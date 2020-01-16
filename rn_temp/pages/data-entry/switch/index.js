import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtForm, AtSwitch } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntrySwitch = class DataEntrySwitch extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true
    };
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }
  handleSwitchChange(value) {
    console.log(value);
    this.setState({
      switchValue: value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Switch 开关</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtForm>
                            <AtSwitch title="开启中" color="#EC585A" checked={this.state.switchValue} onChange={this.handleSwitchChange} />
                            <AtSwitch title="已禁止" disabled onChange={this.handleSwitchChange} />
                            <AtSwitch title="已关闭" color="#EC585A" border={false} />
                        </AtForm>
                    </View>
                </View>
            </View>;
  }
};
export { DataEntrySwitch as default };