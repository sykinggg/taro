import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import { AtTag } from 'taro-ui';

export default class ViewTag extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            hollowTagList: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ],
            solidTagList: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ],
            hollowTagList2: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ],
            solidTagList2: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ],
        }
    }

    public handleHollowClick(data) {
        const { hollowTagList } = this.state
        const findIndex = hollowTagList.findIndex(item => item.name === data.name)

        hollowTagList[findIndex].active = !hollowTagList[findIndex].active
        this.setState({ hollowTagList })
    }

    public handleSolidClick(data) {
        const { solidTagList } = this.state
        const findIndex = solidTagList.findIndex(item => item.name === data.name)

        solidTagList[findIndex].active = !solidTagList[findIndex].active
        this.setState({ solidTagList })
    }

    public handleHollowSmallClick(data) {
        const { hollowTagList2 } = this.state
        const findIndex = hollowTagList2.findIndex(item => item.name === data.name)

        hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active
        this.setState({ hollowTagList2 })
    }

    public handleSolidSmallClick(data) {
        const { solidTagList2 } = this.state
        const findIndex = solidTagList2.findIndex(item => item.name === data.name)

        solidTagList2[findIndex].active = !solidTagList2[findIndex].active
        this.setState({ solidTagList2 })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Tag 标签</View>
                <View className='panel__content'>
                    {/* 空心标签 */}
                    <View className='example-item'>
                        {this.state.hollowTagList.map((item, index) => (
                            <View className='subitem' key={item.name}>
                                <AtTag
                                    name={item.name}
                                    active={item.active}
                                    circle={index % 2 === 0}
                                    onClick={this.handleHollowClick.bind(this)}
                                >标签</AtTag>
                            </View>
                        ))}
                    </View>

                    {/* 实心标签 */}
                    <View className='example-item'>
                        {this.state.solidTagList.map((item, index) => (
                            <View className='subitem' key={item.name}>
                                <AtTag
                                    type='primary'
                                    name={item.name}
                                    active={item.active}
                                    circle={index % 2 === 0}
                                    onClick={this.handleSolidClick.bind(this)}
                                >标签</AtTag>
                            </View>
                        ))}
                    </View>

                    {/* 不可点击态 */}
                    <View className='example-item'>
                        <View className='subitem'>
                            <AtTag type='primary' circle disabled>标签</AtTag>
                        </View>
                        <View className='subitem'>
                            <AtTag type='primary' disabled>标签</AtTag>
                        </View>
                    </View>

                    {/* 空心标签（小） */}
                    <View className='example-item'>
                        {this.state.hollowTagList2.map((item, index) => (
                            <View className='subitem' key={item.name}>
                                <AtTag
                                    size='small'
                                    name={item.name}
                                    active={item.active}
                                    circle={index % 2 === 0}
                                    onClick={this.handleHollowSmallClick.bind(this)}
                                >标签</AtTag>
                            </View>
                        ))}
                    </View>

                    {/* 实心标签（小） */}
                    <View className='example-item'>
                        {this.state.solidTagList2.map((item, index) => (
                            <View className='subitem' key={item.name}>
                                <AtTag
                                    size='small'
                                    type='primary'
                                    name={item.name}
                                    active={item.active}
                                    circle={index % 2 === 0}
                                    onClick={this.handleSolidSmallClick.bind(this)}
                                >标签</AtTag>
                            </View>
                        ))}
                    </View>

                    {/* 不可点击态（小） */}
                    <View className='example-item'>
                        <View className='subitem'>
                            <AtTag size='small' type='primary' circle disabled>标签</AtTag>
                        </View>
                        <View className='subitem'>
                            <AtTag size='small' type='primary' disabled>标签</AtTag>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}