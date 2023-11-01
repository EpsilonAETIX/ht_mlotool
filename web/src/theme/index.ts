import { MantineThemeOverride } from "@mantine/core";

export const customTheme: MantineThemeOverride = {
  fontFamily: 'Roboto',
  components: {
    Tooltip: {
      defaultProps: {
        transition: 'pop',
      },
    },
  },
};
