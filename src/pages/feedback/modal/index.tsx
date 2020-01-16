import Taro from '@tarojs/taro'
import './index.scss'
import { View, Button } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';

export default class FeedbackModal extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isModalOpened1: false,
            isModalOpened2: false,
            isModalOpened3: false,
            isModalOpened4: false,
        }
    }

    public showToast(name) {
        Taro.showToast({
            icon: 'none',
            title: name
        })
    }

    public handleModalClick(type) {
        this.setState({
            [`isModalOpened${type}`]: true
        })
    }

    public closeModal(type, msg) {
        this.setState({
            [`isModalOpened${type}`]: false
        })
        this.showToast(msg)
    }

    public render() {
        return (
            <View className='panel'>
                <View className='panel__title'>Modal 模态框</View>
                <View className='panel__content'>
                    {/* 基础模态框 */}
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleModalClick.bind(this, 1)}>打开基础模态框</View>
                    </View>

                    {/* 单个按钮 */}
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleModalClick.bind(this, 2)}>打开单个按钮模态框</View>
                    </View>

                    {/* 无标题 */}
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleModalClick.bind(this, 3)}>打开无标题模态框</View>
                    </View>

                    {/* 简化使用 */}
                    <View className='example-item'>
                        <View className='demo-btn' onClick={this.handleModalClick.bind(this, 3)}>打开简化使用模态框</View>
                    </View>
                </View>

                {/* s 页面中的模态框 */}
                {/* 基础模态框 */}
                <AtModal
                    isOpened={this.state.isModalOpened1}
                    onClose={this.closeModal.bind(this, 1, 'Modal被关闭了')}
                >
                    <AtModalHeader>标题</AtModalHeader>
                    <AtModalContent>
                        <View className='modal-content'>
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                        </View>
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.closeModal.bind(this, 1, '点击了取消')}>
                            取消
                        </Button>
                        <Button
                            onClick={this.closeModal.bind(this, 1, '点击了确定')}
                        >
                            确定
                        </Button>
                    </AtModalAction>
                </AtModal>

                {/* 单个按钮 */}
                <AtModal
                    isOpened={this.state.isModalOpened2}
                    onClose={this.closeModal.bind(this, 2, 'Modal被关闭了')}
                >
                    <AtModalHeader>标题</AtModalHeader>
                    <AtModalContent>
                        <View className='modal-content'>
                            这里是正文内容，欢迎加入京东凹凸实验室
                        </View>
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.closeModal.bind(this, 2, '点击了确定')}>
                            确定
                        </Button>
                    </AtModalAction>
                </AtModal>

                {/* 无标题 */}
                <AtModal
                    isOpened={this.state.isModalOpened3}
                    onClose={this.closeModal.bind(this, 3, 'Modal被关闭了')}
                >
                    <AtModalContent>
                        <View className='modal-content'>
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                            这里是正文内容，欢迎加入京东凹凸实验室
                        </View>
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.closeModal.bind(this, 3, '点击了取消')}>
                            取消
                        </Button>
                        <Button
                            onClick={this.closeModal.bind(this, 3, '点击了确定')}
                        >
                            确定
                        </Button>
                    </AtModalAction>
                </AtModal>

                {/* 简化使用 */}
                <AtModal
                    isOpened={this.state.isModalOpened4}
                    title='标题'
                    cancelText='取消'
                    confirmText='确认'
                    content='欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室'
                    onClose={this.closeModal.bind(this, 4, 'Modal被关闭了')}
                    onCancel={this.closeModal.bind(this, 4, '点击了取消')}
                    onConfirm={this.closeModal.bind(this, 4, '点击了确认')}
                />
                {/* e 页面中的模态框 */}
            </View>
        )
    }

}