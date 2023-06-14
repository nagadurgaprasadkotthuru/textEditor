import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Container = styled.div`
  background-color: #1b1c22;
  padding: 15px;
  width: 50%;
  display: flex;
  justify-content: space-between;
`

export const HeadingImageContainer = styled.div`
  width: 50%;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 26px;
  text-align: center;
`

export const Image = styled.img`
  width: 300px;
`

export const EditorContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  border: 1px solid #334155;
  border-radius: 10px;
`

export const IconsContainer = styled.ul`
  margin-bottom: 0px;
  border-bottom: 1px solid #334155;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
`

export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: 0px;
  margin-right: 15px;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  margin-top: 0px;
  background-color: transparent;
  width: 100%;
  height: 400px;
  border: 0px;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  color: #f8fafc;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
