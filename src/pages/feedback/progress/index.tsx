import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtProgress } from 'taro-ui'

export default class FeedbackProgress extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Progress 进度条</View>
                {/* 基础进度条 */}
                <View className='panel__content panel__content--progress'>
                    <View className='example-item__desc'>基础进度条</View>
                    <View className='example-item'>
                        <AtProgress percent={25} />
                    </View>
                    <View className='example-item'>
                        <AtProgress percent={50} />
                    </View>
                    <View className='example-item'>
                        <AtProgress percent={75} />
                    </View>
                </View>

                {/* 隐藏进度文案 */}
                <View className='panel__content panel__content--progress'>
                    <View className='example-item__desc'>隐藏进度文案</View>
                    <View className='example-item'>
                        <AtProgress percent={25} isHidePercent />
                    </View>
                    <View className='example-item'>
                        <AtProgress percent={75} isHidePercent />
                    </View>
                </View>

                {/* 不同的状态 */}
                <View className='panel__content panel__content--progress'>
                    <View className='example-item__desc'>不同的状态</View>
                    <View className='example-item'>
                        <View className='example-item__desc'>暂停</View>
                        <AtProgress percent={25} />
                    </View>
                    <View className='example-item'>
                        <View className='example-item__desc'>进行中</View>
                        <AtProgress percent={50} status='progress' />
                    </View>
                    <View className='example-item'>
                        <View className='example-item__desc'>错误</View>
                        <AtProgress percent={75} status='error' />
                    </View>
                    <View className='example-item'>
                        <View className='example-item__desc'>已完成</View>
                        <AtProgress percent={100} status='success' />
                    </View>
                </View>
            </View>
        )
    }

}