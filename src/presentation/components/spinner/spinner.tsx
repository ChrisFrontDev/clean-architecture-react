/* eslint-disable react/prop-types */
import React from 'react'
import Styles from './spinner-styles.scss'
type StyledProps = {
  className?: string
}
type Props = React.AllHTMLAttributes<HTMLElement>

const Spinner: React.FC<StyledProps> = (props: Props) => {
  return (
    <div {...props} className={[Styles.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
