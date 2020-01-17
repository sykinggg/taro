import Taro from '@tarojs/taro';
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtSlider } from 'taro-ui'

export default class DataEntrySlider extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Slider 滑动条</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <View className='example-item__desc'>step=1</View>
                        <AtSlider step={1} value={50} activeColor='#EC585A'></AtSlider>
                    </View>
                </View>
            </View>
        )
    }

}