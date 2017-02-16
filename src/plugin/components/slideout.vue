<template>
  <div>
    <slot/>
  </div>
</template>
<style>
</style>

<script>
  import Slideout from 'slideout'
  export default {
    data () {
      return {}
    },
    props: {
      panel: { default: '#panel' },
      menu: { default: '#menu' },
      padding: { default: 256 },
      tolerance: { default: 70 },
      touch: { default: true },
      easing: { default: 'ease' },
      side: { default: 'left' },
      toggleSelectors: { default: function () {
        return []
      } }
    },
    mounted: function () {
      var slideout = new Slideout({
        'panel': document.querySelector(this.panel),
        'menu': document.querySelector(this.menu),
        'padding': this.padding,
        'tolerance': this.tolerance,
        'touch': this.touch,
        'easing': this.easing,
        'side': this.side
      })
      console.log(this.toggleSelectors)
      this.toggleSelectors.forEach(selector => {
        document.querySelector(selector).addEventListener('click', function () {
          slideout.toggle()
        })
      })
    }
  }
</script>
