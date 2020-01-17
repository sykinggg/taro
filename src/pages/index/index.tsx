import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logoImg from '../../assets/images/logo_taro.png'
import './index.scss'
import './index.rn.scss'

export default class Index extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.gotoPanel = this.gotoPanel.bind(this);

        this.state = {
            list: [
                {
                    id: 'Basic',
                    title: '基础',
                    content: '普通按钮、图标、浮动按钮、组件',
                },
                {
                    id: 'View',
                    title: '视图',
                    content: '通告栏等8个组件',
                },
                {
                    id: 'Feedback',
                    title: '操作反馈',
                    content: '对话框等7个组件',
                },
                {
                    id: 'Data-entry',
                    title: '数据录入',
                    content: '输入框等13个组件',
                },
                {
                    id: 'Layout',
                    title: '布局',
                    content: '列表等6个组件',
                },
                {
                    id: 'Navigation',
                    title: '导航',
                    content: '标签栏等7个组件',
                },
                {
                    id: 'Advanced',
                    title: '高阶',
                    content: '日历组件',
                }
            ]
        }
    }

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    public onShareAppMessage() {
        return {
            title: 'Taro UI',
            path: '/pages/index/index',
            imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
        }
    }

    public gotoPanel = e => {
        const { id } = e.currentTarget.dataset
        Taro.navigateTo({
            // url: `/pages/panel/index?id=${id.toLowerCase()}`
            url: `/pages/${id.toLowerCase()}/index`
        })
    }

    render() {
        const { list } = this.state
        return (
            <View className='page page-index'>
                <View className='logo'>
                    <Image src={logoImg} className='img' mode='widthFix' />
                </View>
                <View className='page-title'>Taro UI</View>
                <View className='module-list'>
                    {list.map((item, index) => (
                        <View
                            className='module-list__item'
                            key={item.id}
                            data-id={item.id}
                            data-name={item.title}
                            data-list={item.subpages}
                            onClick={this.gotoPanel}
                        >
                            <View className='module-list__item-title'>{item.title}</View>
                            <View className='module-list__item-content'>{item.content}</View>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}
