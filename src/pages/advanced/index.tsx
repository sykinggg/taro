import Taro from '@tarojs/taro'
import './index.scss'
import './index.rn.scss'
import { View } from '@tarojs/components';
import ToHome from 'src/components/to-home';
import DocsHeader from 'src/components/doc-header';
import { AtCalendar } from 'taro-ui';

export default class Advanced extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public config = {
        navigationBarTitleText: 'Taro UI'
    }

    public state = {
        multiCurentDate: {
            start: Date.now()
        }
    }

    public handleClick(key: string, value: string) {
        this.setState({
            [key]: value
        })
    }

    public render() {
        return (
            <View className='page'>
                <ToHome />
                <DocsHeader title='高阶' desc='日历组件'></DocsHeader>
                <View className='doc-body'>
                    <View className='panel'>
                        <View className='panel__title'>Calendar 日历</View>
                        <View className='panel__content'>
                            {/* 一般案例 */}
                            <View className='example-item example-item--calendar'>
                                <View className='example-item__desc'>一般案例</View>
                                <AtCalendar />
                            </View>

                            {/* 范围选择 */}
                            <View className='example-item example-item--calendar'>
                                <View className='example-item__desc'>范围选择</View>
                                <AtCalendar isMultiSelect currentDate={this.state.multiCurentDate} />
                            </View>

                            <View className='example-item'>
                                <View
                                    className='demo-btn'
                                    onClick={this.handleClick.bind(this, 'multiCurentDate', {
                                        start: '2018/10/28',
                                        end: '2018/11/11'
                                    })}
                                >设置选择区间为 2018/10/28 - 2018/11/11</View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}