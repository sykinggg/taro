import Taro from '@tarojs/taro-rn';
import React from 'react';

import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";
import { AtLoadMore } from 'taro-ui';
var _styleSheet = indexStyleSheet;
let ViewLoadMore = class ViewLoadMore extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMoreStatus: 'more'
    };
  }
  handleLoadMoreClick() {
    this.setState({
      loadMoreStatus: 'loading'
    });
    setTimeout(() => {
      this.setState({
        loadMoreStatus: 'noMore'
      });
    }, 2000);
  }
  render() {
    const { loadMoreStatus } = this.state;
    return <View style={_styleSheet["panel"]}>
                <View style={_styleSheet["panel__title"]}>Load More 页面提示</View>
                <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                    
                    <View style={_styleSheet["example-item"]}>
                        <AtLoadMore onClick={this.handleLoadMoreClick.bind(this)} status={loadMoreStatus} />
                    </View>
                </View>
            </View>;
  }
};
export { ViewLoadMore as default };