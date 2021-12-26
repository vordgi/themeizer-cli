import type { ColorObj } from "themeizer/dist/types/themeizer";

export const COLORS: ColorObj[] = [
  {
    theme: 'dark',
    type: 'solid',
    name: '--primary',
    origValue: 'rgb(102, 182, 255)',
    value: 'rgb(102, 182, 255)'
  },
  {
    theme: 'dark',
    type: 'solid',
    name: '--focus',
    origValue: 'rgb(238, 168, 128)',
    value: 'rgb(238, 168, 128)'
  },
  {
    theme: 'dark',
    type: 'linear',
    name: '--linear',
    origValue: 'rgb(224, 224, 224) 0%, rgba(223, 223, 223, 0) 100%',
    value: 'linear-gradient(var(--linear-setting, 0), rgb(224, 224, 224) 0%, rgba(223, 223, 223, 0) 100%)'
  },
  {
    theme: 'dark',
    type: 'solid',
    name: '--main-lvl1',
    origValue: 'rgb(255, 204, 188)',
    value: 'rgb(255, 204, 188)'
  },
  {
    theme: 'dark',
    type: 'solid',
    name: '--main-lvl2',
    origValue: 'rgb(224, 224, 224)',
    value: 'rgb(224, 224, 224)'
  },
  {
    theme: 'dark',
    type: 'solid',
    name: '--main-lvl3',
    origValue: 'rgb(189, 189, 189)',
    value: 'rgb(189, 189, 189)'
  },
  {
    theme: 'dark',
    type: 'solid',
    name: '--main-lvl4',
    origValue: 'rgb(130, 130, 130)',
    value: 'rgb(130, 130, 130)'
  },
  {
    theme: 'dark',
    type: 'solid',
    name: '--main-lvl5',
    origValue: 'rgb(79, 79, 79)',
    value: 'rgb(79, 79, 79)'
  },
  {
    theme: 'dark',
    type: 'solid',
    name: '--main-lvl6',
    origValue: 'rgb(38, 50, 56)',
    value: 'rgb(38, 50, 56)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--primary',
    origValue: 'rgb(0, 26, 119)',
    value: 'rgb(0, 26, 119)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--focus',
    origValue: 'rgb(232, 186, 83)',
    value: 'rgb(232, 186, 83)'
  },
  {
    theme: 'light',
    type: 'linear',
    name: '--linear',
    origValue: 'rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%',
    value: 'linear-gradient(var(--linear-setting, 0), rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl1',
    origValue: 'rgb(216, 67, 21)',
    value: 'rgb(216, 67, 21)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl2',
    origValue: 'rgb(79, 79, 79)',
    value: 'rgb(79, 79, 79)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl3',
    origValue: 'rgb(130, 130, 130)',
    value: 'rgb(130, 130, 130)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl4',
    origValue: 'rgb(189, 189, 189)',
    value: 'rgb(189, 189, 189)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl5',
    origValue: 'rgb(224, 224, 224)',
    value: 'rgb(224, 224, 224)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl6',
    origValue: 'rgb(248, 248, 248)',
    value: 'rgb(248, 248, 248)'
  },
  {
    theme: 'newYear',
    type: 'solid',
    name: '--primary',
    origValue: 'rgb(24, 118, 0)',
    value: 'rgb(24, 118, 0)'
  }
]

export const SORTED_LIGHT_COLORS: ColorObj[] = [
  {
    theme: 'light',
    type: 'linear',
    name: '--linear',
    origValue: 'rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%',
    value: 'linear-gradient(var(--linear-setting, 0), rgb(51, 51, 51) 0%, rgba(51, 51, 51, 0) 100%)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--primary',
    origValue: 'rgb(0, 26, 119)',
    value: 'rgb(0, 26, 119)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--focus',
    origValue: 'rgb(232, 186, 83)',
    value: 'rgb(232, 186, 83)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl1',
    origValue: 'rgb(216, 67, 21)',
    value: 'rgb(216, 67, 21)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl2',
    origValue: 'rgb(79, 79, 79)',
    value: 'rgb(79, 79, 79)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl3',
    origValue: 'rgb(130, 130, 130)',
    value: 'rgb(130, 130, 130)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl4',
    origValue: 'rgb(189, 189, 189)',
    value: 'rgb(189, 189, 189)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl5',
    origValue: 'rgb(224, 224, 224)',
    value: 'rgb(224, 224, 224)'
  },
  {
    theme: 'light',
    type: 'solid',
    name: '--main-lvl6',
    origValue: 'rgb(248, 248, 248)',
    value: 'rgb(248, 248, 248)'
  }
]

export const STYLES = `
.default {
  position: relative;
  border: 1px solid #001A77;
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
.active {
  background: var(--linear);
}
.filled {
  background-color: var(--primary);
  color: var(--main-lvl1);
}
`
