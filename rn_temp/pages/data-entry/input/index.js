import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtForm, AtInput } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let DataEntryInput = class DataEntryInput extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: '',
      inputValue2: '',
      inputValue3: ''
    };
  }
  handleInput(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Input 输入框</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    <View style={_styleSheet["component-item"]}>
                        <AtForm>
                            <AtInput name="inputValue1" title="标准五个字" type="text" placeholder="标准五个字" value={this.state.inputValue1} onChange={this.handleInput.bind(this, 'inputValue1')} />
                            <AtInput name="inputValue2" title="标题实在特别长就换行" placeholder="其他列保持正常间距" value={this.state.inputValue2} onChange={this.handleInput.bind(this, 'inputValue2')} />
                            <AtInput name="inputValue3" border={false} placeholder="无标题" value={this.state.inputValue3} onChange={this.handleInput.bind(this, 'inputValue3')} />
                        </AtForm>
                    </View>
                </View>
            </View>;
  }
};
export { DataEntryInput as default };