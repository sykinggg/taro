import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtNavBar } from 'taro-ui';

export default class NavigationNavBar extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>NavBar 导航栏</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <AtNavBar
                            title='NavBar 导航栏示例'
                            leftIconType='chevron-left'
                            rightFirstIconType='bullet-list'
                            rightSecondIconType='user'
                        />
                    </View>
                </View>
            </View>
        )
    }

}