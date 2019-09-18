import React from 'react'
import styles from './index.module.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.$vm = React.createRef()
    this.state = {
      content: '',
      renderContent: [],
      input: ''
    }
  }

  contentClick() {
    this.$vm.current.focus()
  }

  changeHandler(e) {
    const content = e.target.value
    const arr = content.split('\n')
    this.setState({
      content,
      renderContent: arr
    })
  }

  render() {
    const { content, renderContent } = this.state

    return (
      <div className="App">
        <textarea
          ref={this.$vm}
          onChange={e => this.changeHandler(e)}
        ></textarea>
        <div className={styles.content} onClick={() => this.contentClick()}>
          {renderContent.map((item, index) => (
            <div key={index}>
              {item ? <span>{item}</span> : <span>&#8203;</span>}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
