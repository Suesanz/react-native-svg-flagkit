/**
 * SVG
 *
 * width : height = 21 : 15
 */
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { getFlagByDollarCode } from './utils'

export default class Flag extends Component {
    static propTypes = {
        id: PropTypes.string,
        size: PropTypes.number,

        width: PropTypes.number,
        height: PropTypes.number,

        onPress: PropTypes.func
    };

    static defaultProps = {
        size: 1,
        width: 210,
        height: 150
    };

    _renderIcon() {
        const {size, width, height, id} = this.props
        const SvgComponent = getFlagByDollarCode(id)
        if(!id || !SvgComponent) {
           throw new Error(`Invalid flag code ${id}`)
        }
        return <SvgComponent width={width * size} height={height * size}/>
    }

    _onPress = () => {
        this.props.onPress && this.props.onPress(this.props.id)
    }

    render() {
        return (
            <TouchableOpacity
                disabled={!this.props.onPress}
                onPress={this._onPress}
            >
                {this._renderIcon()}
            </TouchableOpacity>
        )
    }
}

