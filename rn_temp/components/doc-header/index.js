import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let DocsHeader = class DocsHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, desc } = this.props;
    return <View style={_styleSheet["doc-header"]}>
                <View style={_styleSheet["doc-header__title"]}>{title}</View>
                <View style={_styleSheet["doc-header__desc"]}>{desc}</View>
            </View>;
  }
};
export { DocsHeader as default };