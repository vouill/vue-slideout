<template>
  <div id="app">
    <Slideout :toggleSelectors="['.toggle-button']" @on-open="logger">
      <Hello/>
    </Slideout>
  </div>
</template>

<script>
  import Hello from './components/Hello'
//  import Slideout from './plugin/plugin'
  import Slideout from './plugin/components/slideout.js'

  export default {
    name: 'app',
    components: {
      Hello,
      Slideout
    },
    mounted: function () {
      console.log(this.$children[0].slideout.isOpen())
    },
    methods: {
      logger: function () {
        console.log('open event')
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
