import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { DataList, DataListItem } from '../index';

storiesOf('List', module)
  .add('basic', () => (
    <DataList selectable>
      <DataListItem caption="hi" legend="more info" />
      <DataListItem caption="hi" legend="more info" />
      <DataListItem caption="hi" legend="more info" />
      <DataListItem caption="hi" legend="more info" />
    </DataList>
  ));
