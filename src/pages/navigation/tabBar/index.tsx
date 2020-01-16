import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';

export default class NavigationBTabBar extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            tabbarCurrent: 0,
        }
    }

    public handleTabBarClick(value) {
        this.setState({
            tabbarCurrent: value
        })
    }

    public render() {
        const tabbarList = [{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: 99 }]
        return (
            <View className='panel'>
                <View className='panel__title'>TabBar 标签栏</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <AtTabBar tabList={tabbarList} onClick={this.handleTabBarClick.bind(this)} current={this.state.tabbarCurrent} />
                    </View>
                </View>
            </View>
        )
    }

}