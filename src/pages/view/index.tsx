import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';
import DocsHeader from '../../components/doc-header';
import ToHome from '../../components/to-home';

import { AtNoticebar, AtSteps, AtDivider, AtLoadMore, AtTimeline, AtCurtain } from 'taro-ui';
import ViewArticledemo from './articledemo';
import ViewAvatar from './avatar';
import ViewBadge from './badge';
import ViewTag from './tag';
import ViewCountdown from './countdown';
import ViewCurtain from './curtain';
import ViewNoticebar from './noticebar';
import ViewSteps from './steps';
import ViewSwiper from './swiper';
import ViewTimeline from './timeline';
import ViewDivider from './divider';
import ViewLoadMore from './loadMore';

export class ViewComponent extends Taro.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='page'>
                <ToHome />
                <DocsHeader title='视图' desc='8 个组件'></DocsHeader>

                <View className='doc-body'>

                    {/* Article */}
                    <ViewArticledemo />

                    {/* Avatar */}
                    <ViewAvatar />

                    {/* Badge */}
                    <ViewBadge />

                    {/* Tag */}
                    <ViewTag />

                    {/* Countdown */}
                    <ViewCountdown />

                    {/* Curtain */}
                    <ViewCurtain />

                    {/* Noticebar */}
                    <ViewNoticebar />

                    {/* Steps */}
                    <ViewSteps />

                    {/* Swiper */}
                    <ViewSwiper />

                    {/* Timeline */}
                    <ViewTimeline />

                    {/* Divider */}
                    <ViewDivider />

                    {/* LoadMore */}
                    <ViewLoadMore />

                </View>

            </View>
        )
    }
}