import { use } from "react";
import BookmarkContext from "../../store/bookmark-context";


function BookmarkSummary() {

    const bookmarkCtx = use(BookmarkContext)

    const numberOfArticles = bookmarkCtx.bookmarkedArticles.length

    return <p>{numberOfArticles}</p>
    
}


export default BookmarkSummary