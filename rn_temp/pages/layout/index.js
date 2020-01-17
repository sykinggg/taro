import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";

import { View } from "@tarojs/components-rn";
import ToHome from "../../components/to-home/index";
import DocsHeader from "../../components/doc-header/index";
import LayoutFlex from "./flex/index";
import LayoutGrid from "./grid/index";
import LayoutList from "./list/index";
import LayoutAccordion from "./accordion/index";
import LayoutFloat from "./float/index";
import LayoutCard from "./card/index";
var _styleSheet = indexStyleSheet;
let Layout = class Layout extends Taro.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <ToHome />
                <DocsHeader title="布局" desc="6 个组件"></DocsHeader>

                <View style={_styleSheet["doc-body"]}>
                    
                    <LayoutFlex />

                    
                    <LayoutGrid />

                    
                    <LayoutList />

                    
                    <LayoutAccordion />

                    
                    <LayoutFloat />

                    
                    <LayoutCard />
                </View>
            </View>;
  }
};
export { Layout as default };