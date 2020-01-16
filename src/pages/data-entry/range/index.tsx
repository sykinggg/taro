import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtRange } from 'taro-ui';

export default class DataEntryRange extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            rangeValue: [20, 60],
        }
    }

    public handleRangeChange(stateName, value) {
        this.setState({
            [stateName]: value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Range 范围选择器</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <View className='example-item__desc'>
                            数值范围：{this.state.rangeValue[0]}~{this.state.rangeValue[1]}
                        </View>
                        <AtRange
                            min={0}
                            max={100}
                            value={this.state.rangeValue}
                            onChange={this.handleRangeChange.bind(this, 'rangeValue')}
                        />
                    </View>
                </View>
            </View>
        )
    }

}