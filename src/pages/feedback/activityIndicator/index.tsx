import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';

export default class FeedbackActivityIndicator extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Activity Indicator 活动指示器</View>
                <View className='panel__content'>
                    {/* 自定义尺寸 */}
                    <View className='example-item'>
                        <View className='subitem'>
                            <AtActivityIndicator size={20} ></AtActivityIndicator>
                        </View>
                        <View className='subitem'>
                            <AtActivityIndicator size={24} />
                        </View>
                        <View className='subitem'>
                            <AtActivityIndicator size={32} />
                        </View>
                    </View>

                    {/* 自定义颜色 */}
                    <View className='example-item'>
                        <View className='subitem'>
                            <AtActivityIndicator color='#13CE66' />
                        </View>
                        <View className='subitem'>
                            <AtActivityIndicator color='#FF4949' />
                        </View>
                        <View className='subitem'>
                            <AtActivityIndicator color='#C9C9C9' />
                        </View>
                    </View>

                    {/* 垂直水平居中 */}
                    <View className='example-item indicator-panel'>
                        <AtActivityIndicator mode='center' />
                    </View>
                    <View className='example-item indicator-panel'>
                        <AtActivityIndicator mode='center' content='Loading...' />
                    </View>
                </View>
            </View>
        )
    }

}