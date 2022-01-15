import type { ThemesObj } from "themeizer/dist/types/themeizer";
import type { SortedThemeColor } from "../types";

export const CLOUD_COLORS: ThemesObj = {
  dark: {
    list: [
      {
        type: 'solid',
        name: 'primary',
        value: 'rgb(102, 182, 255)'
      },
      {
        type: 'solid',
        name: 'focus',
        value: 'rgb(238, 168, 128)'
      },
      {
        type: 'linear',
        name: 'linear',
        value: 'rgb(224, 224, 224) 0%, rgba(223, 223, 223, 0) 100%'
      },
      {
        type: 'radial',
        name: 'radial',
        value: 'rgb(224, 224, 224) 0%, rgba(223, 223, 223, 0) 100%'
      },
      {
        type: 'solid',
        name: 'main-lvl1',
        value: 'rgb(255, 204, 188)'
      },
      {
        type: 'solid',
        name: 'main-lvl2',
        value: 'rgb(224, 224, 224)'
      },
      {
        type: 'solid',
        name: 'main-lvl3',
        value: 'rgb(189, 189, 189)'
      },
      {
        type: 'solid',
        name: 'main-lvl4',
        value: 'rgb(130, 130, 130)'
      },
      {
        type: 'solid',
        name: 'main-lvl5',
        value: 'rgb(79, 79, 79)'
      },
      {
        type: 'solid',
        name: 'main-lvl6',
        value: 'rgb(38, 50, 56)'
      }
    ],
    type: 'dark'
  },
  light: {
    list: [
      {
        type: 'solid',
        name: 'primary',
        value: 'rgb(0, 26, 119)'
      },
      {
        type: 'solid',
        name: 'focus',
        value: 'rgb(232, 186, 83)'
      },
      {
        type: 'linear',
        name: 'linear',
        value: 'rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%'
      },
      {
        type: 'radial',
        name: 'radial',
        value: 'rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%'
      },
      {
        type: 'solid',
        name: 'main-lvl1',
        value: 'rgb(216, 67, 21)'
      },
      {
        type: 'solid',
        name: 'main-lvl2',
        value: 'rgb(79, 79, 79)'
      },
      {
        type: 'solid',
        name: 'main-lvl3',
        value: 'rgb(130, 130, 130)'
      },
      {
        type: 'solid',
        name: 'main-lvl4',
        value: 'rgb(189, 189, 189)'
      },
      {
        type: 'solid',
        name: 'main-lvl5',
        value: 'rgb(224, 224, 224)'
      },
      {
        type: 'solid',
        name: 'main-lvl6',
        value: 'rgb(248, 248, 248)'
      }
    ],
    type: 'light'
  },
  custom: {
    list: [
      {
        type: 'solid',
        name: 'logo',
        value: 'rgb(0, 229, 255)'
      }
    ],
    type: "shared"
  }
}

export const SORTED_LIGHT_COLORS: SortedThemeColor[] = [
  {
    type: 'linear',
    themeType: 'light',
    name: 'linear',
    value: 'rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%'
  },
  {
    type: 'radial',
    themeType: 'light',
    name: 'radial',
    value: 'rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'primary',
    value: 'rgb(0, 26, 119)'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'focus',
    value: 'rgb(232, 186, 83)'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'main-lvl1',
    value: 'rgb(216, 67, 21)'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'main-lvl2',
    value: 'rgb(79, 79, 79)'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'main-lvl3',
    value: 'rgb(130, 130, 130)'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'main-lvl4',
    value: 'rgb(189, 189, 189)'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'main-lvl5',
    value: 'rgb(224, 224, 224)'
  },
  {
    type: 'solid',
    themeType: 'light',
    name: 'main-lvl6',
    value: 'rgb(248, 248, 248)'
  },
  {
    type: 'solid',
    themeType: 'shared',
    name: 'logo',
    value: 'rgb(0, 229, 255)'
  }
]

export const STYLES = `
.default {
  position: relative;
  border: 1px solid #001A77;
}
.logo {
  color: #00E5FF;
}
.active {
  background: linear-gradient(rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%);
}
.filled {
  background-color: #001A77;
  color: #D84315;
}
`

export const EXPECTED_STYLES = `
.default {
  position: relative;
  border: 1px solid var(--primary);
}
.logo {
  color: var(--shared-logo);
}
.active {
  background: var(--linear);
}
.filled {
  background-color: var(--primary);
  color: var(--main-lvl1);
}
`
