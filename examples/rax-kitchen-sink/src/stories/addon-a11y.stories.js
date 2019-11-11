import { createElement } from 'rax';
import { withA11Y } from '@storybook/addon-a11y';
import Text from 'rax-text';
import View from 'rax-view';
import markdown from './note.md';

export default {
  title: 'Addon|addon-a11y',
  decorators: [withA11Y],
};

export const basic = () => <Text>RAX TEXT NODE</Text>;

basic.story = {
  parameters: { notes: 'super awesome note' },
};

export const withStyle = () => <Text style={{ fontSize: 20, color: 'blue' }}>Styled text</Text>;

withStyle.story = {
  name: 'with style',
  parameters: {
    notes: ' this is a note with emojis 🚀🚀🚀🚀🚀',
  },
};

export const withMarkdown = () => (
  <button type="button">
    &nbsp;
    <Text id="text1">😀 😎 👍 💯</Text>
    <View>
      <Text id="text1">aaa</Text>
    </View>
    &nbsp;
  </button>
);

withMarkdown.story = {
  name: 'with markdown',
  parameters: {
    notes: {
      markdown,
    },
  },
};
