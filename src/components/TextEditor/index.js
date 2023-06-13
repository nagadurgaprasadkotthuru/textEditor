import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './index.css'

class TextEditor extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <div className="heading-image-container">
            <h1 className="heading">Text Editor</h1>
            <img
              className="image"
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </div>
          <div className="editor-container">
            <div className="icons-container">
              <button data-testid="bold" className="icon-button" type="button">
                <VscBold className="icon" />
              </button>
              <button
                data-testid="italic"
                className="icon-button"
                type="button"
              >
                <GoItalic className="icon" />
              </button>
              <button
                data-testid="underline"
                className="icon-button"
                type="button"
              >
                <AiOutlineUnderline className="icon" />
              </button>
            </div>
            <textarea className="text-area" />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
