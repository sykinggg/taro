import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import pagesNavigationIndexesIndex from './pages/navigation/indexes/index';
import pagesNavigationIndex from './pages/navigation/index';
import pagesLayoutIndex from './pages/layout/index';
import pagesDataEntryIndex from './pages/data-entry/index';
import pagesFeedbackIndex from './pages/feedback/index';
import pagesViewArticleIndex from './pages/view/article/index';
import pagesViewIndex from './pages/view/index';
import pagesBasicIndex from './pages/basic/index';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";

import appStyleSheet from "./app_styles";
var _styleSheet = appStyleSheet;

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
let App = class App extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TCRNProvider>
                  <RootStack />
                </TCRNProvider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

};
App.config = {
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/basic/index', pagesBasicIndex], ['pages/view/index', pagesViewIndex], ['pages/view/article/index', pagesViewArticleIndex], ['pages/feedback/index', pagesFeedbackIndex], ['pages/data-entry/index', pagesDataEntryIndex], ['pages/layout/index', pagesLayoutIndex], ['pages/navigation/index', pagesNavigationIndex], ['pages/navigation/indexes/index', pagesNavigationIndexesIndex]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;