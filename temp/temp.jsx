
function Alert() {

    //es un constructor 
    const [msg, setMsg] = useState('')

    function handleChangeMsg(event) {
        setMsg(event.target.value)
    }

    function setAlert() {
        return setTimeout(() => (console.log(msg)), 2000)
    }

    useEffect(
        function () {
            const timer = setAlert()

            return function () {
                console.log("clean")
                clearTimeout(timer)
            }
        }
        ,
        [setAlert]
    )

    return (
        <input type="text" onChange={handleChangeMsg} />
    )
}

function Alert() {

    const [alertDone, setAlertDone] = useState(false)

    function handleTimeOut() {
        setAlertDone(true)
        console.log('timer expired')
    }

    useEffect(
        function () {
            
            let timer

            console.log('starting alert timer')
            timer = setTimeout(handleTimeOut, 2000)

            //esta funcion se llama antes de handleTimeOut
            return function () {
                console.log('cleanup')
                
                //cancela la funcion handleTimeOut
                //es el destructor de alert
                clearTimeout(timer)
            }
        }
        ,
        []
    )

    return (
        <>
            {!alertDone && <p>you have time</p>}
            {alertDone && <p>Time to get up</p>}
        </>
    )
}

async function fetchPosts(url) {
    const response = await fetch(url)
    const blogPosts = await response.json()
    return blogPosts
}

function BlogPosts({ url }) {

    //setPosts nunca va a cambiar porque es updating function
    const [posts, setPosts] = useState([])

    //any value that is not defined here should not be added as dependency
    useEffect(
        function () {
            fetchPosts(url).
                then(
                    //este es un internal value definido adentro de useeffect por eso no se pone
                    (fetchedPosts) => setPosts(fetchedPosts)
                )
        },
        [url]
    )

    return (
        <>
            <ul>
                {posts.map(
                    function (post) {
                        return <li key={post.id}>{post.title}</li>
                    }
                )}
            </ul>
        </>
    )
}
