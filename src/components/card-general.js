import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import * as Markdown from 'react-markdown'

const MainContainerOuter = styled.div`
  width: 100%;
  background: white;
  margin-bottom: 1em;
`

const SidebarTitle = styled.div`
  background: #f6f6f6;
  padding: 1em;
  h3 {
    margin: 0;
  }
  border-radius: 0.25em 0.25em 0 0;
`
const SidebarContent = styled.div`
  padding: 2em;
  border-radius: 0 0 0.25em 0.25em;
`

class CardGeneral extends React.Component {
  render() {
    return (
      <MainContainerOuter
        className={
          'border-radius shadow-md sidebar-card' +
          (this.props.className ? ' ' + this.props.className : null)
        }
      >
        {this.props.title ? (
          <SidebarTitle className="sidebar-title-container">
            <h3>{this.props.title}</h3>
          </SidebarTitle>
        ) : null}
        <SidebarContent className="card-body">
          {this.props.children}
        </SidebarContent>
      </MainContainerOuter>
    )
  }
}

export default CardGeneral
