import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtBadge, AtButton } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewBadge = class ViewBadge extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const dot = '···';
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Badge 徽标</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge value="10" maxValue={99}>
                                <AtButton size="small" circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge value="100" maxValue={99}>
                                <AtButton size="small">按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge dot>
                                <AtButton size="small" circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge dot>
                                <AtButton size="small">按钮</AtButton>
                            </AtBadge>
                        </View>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge value="NEW">
                                <AtButton size="small" circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge value="NEW">
                                <AtButton size="small">按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge value={dot}>
                                <AtButton size="small" circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View style={[_styleSheet["subitem"], _styleSheet["subitem--badge"]]}>
                            <AtBadge value={dot}>
                                <AtButton size="small">按钮</AtButton>
                            </AtBadge>
                        </View>
                    </View>
                </View>
            </View>;
  }
};
export { ViewBadge as default };