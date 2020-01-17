import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtLoadMore } from 'taro-ui'

export default class ViewLoadMore extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loadMoreStatus: 'more',
        }
    }

    public handleLoadMoreClick() {
        this.setState({
            loadMoreStatus: 'loading'
        })
        setTimeout(() => {
            this.setState({
                loadMoreStatus: 'noMore'
            })
        }, 2000)
    }

    public render() {
        const { loadMoreStatus } = this.state
        return (
            <View className='panel'>
                <View className='panel__title'>Load More 页面提示</View>
                <View className='panel__content no-padding'>
                    {/* 一般用法 */}
                    <View className='example-item'>
                        <AtLoadMore onClick={this.handleLoadMoreClick.bind(this)} status={loadMoreStatus} />
                    </View>
                </View>
            </View>
        )
    }

}