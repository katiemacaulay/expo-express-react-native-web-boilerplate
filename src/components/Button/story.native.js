import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions'
import Button from '.'

storiesOf('SampleButton', module)
    .add('Default', () =>
    <Button
        onPress= {()=> action('hello')}
        title= 'Default'
        color= 'blue'
    />
)