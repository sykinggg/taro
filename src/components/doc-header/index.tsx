
import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'

import './index.scss'

export interface DocsHeaderProps {
    title: string
    desc: string
}

export default class DocsHeader extends Component<DocsHeaderProps> {
    constructor (props: DocsHeaderProps) {
        super(props);
    }
    render() {
        const { title, desc } = this.props

        return (
            <View className='doc-header'>
                <View className='doc-header__title'>{title}</View>
                <View className='doc-header__desc'>{desc}</View>
            </View>
        )
    }
}
