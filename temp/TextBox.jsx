import classes from './TextBox.module.css'

export default function TextBox({ mode, children }) {

    let cssClasses

    if (mode === 'alert') {
        cssClasses = classes.alert
    }
    else if (mode === 'info') {
        cssClasses = classes.info
    }

    return <p className={cssClasses}>{children}</p>
}