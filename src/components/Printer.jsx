import React, { Component } from 'react'
import logo from '../assets/printi_logo_transparent.svg'

class Printer extends Component {
  render() {
    const { match: { params: { printer } } } = this.props
    return (
      <>
        <div
          id="titlecontainer"
          style={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              width: 250,
              height: 80,
              paddingTop: 30,
              paddingBottom: 20,
              alignContent: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                }}
              >
                <h1>
                  <img
                    src={logo}
                    width={100}
                    height={34}
                    alt="printi"
                    title="printi"
                  />
                </h1>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 180,
                  bottom: -76,
                }}
                id="printername"
              >
                <h1>
                  {`/${printer}`}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: '0 auto',
            width: 250,
            alignContent: 'center',
            textAlign: 'center',
            }}
          >
          <div id="receiptcontainer">
            <div id="receipt">
              <div id="preview">
                <img id="previewimg" src="#" width={250} alt="preview"/>
                <div id="curtain"></div>
              </div>
              <div id="formcontainer">
                <form id="leform" action="" method="post" enctype="multipart/form-data" target="responseframe">
                  <input
                    id="filepicker"
                    type="file"
                    name="theshiz"
                    accept="image/*"
                  />
                </form>
              </div>
            </div>
          </div>
          <div id="explain">
            <a href="https://github.com/fons-/printi/blob/master/README.md">
              What is printi?
            </a>
          </div>
          <span id="logje"></span>
          <iframe
            name="responseframe"
            title="response"
            style={{ display: 'none' }}
          >
          </iframe>
        </div>
      </>
    )
  }
}

export default Printer
