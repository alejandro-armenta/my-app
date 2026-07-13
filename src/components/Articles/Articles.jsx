import { use } from "react";
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

import dummyArticles from "../../data/dummy-articles";
import BookmarkContext from "../../store/bookmark-context";

function Articles() {

    const bookmarkCtx = use(BookmarkContext)

    console.log({ articles: bookmarkCtx.bookmarkedArticles })

    return (

        <ul>
            {
                dummyArticles.map((article) => {

                    const isbookmarked = bookmarkCtx.bookmarkedArticles.some((bArticle) => (article.id === bArticle.id))

                    console.log({ isbookmarked: isbookmarked })

                    let buttonAction = () => {
                        bookmarkCtx.bookmarkArticle(article)
                    }

                    let buttonIcon = <FaRegBookmark />

                    if (isbookmarked) {

                        buttonAction = () => {
                            bookmarkCtx.unbookmarkArticle(article.id)
                        }

                        buttonIcon = <FaBookmark />
                    }

                    return (
                        <li key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <button onClick={buttonAction}>{buttonIcon}</button>
                        </li>
                    )
                })
            }
        </ul>

    )

}

export default Articles