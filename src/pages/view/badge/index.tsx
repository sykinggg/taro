import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtBadge, AtButton } from 'taro-ui';

export default class ViewBadge extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const dot = '···'
        return (
            <View className='panel'>
                <View className='panel__title'>Badge 徽标</View>
                <View className='panel__content'>
                    {/* 数字 + 小红点 */}
                    <View className='example-item'>
                        <View className='subitem subitem--badge'>
                            <AtBadge value='10' maxValue={99}>
                                <AtButton size='small' circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View className='subitem subitem--badge'>
                            <AtBadge value='100' maxValue={99}>
                                <AtButton size='small'>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View className='subitem subitem--badge'>
                            <AtBadge dot>
                                <AtButton size='small' circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View className='subitem subitem--badge'>
                            <AtBadge dot>
                                <AtButton size='small'>按钮</AtButton>
                            </AtBadge>
                        </View>
                    </View>

                    {/* 文本 + 省略号 */}
                    <View className='example-item'>
                        <View className='subitem subitem--badge'>
                            <AtBadge value='NEW'>
                                <AtButton size='small' circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View className='subitem subitem--badge'>
                            <AtBadge value='NEW'>
                                <AtButton size='small'>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View className='subitem subitem--badge'>
                            <AtBadge value={dot}>
                                <AtButton size='small' circle>按钮</AtButton>
                            </AtBadge>
                        </View>
                        <View className='subitem subitem--badge'>
                            <AtBadge value={dot}>
                                <AtButton size='small'>按钮</AtButton>
                            </AtBadge>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}