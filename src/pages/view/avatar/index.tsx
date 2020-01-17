import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

export default class ViewAvatar extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const avatarImg = 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
        return (
            <View className='panel'>
                <View className='panel__title'>Avatar 头像</View>
                <View className='panel__content'>
                    {/* 圆形头像 */}
                    <View className='example-item'>
                        <View className='subitem'>
                            <AtAvatar circle size='small' image={avatarImg}></AtAvatar>
                        </View>
                        <View className='subitem'>
                            <AtAvatar circle image={avatarImg}></AtAvatar>
                        </View>
                        <View className='subitem'>
                            <AtAvatar circle size='large' image={avatarImg}></AtAvatar>
                        </View>
                    </View>
                    {/* 圆角矩形头像 */}
                    <View className='example-item'>
                        <View className='subitem'>
                            <AtAvatar size='small' image={avatarImg}></AtAvatar>
                        </View>
                        <View className='subitem'>
                            <AtAvatar image={avatarImg}></AtAvatar>
                        </View>
                        <View className='subitem'>
                            <AtAvatar size='large' image={avatarImg}></AtAvatar>
                        </View>
                    </View>
                    {/* 圆形头像（支持文本） */}
                    <View className='example-item'>
                        <View className='subitem'>
                            <AtAvatar circle size='small' text='凹'></AtAvatar>
                        </View>
                        <View className='subitem'>
                            <AtAvatar circle text='凹'></AtAvatar>
                        </View>
                        <View className='subitem'>
                            <AtAvatar circle size='large' text='凹'></AtAvatar>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}