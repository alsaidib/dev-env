//* globals describe, test, expect */
import React from 'react';
import { create } from 'react-test-renderer';
import PageLayout from './PageLayout';

const { CI } = process.env;
describe('Button component', () => {
  if (!CI) {
    test('render correctly component', () => {
      const PageLayoutComponent = create(
        <PageLayout>MY_CHILD_TEXT</PageLayout>
      );
      expect(PageLayoutComponent).toMatchSnapshot();
    });
  }

  test('it shows the expected text when rendered', () => {
    const PageLayoutComponent = create(<PageLayout>MY_CHILD_TEXT</PageLayout>);
    const PageLayoutComponentInstance = PageLayoutComponent.root;
    expect(PageLayoutComponentInstance.props.children).toBe('MY_CHILD_TEXT');
  });
});
