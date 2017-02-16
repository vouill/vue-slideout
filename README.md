# vue-slideout

This component is a simple vue implementation of [Slideout.js](https://github.com/Mango/slideout)

[Demo](https://vouill.github.io/vue-slideout/)

## Install

```bash
   npm install vue-slideout
 ```

## Usage

```html
<template>
  <div id="app">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']">
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

Every Slideout options are implemented as simple props, default values are kept same as original.
However the panel and menu selector needs to be specified as id ('#id') or class ('.class')
Notice the addition of a binded prop `:toggleSelectors="[]"`, it's an array containing any selectors you wish to be listened to triger the slideout action on 'click'.

## Coming next

[Events and actions](https://github.com/Mango/slideout#user-content-slideoutopen) implementation
