import React from 'react'

import { InlineStyles } from './InlineStyles'
import styles from './styles.module.css'

type Props = {
  editorState: any
  updateEditorState: (newEditorState: any) => void
}

export default function ToolBar(props: Props) {
  return (
    <div className={styles.toolbarContainer}>
      <InlineStyles {...props} />
    </div>
  )
}
