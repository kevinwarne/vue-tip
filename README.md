# vue-tip

> Vue component to aid in creating dynamic html composed tooltips.

Check out the example [here](https://kevinwarne.github.io/vue-tip/).

## Install & Basic Usage

Add as dependency with npm or yarn.

`npm install vue-tip --save`

or

`yarn add vue-tip`

```html
<template>
  <div id = 'demo'>
    <tip>
      <!-- trigger should use the default tip slot -->
      <div>Hover Over Me!</div>
      <!-- tip content should be slotted in under the 'tip' identifier -->
      <span slot = 'tip'>
        Here is the tooltip content..
      </span>
    </tip>
  </div>
</template>

<script>
  import { Tip } from 'vue-tip'

  export default {
    components: { Tip },
  }
</script>
```

## props

```javascript
props: {
  // tooltip position relative to trigger, supports the following:
  // 'auto-auto', 'auto-left', 'auto-center', 'auto-right',
  // 'top-auto', 'top-left', 'top-center', 'top-right',
  // 'bottom-auto', 'bottom-left', 'bottom-center', 'bottom-right'
  position: {
    type: String,
    default: 'auto-auto'
  },

  // width of the tooltip
  width: {
    type: Number,
    default: 150
  },

  // tooltip should be positioned using 'position: fixed' rather than
  // 'position: absolute' sometimes this is necessary when combining
  // relative/absolute/scrolling containers to bring the tooltip to the
  // front
  fixed: {
    type: Boolean,
    default: false
  },

  // tooltip offset x position
  offsetX: {
    type: Number,
    default: 0
  },

  // tooltip offset y position
  offsetY: {
    type: Number,
    default: 0
  }
}
```

## Contributing

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build demo (used to prepare for gitlab pages)
npm run build:demo

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
