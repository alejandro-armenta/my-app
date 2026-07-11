import classes from './SideDrawer.module.css'

export default function SideDrawer({ onClose }) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />

            <aside className={classes.drawer}>
            
            </aside>

        </>
    )
}