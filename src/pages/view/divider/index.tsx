import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtDivider } from 'taro-ui';

export default class ViewDivider extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Divider 分隔线</View>
                <View className='panel__content'>
                    {/* 一般用法 */}
                    <View className='example-item'>
                        <AtDivider content='没有更多了' />
                    </View>
                </View>
            </View>
        )
    }

}