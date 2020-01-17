import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtAvatar } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewAvatar = class ViewAvatar extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const avatarImg = 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg';
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Avatar 头像</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar circle size="small" image={avatarImg}></AtAvatar>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar circle image={avatarImg}></AtAvatar>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar circle size="large" image={avatarImg}></AtAvatar>
                        </View>
                    </View>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar size="small" image={avatarImg}></AtAvatar>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar image={avatarImg}></AtAvatar>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar size="large" image={avatarImg}></AtAvatar>
                        </View>
                    </View>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar circle size="small" text="凹"></AtAvatar>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar circle text="凹"></AtAvatar>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtAvatar circle size="large" text="凹"></AtAvatar>
                        </View>
                    </View>
                </View>
            </View>;
  }
};
export { ViewAvatar as default };