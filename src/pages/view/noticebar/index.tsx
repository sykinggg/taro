import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtNoticebar } from 'taro-ui';

export default class ViewNoticebar extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Noticebar 通告栏</View>
                <View className='panel__content'>
                    {/* 一般用法 */}
                    <View className='example-item'>
                        <AtNoticebar single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                    <View className='example-item'>
                        <AtNoticebar icon='volume-plus' single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                    <View className='example-item'>
                        <AtNoticebar>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>

                    {/* 跑马灯 */}
                    <View className='example-item'>
                        <AtNoticebar marquee>[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
                    </View>
                    <View className='example-item'>
                        <AtNoticebar marquee icon='volume-plus'>[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
                    </View>

                    {/* 查看更多 */}
                    <View className='example-item'>
                        <AtNoticebar showMore single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>

                    {/* 关闭按钮 */}
                    <View className='example-item'>
                        <AtNoticebar close single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                    <View className='example-item'>
                        <AtNoticebar close>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
                    </View>
                </View>
            </View>
        )
    }

}