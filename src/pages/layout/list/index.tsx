import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'

export default class LayoutList extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>List</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <AtList>
                            <AtListItem title='标题文字' />
                            <AtListItem title='标题文字' note='描述信息' arrow='right' />
                            <AtListItem
                                arrow='right'
                                note='描述信息'
                                title='标题文字标题文字标题文字标题文字标题文字'
                                extraText='详细信息详细信息详细信息详细信息'
                            />
                            <AtListItem title='禁用状态' disabled extraText='详细信息' />
                        </AtList>
                    </View>
                </View>
            </View>
        )
    }

}