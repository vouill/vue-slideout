# vue-slideout

This component is a simple vue implementation of [Slideout.js](https://github.com/Mango/slideout)

[Demo](https://vouill.github.io/vue-slideout/)

## Install

```bash
   npm install vue-slideout
 ```

## Usage

`App.vue`

```html
<template>
  <div id="app">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
              <div>Menu</div>
            </nav>
            <main id="panel">
              <header>
                <div>
                  <button class="toggle-button">☰</button>
                  Panel
                </div>
              </header>
            </main>
    </Slideout>
  </div>
</template>

<script>
  import Slideout from 'vue-slideout'

  export default {
    name: 'app',
    components: {
      Slideout
    },
    methods: {
    open: function () {
      console.log('slideoutOpen')
    }
  }
}
</script>

<style>
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    background-color: #1D1F20;
    color: white;
  }

  .slideout-menu-left {
    left: 0;
  }

  .slideout-menu-right {
    right: 0;
  }

  .slideout-panel {
    background-color: #4B5;
    color: white;
    position: relative;
    z-index: 1;
    will-change: transform;
    min-height: 100vh;
  }

  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
  }

  .slideout-open .slideout-menu {
    display: block;
  }
</style>
```

# Component API

## Data props
The component Props follows the [Slideout options](https://github.com/Mango/slideout#user-content-slideoutoptions)

```html

<Slideout
panel="selector"
padding="number"
side="str"
>
</Slideout>
```

- `panel="selector"` (String)  - Selector of the panel HTML Element. Default `#panel`.
- `menu="menu"` (String)  - Selector of the menu HTML Element. Default `#menu`.
- `menu="duration"` (String)  - (Number) - The time (milliseconds) to open/close the slideout. Default: `300`.

...

## Events
The component Events follows [Slideout events](https://github.com/Mango/slideout#user-content-events)


```html
<Slideout
@on-open="method"
@once-open="method">
</Slideout>
```

...

## Access the Slideout object from a parent Component

You can access the `slideout` object: `this.$children[i].slideout`

Example:

```javascript
  methods: {
    somethingClicked: function () {
      this.$children[0].slideout.toggle()
    }
```

