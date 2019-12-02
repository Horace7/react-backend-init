import React, { Component } from 'react'
import { Input, Icon, AutoComplete } from 'antd'
import classNames from 'classnames'
import debounce from 'lodash/debounce'
import './index.less'

export default class HeaderSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchMode: props.defaultOpen,
      value: '',
    }
    this.debouncePressEnter = debounce(this.debouncePressEnter, 500, {
      leading: true,
      trailing: false,
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { onPressEnter } = this.props
      const { value } = this.state
      this.timeout = setTimeout(() => {
        onPressEnter(value) // Fix duplicate onPressEnter
      }, 0)
    }
  };

  onChange = (value) => {
    const { onSearch, onChange } = this.props
    this.setState({ value })
    if (onSearch) {
      onSearch(value)
    }
    if (onChange) {
      onChange(value)
    }
  };

  enterSearchMode = () => {
    const { onVisibleChange } = this.props
    onVisibleChange && onVisibleChange(true)
    this.setState({ searchMode: true }, () => {
      const { searchMode } = this.state
      if (searchMode && this.inputRef) {
        this.inputRef.focus()
      }
    })
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    })
  };

  debouncePressEnter = () => {
    const { onPressEnter } = this.props
    const { value } = this.state
    onPressEnter(value)
  };

  render() {
    const { className, placeholder, ...restProps } = this.props
    const { searchMode, value } = this.state
    delete restProps.defaultOpen // for rc-select not affected
    const inputClass = classNames('input', {
      'show': searchMode,
    })
    return (
      <span
        className={classNames(className, 'headerSearch')}
        onClick={this.enterSearchMode}
        onTransitionEnd={({ propertyName }) => {
          if (propertyName === 'width' && !searchMode) {
            const { onVisibleChange } = this.props
            onVisibleChange && onVisibleChange(searchMode)
          }
        }}
      >
        <Icon type='search' key='Icon' />
        <AutoComplete
          key='AutoComplete'
          {...restProps}
          className={inputClass}
          value={value}
          onChange={this.onChange}
        >
          <Input
            ref={node => {
              this.inputRef = node
            }}
            aria-label={placeholder}
            placeholder={placeholder}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
    )
  }
}
