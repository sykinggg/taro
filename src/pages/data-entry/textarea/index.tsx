import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtTextarea } from 'taro-ui';

export default class DataEntryTextarea extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            textareaValue: '',
        }
    }

    handleTextareaChange(stateName, e) {
        this.setState({
            [stateName]: e.target.value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Textarea 多行文本框</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <AtTextarea
                            value={this.state.textareaValue}
                            onChange={this.handleTextareaChange.bind(this, 'textareaValue')}
                            maxLength={200}
                            placeholder='你的问题是...'
                        />
                    </View>
                </View>
            </View>
        )
    }

}