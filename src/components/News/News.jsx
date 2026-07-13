import { useState } from "react";
import BookmarkContext from "../../store/bookmark-context";
import InfoSidebar from "../InfoSideBar/InfoSidebar";
import Articles from "../Articles/Articles";

function News() {

    const [savedArticles, setSavedArticles] = useState([])

    function addArticle(article) {
        setSavedArticles((prev) => [...prev, article])
    }

    function removeArticle(articleID) {
        setSavedArticles(
            (prev) => (
                //si es igual lo quita y los demas los deja
                prev.filter(
                    (article) => article.id !== articleID
                )
            )
        )
    }

    const bookmarkedCtxValue = {
        bookmarkedArticles: savedArticles,
        bookmarkArticle: addArticle,
        unbookmarkArticle: removeArticle,
    }

    return (
        <BookmarkContext value={bookmarkedCtxValue}>
            <Articles />
            <InfoSidebar />
        </BookmarkContext>
    )
}

export default News