import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import ToHome from '../../components/to-home';
import DocsHeader from '../../components/doc-header';
import LayoutFlex from './flex';
import LayoutGrid from './grid';
import LayoutList from './list';
import LayoutAccordion from './accordion';
import LayoutFloat from './float';
import LayoutCard from './card';

export default class Layout extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='page'>
                <ToHome />
                <DocsHeader title='布局' desc='6 个组件'></DocsHeader>

                <View className='doc-body'>
                    {/* Flex */}
                    <LayoutFlex />

                    {/* Grid */}
                    <LayoutGrid />

                    {/* List */}
                    <LayoutList />

                    {/* Accordion */}
                    <LayoutAccordion />

                    {/* FloatLayout */}
                    <LayoutFloat />

                    {/* Card */}
                    <LayoutCard />
                </View>
            </View>
        )
    }
}