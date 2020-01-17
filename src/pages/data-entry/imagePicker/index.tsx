import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtImagePicker } from 'taro-ui'

export default class DataEntryImagePicker extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            files: [
                {
                    url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
                },
                {
                    url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
                },
                {
                    url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
                }
            ],
        }
    }

    public handleImageChange(stateName, files) {
        this.setState({
            [stateName]: files
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>ImagePicker 图片选择器</View>
                <View className='panel__content no-padding'>
                    <View className='example-item'>
                        <AtImagePicker
                            files={this.state.files}
                            onChange={this.handleImageChange.bind(this, 'files')}
                        />
                    </View>
                </View>
            </View>
        )
    }

}