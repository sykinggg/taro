import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtForm, AtInput } from 'taro-ui'

export default class DataEntryInput extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
        }
    }

    public handleInput(stateName, value) {
        this.setState({
            [stateName]: value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Input 输入框</View>
                <View className='panel__content no-padding'>
                    <View className='component-item'>
                        <AtForm>
                            <AtInput name='inputValue1' title='标准五个字' type='text' placeholder='标准五个字' value={this.state.inputValue1} onChange={this.handleInput.bind(this, 'inputValue1')} />
                            <AtInput name='inputValue2' title='标题实在特别长就换行' placeholder='其他列保持正常间距' value={this.state.inputValue2} onChange={this.handleInput.bind(this, 'inputValue2')} />
                            <AtInput name='inputValue3' border={false} placeholder='无标题' value={this.state.inputValue3} onChange={this.handleInput.bind(this, 'inputValue3')} />
                        </AtForm>
                    </View>
                </View>
            </View>
        )
    }

}