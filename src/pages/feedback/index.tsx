import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss';
import DocsHeader from '../../components/doc-header';
import ToHome from '../../components/to-home';
import FeedbackActionSheet from './actionSheet';
import FeedbackMessage from './message';
import FeedbackModal from './modal';
import FeedbackToast from './toast';
import FeedbackProgress from './progress';
import FeedbackSwipeAction from './swipeAction';
import FeedbackActivityIndicator from './activityIndicator';


export default class Feedback extends Taro.Component<any, any> {
    public config = {
        navigationBarTitleText: 'Taro UI'
    }

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='page'>
                <ToHome />
                <DocsHeader title='操作反馈' desc='7 个组件'></DocsHeader>

                <View className='doc-body'>
                    
                    {/* 底部弹框组件 */}
                    <FeedbackActionSheet />

                    {/* Message */}
                    <FeedbackMessage />

                    {/* Modal */}
                    <FeedbackModal />

                    {/* Toast */}
                    <FeedbackToast />

                    {/* Progress */}
                    <FeedbackProgress />

                    {/* SwipeAction */}
                    <FeedbackSwipeAction />

                    {/* Activity Indicator */}
                    <FeedbackActivityIndicator />

                </View>
            </View>
        )
    }
}