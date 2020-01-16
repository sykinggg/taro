import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtDrawer } from 'taro-ui';

export default class NavigationDrawer extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            leftDrawerShow: false,
        }
    }

    public leftDrawerClick() {
        this.setState({
            leftDrawerShow: !this.state.leftDrawerShow,
        })
    }

    public onDrawerClose() {
        this.setState({
            leftDrawerShow: !this.state.leftDrawerShow,
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Drawer 抽屉</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.leftDrawerClick.bind(this)}>左边滑出</View>
                        <AtDrawer show={this.state.leftDrawerShow} mask onClose={this.onDrawerClose.bind(this)} items={['菜单1', '菜单2']}>
                        </AtDrawer>
                    </View>
                </View>
            </View>
        )
    }

}