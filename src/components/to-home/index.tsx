import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';

export default class ToHome extends Taro.Component {
    constructor(props: any) {
        super(props);
        this.goIndex = this.goIndex.bind(this);
    }

    public goIndex() {
        Taro.navigateTo({
            url: '/pages/index/index'
        })
    }

    public render() {
        return (
            <View className='panel__content no-padding'>
                <View className='example-item'>
                    <View className='btn-item'>
                        <AtButton type='primary' onClick={this.goIndex}>返回主页</AtButton>
                    </View>
                </View>
            </View>
        )
    }
}