import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtIndexes } from 'taro-ui';
const mockData = [{
    title: 'A',
    key: 'A',
    items: [
        {
            'name': '阿坝'
            // 此处可加其他业务字段
        },
        {
            'name': '阿拉善'
        }]
},
{
    title: 'B',
    key: 'B',
    items: [
        {
            'name': '北京'
        },
        {
            'name': '保定'
        }]
}
]

export default class NavigationIndexes extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public config = {
        navigationBarTitleText: 'Taro UI'
    }
    public onClick(item) {
        console.log(item)
    }

    public render() {
        return (
            <View className='page' style='height: 100vh;'>
                {/* 基础用法 */}
                <View style='height: 100%;'>
                    <AtIndexes
                        list={mockData}
                        topKey='B'
                        onClick={this.onClick.bind(this)}
                    >
                        <View className='custom-area'>用户自定义内容</View>
                    </AtIndexes>
                </View>
            </View>
        )
    }

}