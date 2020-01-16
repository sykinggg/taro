import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtActivityIndicator } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let FeedbackActivityIndicator = class FeedbackActivityIndicator extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Activity Indicator 活动指示器</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["subitem"]}>
                            <AtActivityIndicator size={20}></AtActivityIndicator>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtActivityIndicator size={24} />
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtActivityIndicator size={32} />
                        </View>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["subitem"]}>
                            <AtActivityIndicator color="#13CE66" />
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtActivityIndicator color="#FF4949" />
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtActivityIndicator color="#C9C9C9" />
                        </View>
                    </View>

                    
                    <View style={[_styleSheet["example-item"], _styleSheet["indicator-panel"]]}>
                        <AtActivityIndicator mode="center" />
                    </View>
                    <View style={[_styleSheet["example-item"], _styleSheet["indicator-panel"]]}>
                        <AtActivityIndicator mode="center" content="Loading..." />
                    </View>
                </View>
            </View>;
  }
};
export { FeedbackActivityIndicator as default };