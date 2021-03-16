import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBold,
  faItalic,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons'
import { RichUtils } from 'draft-js'
import type { EditorState } from 'draft-js'
import React from 'react'

import styles from './styles.module.css'

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

  return (
    <>
      {inlineStyles.map((item) => (
        <button
          key={item.label}
          className={`${styles.toolbarItem}`}
          onClick={() => addInlineStyle(item.style)}
        >
          {item.icon}
        </button>
      ))}
    </>
  )
}
