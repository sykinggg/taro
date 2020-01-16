import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View, Text } from "@tarojs/components-rn";
import { AtButton, AtIcon, AtFab } from 'taro-ui';
import DocsHeader from "../../components/doc-header/index";
import indexStyleSheet from "./index_styles";
import ToHome from "../../components/to-home/index";
var _styleSheet = indexStyleSheet;
let BaseComponent = class BaseComponent extends Taro.Component {
  constructor(props) {
    super(props);
    this.config = {
      navigationBarTitleText: 'Taro UI base'
    };
    this.ionicArr = ['analytics', 'bell', 'blocked', 'bookmark', 'bullet-list'];
  }
  render() {
    return <View style={_styleSheet["page"]}>
                <ToHome />
                <DocsHeader title="基础" desc="1 个组件"></DocsHeader>
                <View style={_styleSheet["doc-body"]}>
                    <View style={_styleSheet["panel"]}>
                        <View style={_styleSheet["panel__title"]}>Button 按钮</View>

                        
                        <View style={_styleSheet["panel__content"]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>主操作</View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="primary">主操作按钮</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="primary" loading>Loading</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="primary" disabled>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        
                        <View style={_styleSheet["panel__content"]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>次要操作</View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="secondary">次要操作按钮</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="secondary" loading>Loading</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="secondary" disabled>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        
                        <View style={_styleSheet["panel__content"]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>普通操作</View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton>普通操作按钮</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton loading>Loading</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton disabled>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        
                        <View style={_styleSheet["panel__content"]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>小按钮</View>
                                <View style={_styleSheet["btn-item"]}>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="primary" size="small">按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="secondary" size="small">按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton size="small">按钮 s</AtButton>
                                    </View>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="primary" size="small" loading></AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="secondary" size="small" loading></AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton size="small" loading></AtButton>
                                    </View>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="primary" size="small" disabled>按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="secondary" size="small" disabled>按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton size="small" disabled>按钮</AtButton>
                                    </View>
                                </View>
                            </View>
                        </View>

                        
                        <View style={_styleSheet["panel__content"]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>圆角按钮</View>
                                <View style={_styleSheet["btn-item"]}>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="primary" size="small" circle>按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="secondary" size="small" circle>按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton size="small" circle>按钮</AtButton>
                                    </View>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="primary" size="small" loading circle></AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="secondary" size="small" loading circle></AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton size="small" loading circle></AtButton>
                                    </View>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="primary" size="small" disabled circle>按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton type="secondary" size="small" disabled circle>按钮</AtButton>
                                    </View>
                                    <View style={_styleSheet["subitem"]}>
                                        <AtButton size="small" disabled circle>按钮</AtButton>
                                    </View>
                                </View>
                            </View>
                        </View>

                        
                        <View style={[_styleSheet["panel__content"], _styleSheet["no-padding"]]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>通栏按钮</View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="primary" full>主操作按钮</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton type="secondary" full>次操作按钮</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton full>普通操作按钮</AtButton>
                                </View>
                                <View style={_styleSheet["btn-item"]}>
                                    <AtButton disabled full>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        
                        <View style={_styleSheet["panel__content"]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>图标</View>
                                <View style={_styleSheet["btn-item"]}>
                                    {this.ionicArr.map(item => {
                  return <AtIcon value={item} size="30" color="#F00"></AtIcon>;
                })}
                                </View>
                            </View>
                        </View>

                        
                        <View style={_styleSheet["panel__content"]}>
                            <View style={_styleSheet["example-item"]}>
                                <View style={_styleSheet["example-item__desc"]}>浮动按钮(默认不抽离文档流)</View>

                                <View style={_styleSheet["btn-item"]}>
                                    <AtFab>
                                        <Text style={[_styleSheet["at-fab__icon"], _styleSheet["at-icon"], _styleSheet["at-icon-menu"]]}></Text>
                                    </AtFab>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </View>;
  }
};
export { BaseComponent as default };