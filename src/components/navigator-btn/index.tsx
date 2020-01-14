import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';

export interface NavigatorBtnProps {
    parent: string
    name: string
}

export default class NavigatorBtn extends Taro.Component<any, NavigatorBtnProps> {
    constructor(props: any) {
        super(props);
    }

    public handleGoto(parent, name) {
        Taro.navigateTo({
            url: `/pages/${parent.toLowerCase()}/${name.toLowerCase()}/index`
        })
    }

    public render() {
        const { parent, name } = this.props
        return (
            <View
                className='demo-goto-btn'
                onClick={this.handleGoto.bind(this, parent, name)}
            >查看详情</View>
        )
    }
}