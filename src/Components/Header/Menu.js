import React from 'react'
import Container from '../UI/Container'
import classes from './Menu.module.css'

const Menu = () => {
  return (
    <Container>
        <div className={classes.menu}>
            <div className={classes.menu_item}>Portfolio</div>
            <div className={classes.menu_item}>MusArt</div>
            <div className={classes.menu_item}>Contact Me</div>
        </div>
    </Container>
  )
}

export default Menu