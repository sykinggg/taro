import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtToast } from 'taro-ui';

const INIT_STATE = {
    image: '',
    icon: '',
    text: '',
    status: '',
    duration: 3000,
    hasMask: false,
    isOpened: false
}
export default class FeedbackToast extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ...INIT_STATE,
        }
    }

    // 轻提示
    public handleToastClick(text, icon, image, hasMask, status) {
        if (this.state.isOpened) {
            return this.setState(INIT_STATE)
        }
        const state = Object.assign(
            { ...INIT_STATE, isOpened: true },
            { text, icon, image, hasMask, status }
        )

        this.setState(state)
    }

    public handleToastClose = () => {
        this.setState({
            isOpened: false
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Toast 轻提示</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleToastClick.bind(this, '文本内容', '', '', false, '')}>文本 Toast</View>
                    </View>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleToastClick.bind(this, '文本内容', 'analytics', '', false, '')}>文本 + ICON</View>
                    </View>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleToastClick.bind(this, '凹凸实验室', '', 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png', false, '')}>自定义图片 Toast</View>
                    </View>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleToastClick.bind(this, '文本内透明遮罩层的作用在于不可点击下面的元素容', '', '', true, '')}>添加遮罩层 Toast</View>
                    </View>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleToastClick.bind(this, '错误提示', '', '', true, 'error')}>错误提示 Toast</View>
                    </View>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleToastClick.bind(this, '正确提示', '', '', true, 'success')}>正确提示 Toast</View>
                    </View>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleToastClick.bind(this, '正在加载…', '', '', true, 'loading')}>加载中 Toast</View>
                    </View>
                </View>

                {/* 轻提示 */}
                <AtToast
                    icon={this.state.icon}
                    text={this.state.text}
                    image={this.state.image}
                    status={this.state.status}
                    hasMask={this.state.hasMask}
                    isOpened={this.state.isOpened}
                    duration={this.state.duration}
                    onClose={this.handleToastClose}
                />
            </View>
        )
    }

}