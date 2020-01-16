import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import DocsHeader from "../../components/doc-header/index";
import ToHome from "../../components/to-home/index";
import NavigationNavBar from "./navBar/index";
import NavigationBTabBar from "./tabBar/index";
import NavigationTabs from "./tabs/index";
import NavigationSegmentedControl from "./segmentedControl/index";
import NavigationPagination from "./pagination/index";
import NavigationDrawer from "./drawer/index";
import NavigationIndexesDemo from "./indexesDemo/index";
var _styleSheet = indexStyleSheet;
let Navigation = class Navigation extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <ToHome />
                <DocsHeader title="导航" desc="7 个组件"></DocsHeader>

                <View style={_styleSheet["doc-body"]}>
                    
                    <NavigationNavBar />

                    
                    <NavigationBTabBar />

                    
                    <NavigationTabs />

                    
                    <NavigationSegmentedControl />

                    
                    <NavigationPagination />

                    
                    <NavigationDrawer />

                    
                    <NavigationIndexesDemo />
                </View>
            </View>;
  }
};
export { Navigation as default };