import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";

import DocsHeader from "../../components/doc-header/index";
import ToHome from "../../components/to-home/index";
import ViewArticledemo from "./articledemo/index";
import ViewAvatar from "./avatar/index";
import ViewBadge from "./badge/index";
import ViewTag from "./tag/index";
import ViewCountdown from "./countdown/index";
import ViewCurtain from "./curtain/index";
import ViewNoticebar from "./noticebar/index";
import ViewSteps from "./steps/index";
import ViewSwiper from "./swiper/index";
import ViewTimeline from "./timeline/index";
import ViewDivider from "./divider/index";
import ViewLoadMore from "./loadMore/index";
var _styleSheet = indexStyleSheet;
export let ViewComponent = class ViewComponent extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <ToHome />
                <DocsHeader title="视图" desc="8 个组件"></DocsHeader>

                <View style={_styleSheet["doc-body"]}>

                    
                    <ViewArticledemo />

                    
                    <ViewAvatar />

                    
                    <ViewBadge />

                    
                    <ViewTag />

                    
                    <ViewCountdown />

                    
                    <ViewCurtain />

                    
                    <ViewNoticebar />

                    
                    <ViewSteps />

                    
                    <ViewSwiper />

                    
                    <ViewTimeline />

                    
                    <ViewDivider />

                    
                    <ViewLoadMore />

                </View>

            </View>;
  }
};