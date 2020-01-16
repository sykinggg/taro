import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtCountdown } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewCountdown = class ViewCountdown extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Countdown 倒计时</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <AtCountdown minutes={5} seconds={10} />
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        <AtCountdown isShowDay hours={1} minutes={5} seconds={10} />
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <AtCountdown format={{ hours: ':', minutes: ':', seconds: '' }} minutes={5} seconds={10} />
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <AtCountdown isCard isShowDay day={1} minutes={5} seconds={10} format={{ day: '天', hours: ':', minutes: ':', seconds: '' }} />
                    </View>
                </View>
            </View>;
  }
};
export { ViewCountdown as default };