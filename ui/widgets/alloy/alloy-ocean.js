import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`<style>
  @font-face {
    font-family: 'alloyeditor-ocean';
    src:url('fonts/alloyeditor-ocean.eot');
    src:url('fonts/alloyeditor-ocean.eot?#iefix') format('embedded-opentype'),
    url('fonts/alloyeditor-ocean.woff') format('woff'),
    url('fonts/alloyeditor-ocean.ttf') format('truetype'),
    url('fonts/alloyeditor-ocean.svg#alloyeditor-ocean') format('svg');
    font-weight: normal;
    font-style: normal;
  }
</style><dom-module id="alloy-ocean">
  <template>
    <style>
      [class*="ae-icon-"], [class*=" ae-icon-"] {
        display: block;
        font-family: 'alloyeditor-ocean';
        speak: none;
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1.2;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }


      .ae-icon-add:before {
        content: "\\";
      }

      .ae-icon-align-center:before {
        content: "\\";
      }

      .ae-icon-align-justified:before {
        content: "\\";
      }

      .ae-icon-align-left:before {
        content: "\\";
      }

      .ae-icon-align-right:before {
        content: "\\";
      }

      .ae-icon-arrow:before {
        content: "\\";
      }

      .ae-icon-audio:before {
        content: "\\";
      }

      .ae-icon-bin:before {
        content: "\\";
      }

      .ae-icon-bold:before {
        content: "\\";
      }

      .ae-icon-bulleted-list:before {
        content: "\\";
      }

      .ae-icon-camera:before {
        content: "\\";
      }

      .ae-icon-cell:before {
        content: "\\";
      }

      .ae-icon-close:before {
        content: "\\";
      }

      .ae-icon-code:before {
        content: "\\";
      }

      .ae-icon-column:before {
        content: "\\";
      }

      .ae-icon-embed:before {
        content: "\\";
      }

      .ae-icon-folder:before {
        content: "\\";
      }

      .ae-icon-h1:before {
        content: "\\";
      }

      .ae-icon-h2:before {
        content: "\\";
      }

      .ae-icon-image:before {
        content: "\\";
      }

      .ae-icon-indent-block:before {
        content: "\\";
      }

      .ae-icon-italic:before {
        content: "\\";
      }

      .ae-icon-link:before {
        content: "\\";
      }

      .ae-icon-numbered-list:before {
        content: "\\";
      }

      .ae-icon-ok:before {
        content: "\\";
      }

      .ae-icon-outdent-block:before {
        content: "\\";
      }

      .ae-icon-quote:before {
        content: "\\";
      }

      .ae-icon-redo:before {
        content: "\\";
      }

      .ae-icon-remove:before {
        content: "\\";
      }

      .ae-icon-removeformat:before {
        content: "\\";
      }

      .ae-icon-row:before {
        content: "\\";
      }

      .ae-icon-separator:before {
        content: "\\";
      }

      .ae-icon-strike:before {
        content: "\\";
      }

      .ae-icon-subscript:before {
        content: "\\";
      }

      .ae-icon-superscript:before {
        content: "\\";
      }

      .ae-icon-table:before {
        content: "\\";
      }

      .ae-icon-twitter:before {
        content: "\\";
      }

      .ae-icon-underline:before {
        content: "\\";
      }

      .ae-icon-undo:before {
        content: "\\";
      }

      .ae-icon-unlink:before {
        content: "\\";
      }

      .ae-icon-video:before {
        content: "\\";
      }
      @charset "UTF-8";
      /** GENERAL VARIABLES */
      /** COMPONENT VARIABLES **/
      /** DROPDOWN-LISTBOX **/
      /** DROPDOWN-LISTBOX HEADER **/
      /** DROPDOWN-LISTBOX ITEM */
      /**
       * The order of imports is as follow:
       * CSS for outer (parent) components should precede
       * the CSS of nested components or components which
       * stay on the same level in the hierarchy.
       */
      .ae-placeholder:not(:focus):before {
        content: attr(data-placeholder);
        position: absolute; }

      .ae-twitter-link {
        padding: 0 5px; }
      .ae-twitter-link:after {
        display: inline-block;
        margin: 0 0 0 4px;
        vertical-align: middle; }

      .ae-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0; }

      .ae-ui IE10-PLUS::-ms-reveal, .ae-ui [class^=ae-toolbar] {
        height: auto;
        box-sizing: content-box; }

      .ae-ui .ae-toolbar, .ae-ui [class^=ae-toolbar-] {
        line-height: 1;
        padding: 10px;
        position: absolute; }
      .ae-ui .ae-toolbar input, .ae-ui .ae-toolbar textarea, .ae-ui .ae-toolbar keygen, .ae-ui .ae-toolbar select, .ae-ui .ae-toolbar button, .ae-ui [class^=ae-toolbar-] input, .ae-ui [class^=ae-toolbar-] textarea, .ae-ui [class^=ae-toolbar-] keygen, .ae-ui [class^=ae-toolbar-] select, .ae-ui [class^=ae-toolbar-] button {
        font-size: 14px; }
      .ae-ui .ae-toolbar.ae-toolbar-transition, .ae-ui [class^=ae-toolbar-].ae-toolbar-transition {
        -webkit-transition-property: height, left, opacity, top;
        -moz-transition-property: height, left, opacity, top;
        transition-property: height, left, opacity, top;
        -webkit-transition-duration: 0.15s;
        -moz-transition-duration: 0.15s;
        transition-duration: 0.15s;
        -webkit-transition-timing-function: ease-out;
        -moz-transition-timing-function: ease-out;
        transition-timing-function: ease-out; }
      .ae-ui .ae-toolbar .ae-button, .ae-ui .ae-toolbar .ae-toolbar-element, .ae-ui [class^=ae-toolbar-] .ae-button, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element {
        border-width: 0;
        color: inherit;
        cursor: pointer;
        margin: 0;
        padding: 0; }
      .ae-ui .ae-toolbar .ae-button:hover:disabled, .ae-ui .ae-toolbar .ae-button:hover.ae-button-disabled, .ae-ui .ae-toolbar .ae-button:focus:disabled, .ae-ui .ae-toolbar .ae-button:focus.ae-button-disabled, .ae-ui .ae-toolbar .ae-toolbar-element:hover:disabled, .ae-ui .ae-toolbar .ae-toolbar-element:hover.ae-button-disabled, .ae-ui .ae-toolbar .ae-toolbar-element:focus:disabled, .ae-ui .ae-toolbar .ae-toolbar-element:focus.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-button:hover:disabled, .ae-ui [class^=ae-toolbar-] .ae-button:hover.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-button:focus:disabled, .ae-ui [class^=ae-toolbar-] .ae-button:focus.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element:hover:disabled, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element:hover.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element:focus:disabled, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element:focus.ae-button-disabled {
        color: inherit; }
      .ae-ui .ae-toolbar .ae-button:disabled, .ae-ui .ae-toolbar .ae-button.ae-button-disabled, .ae-ui .ae-toolbar .ae-toolbar-element:disabled, .ae-ui .ae-toolbar .ae-toolbar-element.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-button:disabled, .ae-ui [class^=ae-toolbar-] .ae-button.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element:disabled, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element.ae-button-disabled {
        cursor: auto;
        opacity: 0.3; }
      .ae-ui .ae-toolbar .ae-button, .ae-ui [class^=ae-toolbar-] .ae-button {
        height: 24px;
        width: 24px; }

      .ae-ui .ae-toolbar-add {
        border: solid 0 transparent;
        padding: 0; }
      .ae-ui .ae-toolbar-add .ae-button {
        height: 24px;
        width: 24px; }

      .ae-ui .ae-toolbar-styles {
        box-sizing: border-box;
        max-width: 100%; }

      .ae-ui .ae-arrow-box:after {
        content: '';
        margin: auto;
        position: absolute; }

      .ae-ui .ae-arrow-box.ae-arrow-box-bottom:after {
        height: 0;
        width: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 4px solid currentColor;
        left: 0;
        right: 0;
        top: 100%; }

      .ae-ui .ae-arrow-box.ae-arrow-box-top:after {
        height: 0;
        width: 0;
        border-bottom: 4px solid currentColor;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        left: 0;
        right: 0;
        top: -4px; }

      .ae-ui .ae-arrow-box.ae-arrow-box-top-left:after {
        height: 0;
        width: 0;
        border-bottom: 4px solid currentColor;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        left: 15px;
        top: -4px; }

      .ae-ui .ae-arrow-box.ae-arrow-box-top-right:after {
        height: 0;
        width: 0;
        border-bottom: 4px solid currentColor;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 15px;
        top: -4px; }

      .ae-ui .ae-arrow-box.ae-arrow-box-left:after {
        height: 0;
        width: 0;
        border-bottom: 5px solid transparent;
        border-right: 4px solid currentColor;
        border-top: 5px solid transparent;
        left: -4px;
        top: 0;
        bottom: 0; }

      .ae-ui .ae-arrow-box.ae-arrow-box-right:after {
        height: 0;
        width: 0;
        border-bottom: 5px solid transparent;
        border-left: 4px solid currentColor;
        border-top: 5px solid transparent;
        right: -4px;
        top: 0;
        bottom: 0; }

      .ae-ui .ae-container, .ae-ui [class^=ae-container-] {
        -webkit-box-align: center;
        -moz-box-align: center;
        box-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        align-items: center;
        -ms-flex-align: center;
        display: -webkit-inline-box;
        display: -moz-inline-box;
        display: inline-box;
        display: -webkit-inline-flex;
        display: -moz-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-orient: horizontal;
        -moz-box-orient: horizontal;
        box-orient: horizontal;
        -webkit-box-direction: normal;
        -moz-box-direction: normal;
        box-direction: normal;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        flex-direction: row;
        -ms-flex-direction: row;
        -webkit-box-lines: multiple;
        -moz-box-lines: multiple;
        box-lines: multiple;
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        box-sizing: border-box; }
      .ae-ui .ae-container *, .ae-ui .ae-container *:after, .ae-ui .ae-container *:before, .ae-ui [class^=ae-container-] *, .ae-ui [class^=ae-container-] *:after, .ae-ui [class^=ae-container-] *:before {
        box-sizing: inherit;
        color: inherit; }
      .ae-ui .ae-container input, .ae-ui .ae-container textarea, .ae-ui .ae-container keygen, .ae-ui .ae-container select, .ae-ui .ae-container button, .ae-ui [class^=ae-container-] input, .ae-ui [class^=ae-container-] textarea, .ae-ui [class^=ae-container-] keygen, .ae-ui [class^=ae-container-] select, .ae-ui [class^=ae-container-] button {
        color: initial; }
      .ae-ui .ae-container .ae-container, .ae-ui .ae-container [class^=ae-container-], .ae-ui .ae-container .ae-button, .ae-ui .ae-container .ae-toolbar-element, .ae-ui .ae-container label, .ae-ui [class^=ae-container-] .ae-container, .ae-ui [class^=ae-container-] [class^=ae-container-], .ae-ui [class^=ae-container-] .ae-button, .ae-ui [class^=ae-container-] .ae-toolbar-element, .ae-ui [class^=ae-container-] label {
        font-size: 14px;
        margin: 0;
        position: relative; }
      .ae-ui .ae-container .ae-container:not(:last-child), .ae-ui .ae-container [class^=ae-container-]:not(:last-child), .ae-ui .ae-container .ae-button:not(:last-child), .ae-ui .ae-container .ae-toolbar-element:not(:last-child), .ae-ui .ae-container label:not(:last-child), .ae-ui [class^=ae-container-] .ae-container:not(:last-child), .ae-ui [class^=ae-container-] [class^=ae-container-]:not(:last-child), .ae-ui [class^=ae-container-] .ae-button:not(:last-child), .ae-ui [class^=ae-container-] .ae-toolbar-element:not(:last-child), .ae-ui [class^=ae-container-] label:not(:last-child) {
        margin-right: 10px; }

      .ae-ui .ae-container-edit-link, .ae-ui .ae-container-edit-table {
        height: 24px \\9; }
      .ae-ui .ae-container-edit-link *, .ae-ui .ae-container-edit-table * {
        float: left \\9; }
      .ae-ui .ae-container-edit-link label, .ae-ui .ae-container-edit-table label {
        padding: 0;
        position: relative \\9;
        top: 25% \\9;
        transform: translateY(-50%) \\9; }
      .ae-ui .ae-container-edit-link IE10-PLUS::-ms-reveal, .ae-ui .ae-container-edit-link label, .ae-ui .ae-container-edit-table IE10-PLUS::-ms-reveal, .ae-ui .ae-container-edit-table label {
        top: 0;
        transform: translateY(0); }

      .ae-ui .ae-container-input {
        -webkit-box-lines: single;
        -moz-box-lines: single;
        box-lines: single;
        -webkit-flex-wrap: nowrap;
        -moz-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        width: 192px; }
      .ae-ui .ae-container-input.xxl {
        width: 336px; }
      .ae-ui .ae-container-input.medium {
        width: 72px; }
      .ae-ui .ae-container-input.small {
        width: 36px; }
      .ae-ui .ae-container-input input, .ae-ui .ae-container-input .ae-input {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 24px;
        margin: 0;
        max-width: 100%;
        padding: 0 0 0 4px;
        display: inline-block \\9;
        width: 168px \\9; }
      .ae-ui .ae-container-input .ae-container-dropdown {
        padding-left: 10px; }
      .ae-ui .ae-container-input .ae-icon-remove {
        float: right \\9; }

      .ae-ui .ae-container-dropdown, .ae-ui [class^=ae-container-dropdown-] {
        float: left \\9;
        width: 120px !important; }
      .ae-ui .ae-container-dropdown > .ae-toolbar-element, .ae-ui [class^=ae-container-dropdown-] > .ae-toolbar-element {
        float: left \\9;
        height: 24px;
        text-align: left;
        width: 100%; }
      .ae-ui .ae-container-dropdown > .ae-toolbar-element .ae-container, .ae-ui [class^=ae-container-dropdown-] > .ae-toolbar-element .ae-container {
        padding: 0;
        height: 100% \\9;
        width: 100%; }
      .ae-ui .ae-container-dropdown > .ae-toolbar-element .ae-container .ae-icon-arrow, .ae-ui [class^=ae-container-dropdown-] > .ae-toolbar-element .ae-container .ae-icon-arrow {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        float: right \\9;
        position: absolute \\9;
        right: 0 \\9;
        top: 0 \\9; }
      .ae-ui .ae-container-dropdown > .ae-toolbar-element .ae-container .ae-container-dropdown-selected-item, .ae-ui [class^=ae-container-dropdown-] > .ae-toolbar-element .ae-container .ae-container-dropdown-selected-item {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: inline-block;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative \\9; }
      .ae-ui .ae-container-dropdown > .ae-toolbar-element .ae-container IE10-PLUS::-ms-reveal, .ae-ui .ae-container-dropdown > .ae-toolbar-element .ae-container .ae-container-dropdown-selected-item, .ae-ui [class^=ae-container-dropdown-] > .ae-toolbar-element .ae-container IE10-PLUS::-ms-reveal, .ae-ui [class^=ae-container-dropdown-] > .ae-toolbar-element .ae-container .ae-container-dropdown-selected-item {
        top: 0;
        transform: translateY(0); }

      .ae-ui .ae-container-dropdown-small {
        width: 48px !important; }

      .ae-ui .ae-container-dropdown-medium {
        width: 96px !important; }

      .ae-ui .ae-container-dropdown-xl {
        width: 192px !important; }

      .ae-ui .ae-button-bridge [class*="ae-icon-"], .ae-ui .ae-button-bridge [class*=" ae-icon-"] {
        background-repeat: no-repeat;
        display: block;
        height: 16px;
        width: 16px;
        margin-left: 4px; }

      .ae-ui .ae-has-dropdown {
        display: block;
        float: left \\9;
        /* Set width here (not min-width) to prevent the dropdown container from moving when expanding/collapsing the it */
        width: 24px; }

      .ae-ui .ae-dropdown, .ae-ui [class^=ae-dropdown-] {
        left: 0;
        padding: 4px;
        position: absolute;
        z-index: 0;
        top: 34px; }
      .ae-ui .ae-dropdown .ae-list-header, .ae-ui [class^=ae-dropdown-] .ae-list-header {
        display: inline-block;
        margin: 10px 0 0 0; }
      .ae-ui .ae-dropdown .ae-list-header:first-child, .ae-ui [class^=ae-dropdown-] .ae-list-header:first-child {
        margin-top: 10px; }
      .ae-ui .ae-dropdown .ae-listbox, .ae-ui [class^=ae-dropdown-] .ae-listbox {
        list-style: none;
        margin: 0;
        min-height: 44px;
        min-width: 132px;
        padding: 0; }
      .ae-ui .ae-dropdown .ae-listbox .ae-toolbar-element:hover, .ae-ui [class^=ae-dropdown-] .ae-listbox .ae-toolbar-element:hover {
        color: #1888c3;
      }
      .ae-ui .ae-dropdown .ae-listbox .ae-toolbar-element, .ae-ui [class^=ae-dropdown-] .ae-listbox .ae-toolbar-element {
        color: #000;
        font-size: inherit;
        height: 3em;
        line-height: inherit;
        margin-right: 0;
        max-height: inherit;
        min-width: 100%;
        padding: 0 0 0 8px;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: auto; }
      .ae-ui .ae-dropdown .ae-listbox .ae-toolbar-element *, .ae-ui [class^=ae-dropdown-] .ae-listbox .ae-toolbar-element * {
        display: inline; }
      .ae-ui .ae-dropdown .ae-listbox .ae-toolbar-element[class^=ae-icon-]:before, .ae-ui [class^=ae-dropdown-] .ae-listbox .ae-toolbar-element[class^=ae-icon-]:before {
        padding-right: 10px;
        vertical-align: middle; }
      .ae-ui .ae-dropdown *, .ae-ui [class^=ae-dropdown-] * {
        display: block \\9; }

      .ae-ui .ae-camera {
        align-items: center;
        display: flex;
        flex-flow: column;
        justify-content: center; }
      .ae-ui .ae-camera .ae-camera-canvas {
        left: -10000px;
        position: absolute;
        top: -10000px; }
      .ae-ui .ae-camera .ae-camera-shoot {
        margin-top: 10px; }

      /** GENERAL VARIABLES **/
      /**
       * AUTOGENERATED FONT ICON MAP
       *
       * This map is autogenerated in build-time based on the contents
       * of the icons/svg folder. It maps the generated icon names with
       * their corresponding glyphs.
       *
       * Use this for consistency in any skin where an icon needs to be
       * referenced from within the css like this:
       *
       * .ae-some-link:after {
       *     content: map-get(\$font-icon-map, iconName);
       * }
       */
      /** COLOR PALETTE **/
      /** COMPONENT VARIABLES **/
      /** DROPDOWN-LIST **/
      .ae-editable ::-moz-selection {
        background: #e6f1fa !important;
        color: inherit;
        text-shadow: none; }

      .ae-editable ::selection {
        background: #e6f1fa !important;
        color: inherit;
        text-shadow: none; }

      .ae-twitter-link {
        background-color: #f8f8f8; }
      .ae-twitter-link:after {
        content: "";
        font-family: alloyeditor-ocean; }

      .ae-ui .ae-arrow-box.ae-arrow-box-bottom:after {
        color: #32a8e6; }

      .ae-ui .ae-arrow-box.ae-arrow-box-top:after {
        color: #32a8e6; }

      .ae-ui .ae-arrow-box.ae-arrow-box-top-left:after {
        color: #32a8e6; }

      .ae-ui .ae-arrow-box.ae-arrow-box-top-right:after {
        color: #32a8e6; }

      .ae-ui .ae-arrow-box.ae-arrow-box-left:after {
        color: #32a8e6; }

      .ae-ui .ae-arrow-box.ae-arrow-box-right:after {
        color: #32a8e6; }

      .ae-ui .ae-container-dropdown > .ae-toolbar-element .ae-container .ae-icon-arrow, .ae-ui [class^=ae-container-dropdown-] > .ae-toolbar-element .ae-container .ae-icon-arrow {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg); }

      .ae-ui .ae-container-input {
        background-color: #fff;
        border-radius: 0; }
      .ae-ui .ae-container-input .ae-icon-remove {
        color: #000;
        font-size: 24px;
        line-height: 24px; }
      .ae-ui .ae-container-input .ae-container-dropdown {
        background-color: #fff;
        color: #000; }
      .ae-ui .ae-container-input input, .ae-ui .ae-container-input .ae-input {
        border-radius: 0;
        border-width: 0;
        color: #000;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 14px;
        outline: none; }
      .ae-ui .ae-container-input input::-webkit-input-placeholder, .ae-ui .ae-container-input .ae-input::-webkit-input-placeholder {
        color: #999; }
      .ae-ui .ae-container-input input::-moz-placeholder, .ae-ui .ae-container-input .ae-input::-moz-placeholder {
        color: #999; }
      .ae-ui .ae-container-input input:-moz-placeholder, .ae-ui .ae-container-input .ae-input:-moz-placeholder {
        color: #999; }
      .ae-ui .ae-container-input input:-ms-input-placeholder, .ae-ui .ae-container-input .ae-input:-ms-input-placeholder {
        color: #999; }
      .ae-ui .ae-container-input input:focus, .ae-ui .ae-container-input .ae-input:focus {
        box-shadow: none; }
      .ae-ui .ae-container-input input::-ms-clear, .ae-ui .ae-container-input .ae-input::-ms-clear {
        display: none; }

      .ae-ui .ae-button-bridge [class*="ae-icon-"], .ae-ui .ae-button-bridge [class*=" ae-icon-"] {
        -webkit-filter: brightness(0) invert(100%);
        filter: brightness(0) invert(100%); }
      .ae-ui .ae-button-bridge [class*="ae-icon-"]:hover, .ae-ui .ae-button-bridge [class*=" ae-icon-"]:hover {
        -webkit-filter: sepia(80%) hue-rotate(-20deg) invert(90%) saturate(8);
        filter: sepia(80%) hue-rotate(-20deg) invert(90%) saturate(8); }

      .ae-ui .ae-dropdown, .ae-ui [class^=ae-dropdown-] {
        background-color: #fcfcfc;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0 0 4px 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        color: #000; }
      .ae-ui .ae-dropdown.ae-arrow-box:after, .ae-ui [class^=ae-dropdown-].ae-arrow-box:after {
        color: #fcfcfc;
        display: none; }
      .ae-ui .ae-dropdown .ae-list-header, .ae-ui [class^=ae-dropdown-] .ae-list-header {
        color: #999;
        font-size: small;
        font-style: italic; }
      .ae-ui .ae-dropdown .ae-listbox .ae-toolbar-element:hover, .ae-ui [class^=ae-dropdown-] .ae-listbox .ae-toolbar-element:hover {
        background-color: #fcfcfc; }
      .ae-ui .ae-dropdown .ae-listbox .ae-toolbar-element.active, .ae-ui [class^=ae-dropdown-] .ae-listbox .ae-toolbar-element.active {
        color: #32a8e6; }

      .ae-ui .ae-toolbar, .ae-ui [class^=ae-toolbar-] {
        background-color: #32a8e6;
        border-radius: 4px;
        color: #fff;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }
      .ae-ui .ae-toolbar .ae-button, .ae-ui .ae-toolbar .ae-toolbar-element, .ae-ui [class^=ae-toolbar-] .ae-button, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element {
        background-color: transparent; }
      .ae-ui .ae-toolbar .ae-button:hover, .ae-ui .ae-toolbar .ae-toolbar-element:hover, .ae-ui [class^=ae-toolbar-] .ae-button:hover, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element:hover {
        color: #1888c3; }
      .ae-ui .ae-toolbar .ae-button.ae-button-pressed, .ae-ui .ae-toolbar .ae-toolbar-element.ae-button-pressed, .ae-ui [class^=ae-toolbar-] .ae-button.ae-button-pressed, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element.ae-button-pressed {
        background-color: #1a95d5; }
      .ae-ui .ae-toolbar .ae-button.ae-button-pressed:hover, .ae-ui .ae-toolbar .ae-toolbar-element.ae-button-pressed:hover, .ae-ui [class^=ae-toolbar-] .ae-button.ae-button-pressed:hover, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element.ae-button-pressed:hover {
        color: #1888c3; }
      .ae-ui .ae-toolbar .ae-button.ae-button-disabled, .ae-ui .ae-toolbar .ae-toolbar-element.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-button.ae-button-disabled, .ae-ui [class^=ae-toolbar-] .ae-toolbar-element.ae-button-disabled {
        opacity: 0.3; }

      .ae-ui .ae-toolbar-add {
        background-color: #32a8e6;
        border-color: transparent;
        border-radius: 12px;
        color: #fff; }
      .ae-ui .ae-toolbar-add:hover, .ae-ui .ae-toolbar-add:focus {
        opacity: 0.7; }
      .ae-ui .ae-toolbar-add .ae-button-add:hover, .ae-ui .ae-toolbar-add .ae-button-add:focus {
        color: inherit; }
      .ae-ui .ae-toolbar-add .ae-button-add .ae-icon-add {
        font-size: 12px;
        line-height: 12px; }

    </style>
  </template>
</dom-module>`;

document.head.appendChild(template.content);
