import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import DocsHeader from '../../components/doc-header';
import ToHome from '../../components/to-home';
import DataEntryRadio from './radio';
import DataEntryCheckbox from './checkbox';
import DataEntrySwitch from './switch';
import DataEntryInput from './input';
import DataEntryTextarea from './textarea';
import DataEntrySearchBar from './searchBar';
import DataEntryInputNumber from './inputNumber';
import DataEntryRange from './range';
import DataEntrySlider from './slider';
import DataEntryRate from './rate';
import DataEntryImagePicker from './imagePicker';
import DataEntryPicker from './picker';
import DataEntryPickerView from './pickerView';

export default class DataEntry extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <View className='page'>
                <ToHome />
                <DocsHeader title='数据录入' desc='12 个组件'></DocsHeader>

                <View className='doc-body'>

                    {/* Radio */}
                    <DataEntryRadio />

                    {/* Checkbox */}
                    <DataEntryCheckbox />

                    {/* Switch */}
                    <DataEntrySwitch />

                    {/* Input */}
                    <DataEntryInput />

                    {/* Textarea */}
                    <DataEntryTextarea />

                    {/* SearchBar */}
                    <DataEntrySearchBar />

                    {/* InputNumber */}
                    <DataEntryInputNumber />

                    {/* Range */}
                    <DataEntryRange />

                    {/* Slider */}
                    <DataEntrySlider />

                    {/* Rate */}
                    <DataEntryRate />

                    {/* ImagePicker */}
                    <DataEntryImagePicker />

                    {/* Picker */}
                    <DataEntryPicker />

                    {/* PickerView */}
                    <DataEntryPickerView />
                </View>
            </View>
        )
    }
    
}