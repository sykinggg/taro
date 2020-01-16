import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtCountdown } from 'taro-ui';

export default class ViewCountdown extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Countdown 倒计时</View>
                <View className='panel__content'>
                    {/* 一般用法 */}
                    <View className='example-item'>
                        <AtCountdown minutes={5} seconds={10} />
                    </View>
                    <View className='example-item'>
                        <AtCountdown isShowDay hours={1} minutes={5} seconds={10} />
                    </View>

                    {/* 自定义格式 */}
                    <View className='example-item'>
                        <AtCountdown
                            format={{ hours: ':', minutes: ':', seconds: '' }}
                            minutes={5}
                            seconds={10}
                        />
                    </View>

                    {/* 卡片式 */}
                    <View className='example-item'>
                        <AtCountdown
                            isCard
                            isShowDay
                            day={1}
                            minutes={5}
                            seconds={10}
                            format={{ day: '天', hours: ':', minutes: ':', seconds: '' }}
                        />
                    </View>
                </View>
            </View>
        )
    }

}