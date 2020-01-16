import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtAccordion, AtList, AtListItem } from 'taro-ui';

export default class LayoutAccordion extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Accordion 手风琴</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <AtAccordion title='展开列表'>
                            <AtList hasBorder={false}>
                                <AtListItem
                                    title='标题文字'
                                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                                />
                                <AtListItem
                                    title='标题文字'
                                    note='描述信息'
                                    thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                                />
                            </AtList>
                        </AtAccordion>
                    </View>
                </View>
            </View>
        )
    }

}