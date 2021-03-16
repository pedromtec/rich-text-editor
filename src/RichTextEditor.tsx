import React, { useState } from 'react'
import { Editor as DraftEditor, EditorState, RichUtils } from 'draft-js'

import styles from './RichTextEditor.module.css'
import './Draftjs.css'
import ToolBar from './components/ToolBar'

function RichTextEditor() {
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  )

  const handleKeyCommand = (command: string, currentState: EditorState) => {
    const newEditorState = RichUtils.handleKeyCommand(currentState, command)

    if (newEditorState) {
      setEditorState(newEditorState)

      return 'handled'
    }

    return 'not-handled'
  }

  return (
    <div className={`${styles.editorWrapper}`}>
      <div className={`${styles.editorContainer}`}>
        <DraftEditor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
      <ToolBar editorState={editorState} updateEditorState={setEditorState} />
    </div>
  )
}

export default RichTextEditor
