import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtCheckbox } from 'taro-ui';

export default class DataEntryCheckbox extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            checkboxOption: [
                { value: 'list1', label: 'iPhone X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
                { value: 'list2', label: 'HUAWEI P20' },
                { value: 'list3', label: 'OPPO Find X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true },
                { value: 'list4', label: 'vivo NEX', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true }
            ],
            checkedList: ['list1', 'list4'],

        }
    }

    public handleCheckboxChange(value) {
        this.setState({
            checkedList: value
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Checkbox 复选框</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <View className='checkbox-container'>
                            <AtCheckbox
                                options={this.state.checkboxOption}
                                selectedList={this.state.checkedList}
                                onChange={this.handleCheckboxChange.bind(this)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}