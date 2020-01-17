import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View, Text } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'

export default class FeedbackActionSheet extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isActionSheetOpened1: false,
            isActionSheetOpened2: false,
            isActionSheetOpened3: false,
        }
    }

    public handleActionSheetClick(type) {
        this.setState({
            [`isActionSheetOpened${type}`]: true
        })
    }

    public handleActionSheetClose(name) {
        this.setState({
            [`isActionSheetOpened${name}`]: false
        })
    }

    public showToast(name) {
        Taro.showToast({
            icon: 'none',
            title: name
        })
    }

    public handleActionSheetCancel = () => {
        this.showToast('点击了取消按钮')
    }

    public render() {
        return (
            <View>
                <View className='panel'>
                    <View className='panel__title'>ActionSheet 动作面板</View>
                    <View className='panel__content'>

                        {/* 无 Title */}
                        <View className='example-item'>
                            <View className='demo-btn' onClick={this.handleActionSheetClick.bind(this, 1)}>无标题 ActionSheet</View>
                        </View>

                        {/* 含标题 */}
                        <View className='example-item'>
                            <View className='demo-btn' onClick={this.handleActionSheetClick.bind(this, 2)}>含标题 ActionSheet</View>
                        </View>

                        {/* 自定义选项 */}
                        <View className='example-item'>
                            <View className='demo-btn' onClick={this.handleActionSheetClick.bind(this, 3)}>自定义选项 ActionSheet</View>
                        </View>

                    </View>
                </View>
                {/* s 底部弹出框 */}
                <AtActionSheet
                    cancelText='取消'
                    isOpened={this.state.isActionSheetOpened1}
                    onClose={this.handleActionSheetClose.bind(this, 1)}
                >
                    <AtActionSheetItem
                        onClick={this.showToast.bind(this, '点击了按钮一')}
                    >
                        按钮一
                    </AtActionSheetItem>
                    <AtActionSheetItem
                        onClick={this.showToast.bind(this, '点击了按钮二')}
                    >
                        按钮二
                </AtActionSheetItem>
                </AtActionSheet>

                <AtActionSheet
                    cancelText='取消'
                    isOpened={this.state.isActionSheetOpened2}
                    onClose={this.handleActionSheetClose.bind(this, 2)}
                    title='清除位置信息后， 别人将不能查看到你'
                >
                    <AtActionSheetItem
                        onClick={this.showToast.bind(this, '点击了按钮一')}
                    >
                        按钮一
                    </AtActionSheetItem>
                    <AtActionSheetItem
                        onClick={this.showToast.bind(this, '点击了按钮二')}
                    >
                        按钮二
                    </AtActionSheetItem>
                </AtActionSheet>

                <AtActionSheet
                    cancelText='取消'
                    isOpened={this.state.isActionSheetOpened3}
                    onCancel={this.handleActionSheetCancel}
                    onClose={this.handleActionSheetClose.bind(this, 3)}
                    title='清除位置信息后， 别人将不能查看到你'
                >
                    <AtActionSheetItem
                        onClick={this.showToast.bind(this, '点击了按钮一')}
                    >
                        按钮一
                    </AtActionSheetItem>
                    <AtActionSheetItem
                        onClick={this.showToast.bind(this, '点击了按钮二')}
                    >
                        按钮二
                    </AtActionSheetItem>
                    <AtActionSheetItem
                        onClick={this.showToast.bind(this, '成功清除位置')}
                    >
                        <Text className='danger' style='color: #FF4949;'>清除位置信息并退出</Text>
                    </AtActionSheetItem>
                </AtActionSheet>
                {/* e 底部弹出框 */}
            </View>
        )
    }
}