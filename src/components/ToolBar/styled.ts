import styled from '@emotion/styled'

type ToolbarItemProps = {
  isActive: boolean
}

export const ToolbarItem = styled.button<ToolbarItemProps>`
  background-color: white;
  border: 1px solid #c4c4c4;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  ${(props) => props.isActive && `color: #134CD8;`}
`
