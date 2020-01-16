import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import NavigatorBtn from '../../../components/navigator-btn';

export default class ViewArticledemo extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Article 文章</View>
                <View className='panel__content'>
                    <View className='example-item'>
                        <NavigatorBtn parent='view' name='article'></NavigatorBtn>
                    </View>
                </View>
            </View>
        )
    }

}