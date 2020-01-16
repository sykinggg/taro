import Taro from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components';
import DocsHeader from '../../components/doc-header';
import ToHome from '../../components/to-home';
import NavigationNavBar from './navBar';
import NavigationBTabBar from './tabBar';
import NavigationTabs from './tabs';
import NavigationSegmentedControl from './segmentedControl';
import NavigationPagination from './pagination';
import NavigationDrawer from './drawer';
import NavigationIndexesDemo from './indexesDemo';

export default class Navigation extends Taro.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View className='page'>
                <ToHome />
                <DocsHeader title='导航' desc='7 个组件'></DocsHeader>

                <View className='doc-body'>
                    {/* NavBar */}
                    <NavigationNavBar />

                    {/* TabBar */}
                    <NavigationBTabBar />

                    {/* Tabs */}
                    <NavigationTabs />

                    {/* SegmentedControl */}
                    <NavigationSegmentedControl />

                    {/* Pagination */}
                    <NavigationPagination />

                    {/* Drawer */}
                    <NavigationDrawer />

                    {/* Indexes */}
                    <NavigationIndexesDemo />
                </View>
            </View>
        )
    }

}