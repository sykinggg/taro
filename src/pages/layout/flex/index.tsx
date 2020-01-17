import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'

export default class LayoutFlex extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Flex 弹性布局</View>
                <View className='panel__content'>
                    <View className='example-item flex-page'>
                        <View className='example-item__desc'>基本案例</View>
                        <View className='at-row'>
                            <View className='at-col'>A</View>
                            <View className='at-col'>B</View>
                            <View className='at-col'>C</View>
                        </View>
                    </View>

                    <View className='example-item flex-page'>
                        <View className='example-item__desc'>定义长度</View>
                        <View className='at-row'>
                            <View className='at-col at-col-3'>A</View>
                            <View className='at-col at-col-6'>B</View>
                            <View className='at-col at-col-2'>C</View>
                            <View className='at-col at-col-1'>D</View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}