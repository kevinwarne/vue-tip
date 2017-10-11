<template>
  <div id = 'demo'>

    <div class = 'example-text'>
      Here is an example of a tooltip with absolute placement.
    </div>
    <div class = 'example'>
      <tip position = 'auto-center'>
        <!-- trigger should use the default tip slot -->
        <div class = 'trigger'>Hover</div>
        <!-- tip content should be slotted in under the 'tip' identifier -->
        <span slot = 'tip'>
          Some additional content! <strong>HTML</strong> can be <i>used</i> here..
        </span>
      </tip>
    </div>

    <div class = 'example-text'>
      Here is an example of a tooltip with fixed placement.
    </div>
    <div class = 'example'>
      <tip :fixed = 'true' position = 'auto-center' :width = '250'>
        <!-- trigger should use the default tip slot -->
        <div class = 'trigger'>Hover</div>
        <!-- tip content should be slotted in under the 'tip' identifier -->
        <span slot = 'tip'>
          I am fixed to the page. Useful when trying to display outside of a
          container with complicated css scrolling or positioning.
        </span>
      </tip>
    </div>

    <div class = 'example-text'>
      These tooltips use an auto position.
    </div>
    <div class = 'example-table'>
      <div class = 'example-row'>
        <div class = 'example-cell'>
          <tip position = 'auto-auto'>
            <!-- trigger should use the default tip slot -->
            <div class = 'trigger'>Hover</div>
            <!-- tip content should be slotted in under the 'tip' identifier -->
            <span slot = 'tip'>
              This tooltip is on the right.
            </span>
          </tip>
        </div>
        <div class = 'example-cell'>
          <tip position = 'auto-auto'>
            <!-- trigger should use the default tip slot -->
            <div class = 'trigger'>Hover</div>
            <!-- tip content should be slotted in under the 'tip' identifier -->
            <span slot = 'tip'>
              This tooltip is in the center.
            </span>
          </tip>
        </div>
        <div class = 'example-cell'>
          <tip position = 'auto-auto'>
            <!-- trigger should use the default tip slot -->
            <div class = 'trigger'>Hover</div>
            <!-- tip content should be slotted in under the 'tip' identifier -->
            <span slot = 'tip'>
              This tooltip is on the left.
            </span>
          </tip>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { Tip } from '../src/index'

  export default {
    components: {
      Tip
    }
  }
</script>

<style scoped>
  .example {
    display: table;
    margin: auto;
    text-align: center;
  }

  .example-table {
    display: table;
    width: 100%;
  }

  .example-row {
    display: table-row;
  }

  .example-cell {
    display: table-cell;
    text-align: center;
  }

  .example-text {
    text-align: center;
    margin-top: 100px;
  }

  .trigger {
    width: 100%;
    transition: all 0.25s;
    display: inline-block;
    margin-top: 40px;
    padding: 20px;
    padding-top: 30px;
    padding-bottom: 10px;
    text-align: center;
    border: 2px solid rgb(79,192,141);
    background: white;
    color: rgb(79,192,141);
    border-radius: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .trigger:hover {
    background: rgb(79,192,141);
    color: white;
  }
</style>
