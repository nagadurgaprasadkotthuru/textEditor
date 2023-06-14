import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  Container,
  HeadingImageContainer,
  Heading,
  Image,
  EditorContainer,
  IconsContainer,
  ListItem,
  IconButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBoldActive: false, isItalicActive: false, isUnderlineActive: false}

  onClickBold = () =>
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))

  onClickItalic = () =>
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))

  onClickUnderline = () =>
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <BgContainer>
        <Container>
          <HeadingImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </HeadingImageContainer>
          <EditorContainer>
            <IconsContainer>
              <ListItem>
                <IconButton
                  data-testid="bold"
                  type="button"
                  isActive={isBoldActive}
                  onClick={this.onClickBold}
                >
                  <VscBold />
                </IconButton>
              </ListItem>
              <ListItem>
                <IconButton
                  data-testid="italic"
                  type="button"
                  isActive={isItalicActive}
                  onClick={this.onClickItalic}
                >
                  <GoItalic />
                </IconButton>
              </ListItem>
              <ListItem>
                <IconButton
                  data-testid="underline"
                  type="button"
                  isActive={isUnderlineActive}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline />
                </IconButton>
              </ListItem>
            </IconsContainer>
            <TextArea
              isBold={isBoldActive}
              isItalic={isItalicActive}
              isUnderline={isUnderlineActive}
            />
          </EditorContainer>
        </Container>
      </BgContainer>
    )
  }
}

export default TextEditor
