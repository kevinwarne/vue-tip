<template>
  <span
    :class = 'classes'
    @mouseenter = 'mouseEnter'
    @mouseleave = 'mouseLeave'
    @touchstart = 'touchStart'
    @touchend = 'touchEnd'
  >
    <span class = 'vt-trigger' ref = 'trigger'>
      <slot></slot>
    </span>
    <div class = 'vt-tip-anchor' :style = 'anchorStyle'>
      <transition name = 'vt-tip-fade'>
        <span
          class = 'vt-tip'
          :style = 'tipStyle'
           v-if = 'active'
        >
          <span class = 'vt-content'>
            <slot name = 'tip'></slot>
          </span>
        </span>
      </transition>
      <transition name = 'vt-arrow-fade'>
        <span
          class = 'vt-arrow'
          v-if = 'active'
        ></span>
      </transition>
    </div>
  </span>
</template>

<script>
  export default {
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
    },

    data () {
      return {
        // mouse coords
        x: 0,
        y: 0,
        // keep track of hovered state
        hovered: false,
        // keep track of touched state
        touched: false,
        // keep track of position 'auto' placements based on cursor position
        // when entering / exiting the trigger.
        autoVertical: null,
        autoHorizontal: null,
        // keep track of bounding rect for the trigger so that a identical
        // fixed wrapper can be used to anchor the tooltip to when fixed
        // positioning is used
        rect: null
      }
    },

    computed: {
      positionSplit () {
        return this.position.split('-')
      },

      positionVertical () {
        return this.positionSplit[0]
      },

      positionHorizontal () {
        return this.positionSplit[1]
      },

      vertical () {
        return this.positionVertical !== 'auto' ? this.positionVertical : this.autoVertical
      },

      horizontal () {
        return this.positionHorizontal !== 'auto' ? this.positionHorizontal : this.autoHorizontal
      },

      classes () {
        return [
          'vt',
          this.fixed ? 'vt-fixed' : null,
          this.vertical ? 'vt-' + this.vertical : null,
          this.horizontal ? 'vt-' + this.horizontal : null
        ]
      },

      tipStyle () {
        return {
          width: this.width + 'px'
        }
      },

      // position tooltip anchor accordingly
      anchorStyle () {
        if (this.rect && (this.active)) {
          if (this.fixed) {
            return {
              width: this.rect.width + 'px',
              height: this.rect.height + 'px',
              top: (this.rect.top + this.offsetY) + 'px',
              left: (this.rect.left + this.offsetY) + 'px',
              position: 'fixed'
            }
          } else {
            return {
              width: this.rect.width + 'px',
              height: this.rect.height + 'px',
              top: this.offsetY + 'px',
              left: this.offsetY + 'px',
              position: 'absolute'
            }
          }
        } else {
          return {
            display: 'none'
          }
        }
      },

      active () {
        return this.hovered || this.touched
      }
    },

    methods: {
      updateDimensions (touched = false) {
        if (this.y > document.documentElement.clientHeight / 2 || touched) {
          this.autoVertical = 'top'
        } else {
          this.autoVertical = 'bottom'
        }

        if (this.x < document.documentElement.clientWidth * (1 / 3)) {
          this.autoHorizontal = 'right'
        } else if (this.x > document.documentElement.clientWidth * (2 / 3)) {
          this.autoHorizontal = 'left'
        } else {
          this.autoHorizontal = 'center'
        }

        this.rect = this.$refs.trigger.getBoundingClientRect()
      },

      mouseEnter (e) {
        this.x = e.clientX
        this.y = e.clientY
        this.updateDimensions()
        this.hovered = true
      },

      mouseLeave () {
        this.hovered = false
      },

      touchStart (e) {
        this.x = e.touches[0].clientX
        this.y = e.touches[0].clientY
        this.updateDimensions(true)
        this.touched = true
      },

      touchEnd () {
        this.touched = false
      }
    }
  }
</script>

<style scoped>
</style>
