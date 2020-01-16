import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtTag } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewTag = class ViewTag extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      hollowTagList: [{ name: '标签1', active: false }, { name: '标签2', active: false }, { name: '标签3', active: true }, { name: '标签4', active: true }],
      solidTagList: [{ name: '标签1', active: false }, { name: '标签2', active: false }, { name: '标签3', active: true }, { name: '标签4', active: true }],
      hollowTagList2: [{ name: '标签1', active: false }, { name: '标签2', active: false }, { name: '标签3', active: true }, { name: '标签4', active: true }],
      solidTagList2: [{ name: '标签1', active: false }, { name: '标签2', active: false }, { name: '标签3', active: true }, { name: '标签4', active: true }]
    };
  }
  handleHollowClick(data) {
    const { hollowTagList } = this.state;
    const findIndex = hollowTagList.findIndex(item => item.name === data.name);
    hollowTagList[findIndex].active = !hollowTagList[findIndex].active;
    this.setState({ hollowTagList });
  }
  handleSolidClick(data) {
    const { solidTagList } = this.state;
    const findIndex = solidTagList.findIndex(item => item.name === data.name);
    solidTagList[findIndex].active = !solidTagList[findIndex].active;
    this.setState({ solidTagList });
  }
  handleHollowSmallClick(data) {
    const { hollowTagList2 } = this.state;
    const findIndex = hollowTagList2.findIndex(item => item.name === data.name);
    hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active;
    this.setState({ hollowTagList2 });
  }
  handleSolidSmallClick(data) {
    const { solidTagList2 } = this.state;
    const findIndex = solidTagList2.findIndex(item => item.name === data.name);
    solidTagList2[findIndex].active = !solidTagList2[findIndex].active;
    this.setState({ solidTagList2 });
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Tag 标签</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        {this.state.hollowTagList.map((item, index) => <View key={item.name} style={_styleSheet["subitem"]}>
                                <AtTag name={item.name} active={item.active} circle={index % 2 === 0} onClick={this.handleHollowClick.bind(this)}>标签</AtTag>
                            </View>)}
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        {this.state.solidTagList.map((item, index) => <View key={item.name} style={_styleSheet["subitem"]}>
                                <AtTag type="primary" name={item.name} active={item.active} circle={index % 2 === 0} onClick={this.handleSolidClick.bind(this)}>标签</AtTag>
                            </View>)}
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["subitem"]}>
                            <AtTag type="primary" circle disabled>标签</AtTag>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtTag type="primary" disabled>标签</AtTag>
                        </View>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        {this.state.hollowTagList2.map((item, index) => <View key={item.name} style={_styleSheet["subitem"]}>
                                <AtTag size="small" name={item.name} active={item.active} circle={index % 2 === 0} onClick={this.handleHollowSmallClick.bind(this)}>标签</AtTag>
                            </View>)}
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        {this.state.solidTagList2.map((item, index) => <View key={item.name} style={_styleSheet["subitem"]}>
                                <AtTag size="small" type="primary" name={item.name} active={item.active} circle={index % 2 === 0} onClick={this.handleSolidSmallClick.bind(this)}>标签</AtTag>
                            </View>)}
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View style={_styleSheet["subitem"]}>
                            <AtTag size="small" type="primary" circle disabled>标签</AtTag>
                        </View>
                        <View style={_styleSheet["subitem"]}>
                            <AtTag size="small" type="primary" disabled>标签</AtTag>
                        </View>
                    </View>
                </View>
            </View>;
  }
};
export { ViewTag as default };