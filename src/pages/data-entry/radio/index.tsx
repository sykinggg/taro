import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtRadio } from 'taro-ui';

export default class DataEntryRadio extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            radioOptions: [
                { label: '单选项一', value: 'option1', desc: '单选项描述' },
                { label: '单选项二', value: 'option2' },
                { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
            ],
            radioValue: 'option1',
        }
    }

    public handleRadioChange(value) {
        this.setState({
            radioValue: value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Radio 单选框</View>
                <View className='panel__content no-padding'>
                    <View className='radio-container'>
                        <AtRadio options={this.state.radioOptions} value={this.state.radioValue} onClick={this.handleRadioChange.bind(this)} />
                    </View>
                </View>
            </View>
        )
    }

}