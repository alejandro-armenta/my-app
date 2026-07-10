import { useRef, useState } from 'react'

import classes from './Form.module.css'

function Preferences({ newProdInfo, prodUpdateInfo, onUpdateInfo }) {
    return (
        <div className={classes.group}>
            <label>
                <input type='checkbox' id="pref-new" checked={newProdInfo} onChange={onUpdateInfo.bind(null, 'pref-new')} />
                <span>New Products</span>
            </label>

            <label>
                <input type='checkbox' id="pref-updates" checked={prodUpdateInfo} onChange={onUpdateInfo.bind(null, 'pref-updates')} />
                <span>Product Updates</span>
            </label>
        </div >
    )
}

export default function Form() {

    const [email, setEmail] = useState('')
    const [wantsNewProdInfo, setWantsNewProductInfo] = useState(false)
    const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false)

    function handleUpdateProdInfo(selection) {

        switch (selection) {
            case 'pref-new':
                setWantsNewProductInfo((prev) => (!prev))
                break
            case 'pref-updates':
                setWantsProdUpdateInfo((prev) => (!prev))
                break
            default:
                throw new Error('invalid option')
        }
    }

    function reset() {
        setWantsNewProductInfo(false)
        setWantsProdUpdateInfo(false)
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log({ wantsNewProdInfo: wantsNewProdInfo, wantsProdUpdateInfo: wantsProdUpdateInfo, email: email })

        reset()
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" onChange={handleEmail} value={email} />
            </div>

            <Preferences newProdInfo={wantsNewProdInfo} prodUpdateInfo={wantsProdUpdateInfo} onUpdateInfo={handleUpdateProdInfo} />
            <button>Submit</button>
        </form>
    )
}