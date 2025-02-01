import { Link } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'

const linkStyleCSS = css`
  padding: 0.4em 1.25em;
  font-size: inherit;
  color: white;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  font-weight: 300;
  margin: 0px;
  text-decoration: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 3px;
`

const ButtonOuter = styled.button`
  padding: 0.4em 1.25em;
  font-size: inherit;
  color: white;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  font-weight: 300;
  margin: 0px;
  text-decoration: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 3px;
  cursor: pointer;
`

const ButtonOuterLink = styled(Link)(linkStyleCSS)
const ButtonOuterA = styled('a')(linkStyleCSS)

class Button extends React.Component {
  render() {
    return (
      <>
        {this.props.to ? (
          <ButtonOuterLink
            title={
              this.props && this.props.title
                ? this.props.title
                : this.props.children
            }
            to={this.props.to}
            className={
              'border-radius button-style-primary ' +
              'button-style-' +
              this.props.color +
              (this.props.className ? ' ' + this.props.className : '')
            }
          >
            {this.props.children
              ? this.props.children
              : '@TODO Add Button Content'}
          </ButtonOuterLink>
        ) : this.props.href ? (
          <ButtonOuterA
            title={
              this.props && this.props.title
                ? this.props.title
                : this.props.children
            }
            href={this.props.href}
            onClick={e => {
              e.preventDefault()
              this.props.onClick(e)
            }}
            className={
              'border-radius button-style-primary ' +
              'button-style-' +
              this.props.color +
              (this.props.className ? ' ' + this.props.className : '')
            }
          >
            {this.props.children
              ? this.props.children
              : '@TODO Add Button Content'}
          </ButtonOuterA>
        ) : (
          <ButtonOuter
            {...this.props}
            role={this.props.role}
            type={this.props.type}
            className={
              'border-radius button-style-primary ' +
              'button-style-' +
              this.props.color +
              (this.props.className ? ' ' + this.props.className : '')
            }
          >
            {this.props.children
              ? this.props.children
              : '@TODO Add Button Content'}
          </ButtonOuter>
        )}
      </>
    )
  }
}

export default Button
