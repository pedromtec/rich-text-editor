import { RichUtils } from 'draft-js'
import type { EditorState } from 'draft-js'
import React from 'react'

import { BOLD, ITALIC, UNDERLINE } from './inlineStylesIcon'
import { ToolbarItem } from './styled'

const inlineStyles = [
  {
    label: 'bold',
    style: 'BOLD',
    Icon: BOLD,
  },
  {
    label: 'italic',
    style: 'ITALIC',
    Icon: ITALIC,
  },
  {
    label: 'underline',
    style: 'UNDERLINE',
    Icon: UNDERLINE,
  },
]

type Props = {
  editorState: EditorState
  updateEditorState: (newEditorState: EditorState) => void
}

export function InlineStyles({ editorState, updateEditorState }: Props) {
  const addInlineStyle = (style: string) => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  const isActive = (style: string) => {
    const currentStyle = editorState.getCurrentInlineStyle()

    return currentStyle.has(style)
  }

  return (
    <>
      {inlineStyles.map((item) => (
        <ToolbarItem
          isActive={isActive(item.style)}
          key={item.label}
          onClick={() => addInlineStyle(item.style)}
        >
          {<item.Icon color={isActive(item.style) ? '#134CD8' : undefined} />}
        </ToolbarItem>
      ))}
    </>
  )
}
