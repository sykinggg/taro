import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtImagePicker } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryImagePicker = class DataEntryImagePicker extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [{
        url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
      }, {
        url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
      }, {
        url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
      }]
    };
  }
  handleImageChange(stateName, files) {
    this.setState({
      [stateName]: files
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>ImagePicker 图片选择器</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["example-item"]}>
                        <AtImagePicker files={this.state.files} onChange={this.handleImageChange.bind(this, 'files')} />
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryImagePicker as default };