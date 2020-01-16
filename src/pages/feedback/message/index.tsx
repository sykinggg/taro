import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtMessage } from 'taro-ui';

export default class FeedbackMessage extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public handleMessageClick(type) {
        Taro.atMessage({
            'message': '消息通知',
            'type': type,
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Message 消息通知</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        {/* 普通提示 */}
                        <View className='subitem'>
                            <View className='demo-btn' onClick={this.handleMessageClick.bind(this, '')}>普通提示</View>
                        </View>
                        {/* 成功提示 */}
                        <View className='subitem'>
                            <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'success')}>成功提示</View>
                        </View>
                        {/* 错误提示 */}
                        <View className='subitem'>
                            <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'error')}>错误提示</View>
                        </View>
                    </View>
                    <View className='example-item'>
                        {/* 警告提示 */}
                        <View className='subitem'>
                            <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'warning')}>警告提示</View>
                        </View>
                        {/* 提示消息 */}
                        <View className='subitem'>
                            <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'info')}>提示消息</View>
                        </View>
                    </View>
                </View>

                {/* message 消息通知占位符 */}
                <AtMessage />
            </View>
        )
    }

}