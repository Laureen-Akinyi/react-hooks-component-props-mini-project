import React from "react";
import Article from "./Article";

function ArticleList ({posts}) {
    const article=posts.map((post) =>(
        <Article
            Key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}

        />
    ));

    return(
        <main>{article}</main>
    )
}

export default ArticleList;