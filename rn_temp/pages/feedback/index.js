import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
import DocsHeader from "../../components/doc-header/index";
import ToHome from "../../components/to-home/index";
import FeedbackActionSheet from "./actionSheet/index";
import FeedbackMessage from "./message/index";
import FeedbackModal from "./modal/index";
import FeedbackToast from "./toast/index";
import FeedbackProgress from "./progress/index";
import FeedbackSwipeAction from "./swipeAction/index";
import FeedbackActivityIndicator from "./activityIndicator/index";
var _styleSheet = indexStyleSheet;
let Feedback = class Feedback extends Taro.Component {
  constructor(props) {
    super(props);
    this.config = {
      navigationBarTitleText: 'Taro UI'
    };
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <ToHome />
                <DocsHeader title="操作反馈" desc="7 个组件"></DocsHeader>

                <View style={_styleSheet["doc-body"]}>
                    
                    
                    <FeedbackActionSheet />

                    
                    <FeedbackMessage />

                    
                    <FeedbackModal />

                    
                    <FeedbackToast />

                    
                    <FeedbackProgress />

                    
                    <FeedbackSwipeAction />

                    
                    <FeedbackActivityIndicator />

                </View>
            </View>;
  }
};
export { Feedback as default };