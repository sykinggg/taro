import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Image } from "@tarojs/components-rn";
import logoImg from '../../assets/images/logo_taro.png';
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let Index = class Index extends Component {
  constructor(props) {
    super(props);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.gotoPanel = e => {
      const { id } = e.currentTarget.dataset;
      Taro.navigateTo({
        // url: `/pages/panel/index?id=${id.toLowerCase()}`
        url: `/pages/${id.toLowerCase()}/index`
      });
    };

    this.gotoPanel = this.gotoPanel.bind(this);
    this.state = {
      list: [{
        id: 'Basic',
        title: '基础',
        content: '普通按钮、图标、浮动按钮、组件'
      }, {
        id: 'View',
        title: '视图',
        content: '通告栏等8个组件'
      }, {
        id: 'Feedback',
        title: '操作反馈',
        content: '对话框等7个组件'
      }, {
        id: 'Data-entry',
        title: '数据录入',
        content: '输入框等13个组件'
      }, {
        id: 'Layout',
        title: '布局',
        content: '列表等6个组件'
      }, {
        id: 'Navigation',
        title: '导航',
        content: '标签栏等7个组件'
      }, {
        id: 'Advanced',
        title: '高阶',
        content: '日历组件'
      }]
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  onShareAppMessage() {
    return {
      title: 'Taro UI',
      path: '/pages/index/index',
      imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
    };
  }
  render() {
    const { list } = this.state;
    return <View style={[_styleSheet["page"], _styleSheet["page-index"]]}>
                <View style={_styleSheet["logo"]}>
                    <Image src={logoImg} mode="widthFix" style={_styleSheet["img"]} />
                </View>
                <View style={_styleSheet["page-title"]}>Taro UI</View>
                <View style={_styleSheet["module-list"]}>
                    {list.map((item, index) => <View key={item.id} data-id={item.id} data-name={item.title} data-list={item.subpages} onClick={this.gotoPanel} style={_styleSheet["module-list__item"]}>
                            <View style={_styleSheet["module-list__item-title"]}>{item.title}</View>
                            <View style={_styleSheet["module-list__item-content"]}>{item.content}</View>
                        </View>)}
                </View>
            </View>;
  }
};
Index.config = {
  navigationBarTitleText: '首页'
};
export { Index as default };