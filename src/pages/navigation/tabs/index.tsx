import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

export default class NavigationTabs extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            tabsListValue: 0,
            tabsListValue2: 0,
        }
    }

    public handleTabsClick(stateName, value) {
        this.setState({
            [stateName]: value
        })
    }

    public render() {
        const { tabsListValue, tabsListValue2 } = this.state
        const tabList = [
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' },
            { title: '标签页4' },
            { title: '标签页5' },
            { title: '标签页6' }
        ]
        return (
            <View className='panel'>
                <View className='panel__title'>Tabs 标签页</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <View className='example-item__desc'>水平标签页</View>
                        <AtTabs swipeable={false} scroll current={tabsListValue} tabList={tabList} onClick={this.handleTabsClick.bind(this, 'tabsListValue')}>
                            <AtTabsPane current={tabsListValue} index={0}>
                                <View className='tab-content'>标签页一的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={1}>
                                <View className='tab-content'>标签页二的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={2}>
                                <View className='tab-content'>标签页三的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={3}>
                                <View className='tab-content'>标签页四的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={4}>
                                <View className='tab-content'>标签页五的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={tabsListValue} index={5}>
                                <View className='tab-content'>标签页六的内容</View>
                            </AtTabsPane>
                        </AtTabs>
                    </View>

                    <View className='example-item'>
                        <View className='example-item__desc'>垂直标签页</View>
                        <AtTabs height='200px' scroll tabDirection='vertical' current={tabsListValue2} tabList={tabList} onClick={this.handleTabsClick.bind(this, 'tabsListValue2')}>
                            <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={0}>
                                <View className='tab-content--vertical'>标签页一的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={1}>
                                <View className='tab-content--vertical'>标签页二的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={2}>
                                <View className='tab-content--vertical'>标签页三的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={3}>
                                <View className='tab-content--vertical'>标签页四的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={4}>
                                <View className='tab-content--vertical'>标签页五的内容</View>
                            </AtTabsPane>
                            <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={5}>
                                <View className='tab-content--vertical'>标签页六的内容</View>
                            </AtTabsPane>
                        </AtTabs>
                    </View>
                </View>
            </View>
        )
    }

}