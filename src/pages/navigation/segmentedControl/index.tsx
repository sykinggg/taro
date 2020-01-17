import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'

export default class NavigationSegmentedControl extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            segmentedValue: 0,
        }
    }

    public handleSegmenentedClick(value) {
        this.setState({
            segmentedValue: value
        })
    }

    public render() {
        const { segmentedValue } = this.state
        const segmentedList = ['标签页1', '标签页2', '标签页3']
        return (
            <View className='panel'>
                <View className='panel__title'>SegmentedControl 分段器</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <AtSegmentedControl onClick={this.handleSegmenentedClick.bind(this)} current={segmentedValue} values={segmentedList} />
                        <View className='tab-content'>标签 {segmentedValue + 1} 的内容</View>
                    </View>
                </View>
            </View>
        )
    }

}