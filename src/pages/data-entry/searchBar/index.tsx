import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

export default class DataEntrySearchBar extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            searchbarValue: '',
        }
    }

    public handleSearchBarChange(stateName, value) {
        this.setState({
            [stateName]: value
        })
    }

    public onActionClick() {
        Taro.showToast({
            title: '开始搜索',
            icon: 'success',
            duration: 2000
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>SearchBar 搜索栏</View>
                <View className='panel__content no-padding'>
                    <View className='component-item'>
                        <AtSearchBar
                            value={this.state.searchbarValue}
                            onChange={this.handleSearchBarChange.bind(this, 'searchbarValue')}
                            onActionClick={this.onActionClick.bind(this)}
                        />
                    </View>
                </View>
            </View>
        )
    }

}