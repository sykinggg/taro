import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtRate } from 'taro-ui'

export default class DataEntryRate extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            rateValue: 3,
        }
    }

    public handleRateChange(stateName, value) {
        this.setState({
            [stateName]: value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Rate 评分</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <AtRate value={this.state.rateValue} onChange={this.handleRateChange.bind(this, 'rateValue')} />
                    </View>
                </View>
            </View>
        )
    }

}