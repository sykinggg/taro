import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtSwipeAction } from 'taro-ui';

const OPTIONS = [
    {
        text: '删除',
        style: {
            color: '#333',
            backgroundColor: '#F7F7F7'
        }
    },
    {
        text: '确认',
        style: {
            backgroundColor: '#E93B3D'
        }
    }
]
export default class FeedbackSwipeAction extends Taro.Component {
    constructor(props: any) {
        super(props);
        this.handleSwipeClick = this.handleSwipeClick.bind(this);
    }

    // 滑块
    public handleSwipeClick(e) {
        console.log(e);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>SwipeAction 滑动操作</View>
                <View className='panel__content'>
                    <View className='example-item example-item--border'>
                        <AtSwipeAction onClick={this.handleSwipeClick} options={OPTIONS}>
                            <View className='normal'>AtSwipeAction 一般使用场景</View>
                        </AtSwipeAction>
                    </View>
                </View>
            </View>
        )
    }

}