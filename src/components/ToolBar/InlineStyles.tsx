import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBold,
  faItalic,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons'
import { RichUtils } from 'draft-js'
import type { EditorState } from 'draft-js'
import React from 'react'

import { ToolbarItem } from './styled'

const inlineStyles = [
  {
    label: 'bold',
    style: 'BOLD',
    icon: <FontAwesomeIcon icon={faBold} />,
  },
  {
    label: 'italic',
    style: 'ITALIC',
    icon: <FontAwesomeIcon icon={faItalic} />,
  },
  {
    label: 'underline',
    style: 'UNDERLINE',
    icon: <FontAwesomeIcon icon={faUnderline} />,
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
          {item.icon}
        </ToolbarItem>
      ))}
    </>
  )
}
