// write the book component code here
import React from "react";

const BookCard = ({book})=>{
    return(
        <div className="bookcard">
            <img src={book.image} alt={book.name}/>
            <h2>{book.name}</h2>
            <p>Genre: {book.genre}</p>
            <p>author: {book.author}</p>
        </div>
    )
}

export  default BookCard;