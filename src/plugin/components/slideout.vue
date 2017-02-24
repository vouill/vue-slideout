<template>
  <div>
    <slot/>
  </div>
</template>
<style>
</style>

<script>
  //  import Slideout from 'slideout'
  const Slideout = require('slideout')

  export default {
    data () {
      return {
        slideout: null
      }
    },
    props: {
      panel: { default: '#panel' },
      menu: { default: '#menu' },
      padding: { default: 256 },
      tolerance: { default: 70 },
      touch: { default: true },
      easing: { default: 'ease' },
      side: { default: 'left' },
      duration: { default: 300 },
      toggleSelectors: {
        default: function () {
          return []
        }
      }
    },
    name: 'Slideout',
    mounted: function () {
      this.slideout = new Slideout({
        'panel': document.querySelector(this.panel),
        'menu': document.querySelector(this.menu),
        'padding': this.padding,
        'tolerance': this.tolerance,
        'touch': this.touch,
        'easing': this.easing,
        'side': this.side,
        'duration': this.duration
      })
      this.toggleSelectors.forEach(selector => {
        document.querySelector(selector).addEventListener('click', () => {
          this.slideout.toggle()
        })
      })
      const events = ['beforeclose', 'close', 'beforeopen', 'open', 'translatestart', 'translate', 'translateend']
      events.forEach(event => {
        this.slideout.on(event, () => {
          this.$emit('on-' + event, event)
        })
        this.slideout.once(event, () => {
          this.$emit('once-' + event, event)
        })
      })
    }
  }
</script>
