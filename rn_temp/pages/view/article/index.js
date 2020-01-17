import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View, Image } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let Article = class Article extends Taro.Component {
  constructor() {
    super(...arguments);
    this.config = {
      navigationBarTitleText: 'Article'
    };
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <View style={_styleSheet["doc-body"]}>
                    <View style={_styleSheet["at-article"]}>
                        <View style={_styleSheet["at-article__h1"]}>这是一级标题这是一级标题</View>
                        <View style={_styleSheet["at-article__info"]}>2017-05-07   这是作者</View>
                        <View style={_styleSheet["at-article__content"]}>
                            <View style={_styleSheet["at-article__section"]}>
                                <View style={_styleSheet["at-article__h2"]}>这是二级标题</View>
                                <View style={_styleSheet["at-article__h3"]}>这是三级标题</View>
                                <View style={_styleSheet["at-article__p"]}>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ</View>
                                <View style={_styleSheet["at-article__p"]}>这是文本段落。这是文本段落。</View>
                                <Image src="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg" mode="widthFix" style={_styleSheet["at-article__img"]} />
                            </View>

                            <View style={_styleSheet["at-article__section"]}>
                                <View style={_styleSheet["at-article__h2"]}>这是二级标题</View>
                                <View style={_styleSheet["at-article__h3"]}>这是三级标题</View>
                                <View style={_styleSheet["at-article__p"]}>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ</View>
                                <Image src="https://img30.360buyimg.com/sku/jfs/t19660/324/841553494/117886/ad2742c1/5aab8d20Ne56ae3bf.jpg" mode="widthFix" style={_styleSheet["at-article__img"]} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>;
  }
};
export { Article as default };