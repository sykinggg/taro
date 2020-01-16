import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtCard } from 'taro-ui';

export default class LayoutCard extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Card 卡片</View>
                <View className='panel__content no-padding'>
                    <View className='example-item example-item--card'>
                        <View className='example-item__desc'>基础卡片</View>
                        <AtCard title='这是个标题'>
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>

                    <View className='example-item example-item--card'>
                        <View className='example-item__desc'>带图标的卡片</View>
                        {/* icon={{ value: 'tags', color: '#77a1fd' }} */}
                        <AtCard
                            title='这是个标题'
                        >
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>

                    <View className='example-item example-item--card'>
                        <View className='example-item__desc'>完整的卡片</View>
                        <AtCard
                            note='小Tips'
                            extra='额外信息'
                            title='这是个标题'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        >
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>

                    <View className='example-item example-item--card'>
                        <View className='example-item__desc'>通栏卡片</View>
                        <AtCard
                            isFull
                            note='小Tips'
                            extra='额外信息'
                            title='这是个标题'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        >
                            这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能
                            这也是内容区 可以随意定义功能
                        </AtCard>
                    </View>
                </View>
            </View>
        )
    }

}