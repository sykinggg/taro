import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import { AtSteps } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewSteps = class ViewSteps extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsCurrent1: 0,
      stepsCurrent2: 0,
      stepsCurrent3: 0,
      stepsCurrent4: 1
    };
  }
  handleStepsChange(stateName, current) {
    this.setState({
      [stateName]: current
    });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Steps 步骤条</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--steps"]]}>
                        <AtSteps items={[{ 'title': '步骤一' }, { 'title': '步骤二' }]} current={this.state.stepsCurrent1} onChange={this.handleStepsChange.bind(this, 'stepsCurrent1')} />
                    </View>

                    
                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--steps"]]}>
                        <AtSteps items={[{ 'title': '步骤一', 'desc': '这里是额外的信息，最多两行' }, { 'title': '步骤二', 'desc': '这里是额外的信息，最多两行' }, { 'title': '步骤三', 'desc': '这里是额外的信息，最多两行' }]} current={this.state.stepsCurrent2} onChange={this.handleStepsChange.bind(this, 'stepsCurrent2')} />
                    </View>

                    
                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--steps"]]}>
                        <AtSteps items={[{
            'title': '步骤一',
            'desc': '这里是额外的信息，最多两行',
            'icon': {
              value: 'sound',
              activeColor: '#fff',
              inactiveColor: '#78A4FA',
              size: '14'
            }
          }, {
            'title': '步骤二',
            'desc': '这里是额外的信息，最多两行',
            'icon': {
              value: 'shopping-cart',
              activeColor: '#fff',
              inactiveColor: '#78A4FA',
              size: '14'
            }
          }, {
            'title': '步骤三',
            'desc': '这里是额外的信息，最多两行',
            'icon': {
              value: 'camera',
              activeColor: '#fff',
              inactiveColor: '#78A4FA',
              size: '14'
            }
          }]} current={this.state.stepsCurrent3} onChange={this.handleStepsChange.bind(this, 'stepsCurrent3')} />
                    </View>

                    
                    <View style={[_styleSheet["example-item"], _styleSheet["example-item--steps"]]}>
                        <AtSteps items={[{
            title: '步骤一',
            desc: '这里是额外的信息，最多两行',
            success: true
          }, {
            title: '步骤二',
            desc: '这里是额外的信息，最多两行'
          }, {
            title: '步骤三',
            desc: '这里是额外的信息，最多两行',
            error: true
          }]} current={this.state.stepsCurrent4} onChange={this.handleStepsChange.bind(this, 'stepsCurrent4')} />
                    </View>

                </View>
            </View>;
  }
};
export { ViewSteps as default };