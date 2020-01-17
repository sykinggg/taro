import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View, Picker } from '@tarojs/components';

export default class DataEntryPicker extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            selector: ['中国', '美国', '巴西', '日本'],
            selectorValue: 0,
        }
    }

    public handlePickerChange(e) {
        this.setState({
            selectorValue: e.detail.value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Picker 选择器</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <Picker mode='selector' range={this.state.selector} value={this.state.selectorValue} onChange={this.handlePickerChange.bind(this)}>
                            <View className='demo-list-item'>
                                <View className='demo-list-item__label'>国家地区</View>
                                <View className='demo-list-item__value'>{this.state.selector[this.state.selectorValue]}</View>
                            </View>
                        </Picker>
                    </View>
                </View>
            </View>
        )
    }

}