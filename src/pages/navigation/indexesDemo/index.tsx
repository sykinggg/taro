import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import NavigatorBtn from '../../../components/navigator-btn';

export default class NavigationIndexesDemo extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Indexes 索引选择器</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <NavigatorBtn parent='navigation' name='indexes'></NavigatorBtn>
                    </View>
                </View>
            </View>
        )
    }

}