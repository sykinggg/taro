import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components'
import { AtSteps } from 'taro-ui'

export default class ViewSteps extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            stepsCurrent1: 0,
            stepsCurrent2: 0,
            stepsCurrent3: 0,
            stepsCurrent4: 1,
        }
    }

    public handleStepsChange(stateName, current) {
        this.setState({
            [stateName]: current
        })
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Steps 步骤条</View>
                <View className='panel__content'>
                    {/* 一般用法 */}
                    <View className='example-item example-item--steps'>
                        <AtSteps
                            items={[
                                { 'title': '步骤一' },
                                { 'title': '步骤二' }
                            ]}
                            current={this.state.stepsCurrent1}
                            onChange={this.handleStepsChange.bind(this, 'stepsCurrent1')}
                        />
                    </View>

                    {/* 带附加信息 */}
                    <View className='example-item example-item--steps'>
                        <AtSteps
                            items={[
                                { 'title': '步骤一', 'desc': '这里是额外的信息，最多两行' },
                                { 'title': '步骤二', 'desc': '这里是额外的信息，最多两行' },
                                { 'title': '步骤三', 'desc': '这里是额外的信息，最多两行' }
                            ]}
                            current={this.state.stepsCurrent2}
                            onChange={this.handleStepsChange.bind(this, 'stepsCurrent2')}
                        />
                    </View>

                    {/* 自定义图标 */}
                    <View className='example-item example-item--steps'>
                        <AtSteps
                            items={[
                                {
                                    'title': '步骤一',
                                    'desc': '这里是额外的信息，最多两行',
                                    'icon': {
                                        value: 'sound',
                                        activeColor: '#fff',
                                        inactiveColor: '#78A4FA',
                                        size: '14',
                                    }
                                },
                                {
                                    'title': '步骤二',
                                    'desc': '这里是额外的信息，最多两行',
                                    'icon': {
                                        value: 'shopping-cart',
                                        activeColor: '#fff',
                                        inactiveColor: '#78A4FA',
                                        size: '14',
                                    }
                                },
                                {
                                    'title': '步骤三',
                                    'desc': '这里是额外的信息，最多两行',
                                    'icon': {
                                        value: 'camera',
                                        activeColor: '#fff',
                                        inactiveColor: '#78A4FA',
                                        size: '14',
                                    }
                                }
                            ]}
                            current={this.state.stepsCurrent3}
                            onChange={this.handleStepsChange.bind(this, 'stepsCurrent3')}
                        />
                    </View>

                    {/* 状态步骤条 */}
                    <View className='example-item example-item--steps'>
                        <AtSteps
                            items={[
                                {
                                    title: '步骤一',
                                    desc: '这里是额外的信息，最多两行',
                                    success: true
                                },
                                {
                                    title: '步骤二',
                                    desc: '这里是额外的信息，最多两行'
                                },
                                {
                                    title: '步骤三',
                                    desc: '这里是额外的信息，最多两行',
                                    error: true
                                }
                            ]}
                            current={this.state.stepsCurrent4}
                            onChange={this.handleStepsChange.bind(this, 'stepsCurrent4')}
                        />
                    </View>

                </View>
            </View>
        )
    }
}