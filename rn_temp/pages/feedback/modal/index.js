import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View, Button } from "@tarojs/components-rn";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let FeedbackModal = class FeedbackModal extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened1: false,
      isModalOpened2: false,
      isModalOpened3: false,
      isModalOpened4: false
    };
  }
  showToast(name) {
    Taro.showToast({
      icon: 'none',
      title: name
    });
  }
  handleModalClick(type) {
    this.setState({
      [`isModalOpened${type}`]: true
    });
  }
  closeModal(type, msg) {
    this.setState({
      [`isModalOpened${type}`]: false
    });
    this.showToast(msg);
  }
  render() {
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Modal 模态框</View>
                <View style={_styleSheet["panel__content"]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleModalClick.bind(this, 1)} style={_styleSheet["demo-btn"]}>打开基础模态框</View>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleModalClick.bind(this, 2)} style={_styleSheet["demo-btn"]}>打开单个按钮模态框</View>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleModalClick.bind(this, 3)} style={_styleSheet["demo-btn"]}>打开无标题模态框</View>
                    </View>

                    
                    <View style={_styleSheet["example-item"]}>
                        <View onClick={this.handleModalClick.bind(this, 3)} style={_styleSheet["demo-btn"]}>打开简化使用模态框</View>
                    </View>
                </View>

                
                
                <AtModal isOpened={this.state.isModalOpened1} onClose={this.closeModal.bind(this, 1, 'Modal被关闭了')}>
                    <AtModalHeader>标题</AtModalHeader>
                    <AtModalContent>
                        <View style={_styleSheet["modal-content"]}>
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                        </View>
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.closeModal.bind(this, 1, '点击了取消')}>
                            取消
                        </Button>
                        <Button onClick={this.closeModal.bind(this, 1, '点击了确定')}>
                            确定
                        </Button>
                    </AtModalAction>
                </AtModal>

                
                <AtModal isOpened={this.state.isModalOpened2} onClose={this.closeModal.bind(this, 2, 'Modal被关闭了')}>
                    <AtModalHeader>标题</AtModalHeader>
                    <AtModalContent>
                        <View style={_styleSheet["modal-content"]}>
                            这里是正文内容，欢迎加入京东凹凸实验室
                        </View>
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.closeModal.bind(this, 2, '点击了确定')}>
                            确定
                        </Button>
                    </AtModalAction>
                </AtModal>

                
                <AtModal isOpened={this.state.isModalOpened3} onClose={this.closeModal.bind(this, 3, 'Modal被关闭了')}>
                    <AtModalContent>
                        <View style={_styleSheet["modal-content"]}>
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                        </View>
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.closeModal.bind(this, 3, '点击了取消')}>
                            取消
                        </Button>
                        <Button onClick={this.closeModal.bind(this, 3, '点击了确定')}>
                            确定
                        </Button>
                    </AtModalAction>
                </AtModal>

                
                <AtModal isOpened={this.state.isModalOpened4} title="标题" cancelText="取消" confirmText="确认" content="欢迎加入京东凹凸实验室\\n\\r欢迎加入京东凹凸实验室" onClose={this.closeModal.bind(this, 4, 'Modal被关闭了')} onCancel={this.closeModal.bind(this, 4, '点击了取消')} onConfirm={this.closeModal.bind(this, 4, '点击了确认')} />
                
            </View>;
  }
};
export { FeedbackModal as default };