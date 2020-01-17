import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtInputNumber } from 'taro-ui'

export default class DataEntryInputNumber extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputNumber1: 1,
            inputNumber2: 1,
            inputNumber3: 1,
        }
    }

    public handleNumberChange(stateName, value) {
        this.setState({
            [stateName]: value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>InputNumber 数字输入框</View>
                <View className='panel__content'>
                    {/* 基本用法 */}
                    <View className='example-item'>
                        <View className='example-item__desc'>min=0, max=10, step=1</View>
                        <AtInputNumber
                            type='number'
                            min={0}
                            max={10}
                            step={1}
                            value={this.state.inputNumber1}
                            onChange={this.handleNumberChange.bind(this, 'inputNumber1')}
                        />
                    </View>

                    {/* 禁用 */}
                    <View className='example-item'>
                        <View className='example-item__desc'>禁用</View>
                        <AtInputNumber
                            type='number'
                            disabled
                            min={0}
                            max={10}
                            step={1}
                            value={this.state.inputNumber2}
                            onChange={this.handleNumberChange.bind(this, 'inputNumber2')}
                        />
                    </View>

                    {/* 大尺寸 */}
                    <View className='example-item'>
                        <View className='example-item__desc'>大尺寸</View>
                        <AtInputNumber
                            type='number'
                            size='lg'
                            min={0}
                            max={10}
                            step={1}
                            value={this.state.inputNumber3}
                            onChange={this.handleNumberChange.bind(this, 'inputNumber3')}
                        />
                    </View>
                </View>
            </View>
        )
    }

}