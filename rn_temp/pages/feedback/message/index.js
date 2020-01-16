import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtMessage } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let FeedbackMessage = class FeedbackMessage extends Taro.Component {
  constructor(props) {
    super(props);
  }
  handleMessageClick(type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Message 消息通知</View>
                <View style={_styleSheet["panel__content"]}>
                    <View style={_styleSheet["example-item"]}>
                        
                        <View style={_styleSheet["subitem"]}>
                            <View onClick={this.handleMessageClick.bind(this, '')} style={_styleSheet["demo-btn"]}>普通提示</View>
                        </View>
                        
                        <View style={_styleSheet["subitem"]}>
                            <View onClick={this.handleMessageClick.bind(this, 'success')} style={_styleSheet["demo-btn"]}>成功提示</View>
                        </View>
                        
                        <View style={_styleSheet["subitem"]}>
                            <View onClick={this.handleMessageClick.bind(this, 'error')} style={_styleSheet["demo-btn"]}>错误提示</View>
                        </View>
                    </View>
                    <View style={_styleSheet["example-item"]}>
                        
                        <View style={_styleSheet["subitem"]}>
                            <View onClick={this.handleMessageClick.bind(this, 'warning')} style={_styleSheet["demo-btn"]}>警告提示</View>
                        </View>
                        
                        <View style={_styleSheet["subitem"]}>
                            <View onClick={this.handleMessageClick.bind(this, 'info')} style={_styleSheet["demo-btn"]}>提示消息</View>
                        </View>
                    </View>
                </View>

                
                <AtMessage />
            </View>;
  }
};
export { FeedbackMessage as default };