import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View, Image } from "@tarojs/components"
import { AtCurtain } from "taro-ui"
import curtainPng from '../../../assets/images/curtain.png'

export default class ViewCurtain extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isCurtainOpened: false,
        }
    }

    public handleCurtainClick(flag) {
        this.setState({
            isCurtainOpened: flag,
        })
    }

    public render() {
        const { isCurtainOpened } = this.state
        return (
            <View className='panel'>
                <View className='panel__title'>Curtain 幕帘</View>
                <View className='panel__content'>
                    {/* 一般用法 */}
                    <View className='example-item'>
                        <View
                            className='demo-btn'
                            onClick={this.handleCurtainClick.bind(this, true)}
                        >显示幕帘</View>
                    </View>
                </View>

                <AtCurtain
                    isOpened={isCurtainOpened}
                    closeBtnPosition='bottom'
                    onClose={this.handleCurtainClick.bind(this, false)}
                >
                    <Image
                        style='width:100%'
                        mode='widthFix'
                        src={curtainPng}
                    />
                </AtCurtain>
            </View>
        )
    }

}