import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs/react'
import Widget from './Widget'
import React from 'react'

export const widgetProps = {
  feedUrl: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
  numberOfPosts: 10,
  updateInterval: 15000,
}

storiesOf('Widget', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Widget
      {...object('widgetProps', { ...widgetProps })}
    />)