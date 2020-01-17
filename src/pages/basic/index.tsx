import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtIcon, AtFab } from 'taro-ui'
import DocsHeader from '../../components/doc-header'

import './index.scss'
import './index.rn.scss'
import ToHome from '../../components/to-home'

export default class BaseComponent extends Taro.Component {
    public config = {
        navigationBarTitleText: 'Taro UI base'
    }
    public ionicArr: string[] = [
        'analytics',
        'bell',
        'blocked',
        'bookmark',
        'bullet-list'
    ]
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='page'>
                <ToHome />
                <DocsHeader title='基础' desc='1 个组件'></DocsHeader>
                <View className='doc-body'>
                    <View className='panel'>
                        <View className='panel__title'>Button 按钮</View>

                        {/* 主操作 */}
                        <View className='panel__content'>
                            <View className='example-item'>
                                <View className='example-item__desc'>主操作</View>
                                <View className='btn-item'>
                                    <AtButton type='primary'>主操作按钮</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton type='primary' loading>Loading</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton type='primary' disabled>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        {/* 次要操作 */}
                        <View className='panel__content'>
                            <View className='example-item'>
                                <View className='example-item__desc'>次要操作</View>
                                <View className='btn-item'>
                                    <AtButton type='secondary'>次要操作按钮</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton type='secondary' loading>Loading</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton type='secondary' disabled>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        {/* 普通操作 */}
                        <View className='panel__content'>
                            <View className='example-item'>
                                <View className='example-item__desc'>普通操作</View>
                                <View className='btn-item'>
                                    <AtButton>普通操作按钮</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton loading>Loading</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton disabled>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        {/* 小按钮 */}
                        <View className='panel__content'>
                            <View className='example-item'>
                                <View className='example-item__desc'>小按钮</View>
                                <View className='btn-item'>
                                    <View className='subitem'>
                                        <AtButton type='primary' size='small'>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton type='secondary' size='small'>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton size='small'>按钮 s</AtButton>
                                    </View>
                                </View>
                                <View className='btn-item'>
                                    <View className='subitem'>
                                        <AtButton type='primary' size='small' loading></AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton type='secondary' size='small' loading></AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton size='small' loading></AtButton>
                                    </View>
                                </View>
                                <View className='btn-item'>
                                    <View className='subitem'>
                                        <AtButton type='primary' size='small' disabled>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton type='secondary' size='small' disabled>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton size='small' disabled>按钮</AtButton>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* 圆角按钮 */}
                        <View className='panel__content'>
                            <View className='example-item'>
                                <View className='example-item__desc'>圆角按钮</View>
                                <View className='btn-item'>
                                    <View className='subitem'>
                                        <AtButton type='primary' size='small' circle>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton type='secondary' size='small' circle>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton size='small' circle>按钮</AtButton>
                                    </View>
                                </View>
                                <View className='btn-item'>
                                    <View className='subitem'>
                                        <AtButton type='primary' size='small' loading circle></AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton type='secondary' size='small' loading circle></AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton size='small' loading circle></AtButton>
                                    </View>
                                </View>
                                <View className='btn-item'>
                                    <View className='subitem'>
                                        <AtButton type='primary' size='small' disabled circle>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton type='secondary' size='small' disabled circle>按钮</AtButton>
                                    </View>
                                    <View className='subitem'>
                                        <AtButton size='small' disabled circle>按钮</AtButton>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* 通栏按钮 */}
                        <View className='panel__content no-padding'>
                            <View className='example-item'>
                                <View className='example-item__desc'>通栏按钮</View>
                                <View className='btn-item'>
                                    <AtButton type='primary' full>主操作按钮</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton type='secondary' full>次操作按钮</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton full>普通操作按钮</AtButton>
                                </View>
                                <View className='btn-item'>
                                    <AtButton disabled full>不可操作</AtButton>
                                </View>
                            </View>
                        </View>

                        {/* 图标 */}
                        <View className='panel__content'>
                            <View className='example-item'>
                                <View className='example-item__desc'>图标</View>
                                <View className='btn-item'>
                                    {this.ionicArr.map((item) => {
                                        return (<AtIcon value={item} size='30' color='#F00'></AtIcon>)
                                    })}
                                </View>
                            </View>
                        </View>

                        {/* 浮动按钮 */}
                        <View className='panel__content'>
                            <View className='example-item'>
                                <View className='example-item__desc'>浮动按钮(默认不抽离文档流)</View>

                                <View className='btn-item'>
                                    <AtFab>
                                        <Text className='at-fab__icon at-icon at-icon-menu'></Text>
                                    </AtFab>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

}