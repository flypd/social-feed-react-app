import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import WidgetForm from './WidgetForm'
import React from 'react'

export const widgetFormProps = {
  feedUrl: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
  numberOfPosts: 10,
  updateInterval: 15000,
}

export const actions = {
  setFeedUrl: action('setFeedUrl'),
  setUpdateInterval: action('setUpdateInterval'),
  setNumberOfPosts: action('setNumberOfPosts'),
}

storiesOf('WidgetForm', module)
  .add('default', () => <WidgetForm {...widgetFormProps} {...actions}/>)