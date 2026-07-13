import { useState } from 'react'
import classes from './MainNavigation.module.css'
import SideDrawer from './SideDrawer'

export default function MainNavigation() {

    const [isOpen, setIsOpen] = useState(false)

    console.log(isOpen)

    function handleOpenDrawer() {
        setIsOpen(true)
    }

    function handleCloseDrawer() {
        setIsOpen(false)
    }

    return (
        <>
            <header className={classes.header}>
                <h1>Demo app</h1>
                <button className={classes.btn} onClick={handleOpenDrawer}>
                    <div />
                    <div />
                    <div />
                </button>
            </header>
            {isOpen && <SideDrawer onClose={handleCloseDrawer} />}
        </>
    )
}