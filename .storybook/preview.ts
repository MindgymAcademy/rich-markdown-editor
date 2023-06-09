import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import "@fontsource/karla";
import "@fontsource/karla/600.css";
import "@fontsource/inconsolata";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "padded",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
