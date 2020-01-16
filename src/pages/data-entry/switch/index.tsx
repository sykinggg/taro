import Taro from '@tarojs/taro';
import './index.scss'
import { View } from '@tarojs/components';
import { AtForm, AtSwitch } from 'taro-ui';

export default class DataEntrySwitch extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            switchValue: true,
        }
        this.handleSwitchChange = this.handleSwitchChange.bind(this)
    }

    public handleSwitchChange(value) {
        console.log(value)
        this.setState({
            switchValue: value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Switch 开关</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <AtForm>
                            <AtSwitch title='开启中' color='#EC585A' checked={this.state.switchValue} onChange={this.handleSwitchChange} />
                            <AtSwitch title='已禁止' disabled onChange={this.handleSwitchChange} />
                            <AtSwitch title='已关闭' color='#EC585A' border={false} />
                        </AtForm>
                    </View>
                </View>
            </View>
        )
    }

}