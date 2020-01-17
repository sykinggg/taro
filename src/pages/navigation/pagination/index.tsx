import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtPagination } from 'taro-ui'

export default class NavigationPagination extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Pagination 分页器</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <View className='example-item__desc'>基础</View>
                        <AtPagination total={50} pageSize={10} current={1}></AtPagination>
                    </View>

                    <View className='example-item'>
                        <View className='example-item__desc'>图标</View>
                        <AtPagination icon total={50} pageSize={10} current={1}></AtPagination>
                    </View>
                </View>
            </View>
        )
    }

}