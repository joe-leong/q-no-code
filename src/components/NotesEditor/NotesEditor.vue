<template>
  <div class="notes-editor-wrapper">
    <div class="notes-editor-header" v-if="editable">
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleBold().run()"
      >
        <text-bold />
      </button>
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleItalic().run()"
      >
        <text-italic />
      </button>
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleStrike().run()"
      >
        <strikethrough />
      </button>
    </div>
    <editor-content class="notes-editor-content" :editor="editor" />
  </div>
</template>

<script setup lang="ts">
import { TextBold, TextItalic, Strikethrough } from '@icon-park/vue-next'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { ColorHighlighter } from './extensions/ColorHighLighter'

const editable = inject('editable', true)
const editor = useEditor({
  extensions: [
    StarterKit.configure({
      bold: {
        HTMLAttributes: {
          class: 'custom-bold'
        }
      }
    }),
    ColorHighlighter
  ],
  editable,
  content: `
    <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
    <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
    <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
  `
})
</script>

<style scoped>
.notes-editor-wrapper {
  flex: 1;
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-gray-300);
  border-radius: 6px;
  height: 100%;
}

.notes-editor-header {
  display: flex;
  padding: 8px 12px;
  font-size: var(--font-size-large);
  background-color: var(--color-gray-200);
}

.notes-editor-header-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: var(--color-text);
  background-color: transparent;
}

.notes-editor-header-button:hover {
  background-color: var(--color-gray-300);
}

.notes-editor-content {
  padding: 8px 12px;
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>

<style lang="css">
/* Basic editor styles */
/* stylelint-disable */
.ProseMirror {
  font-size: var(--font-size-large);
  outline: none;
  font-weight: normal;
  > * + * {
    margin-top: 0.75em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

/* Color swatches */
.color {
  white-space: nowrap;

  &::before {
    content: ' ';
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 1px solid rgba(128, 128, 128, 0.3);
    vertical-align: middle;
    margin-right: 0.1em;
    margin-bottom: 0.15em;
    border-radius: 2px;
    background-color: var(--color);
  }
}
</style>
