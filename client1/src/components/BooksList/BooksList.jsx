import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import {getAllBooks} from "../../queries/queries";

const BooksList = () => {
    const { loading, error, data } = useQuery(getAllBooks);
    const [books, setbooks] = useState([]);
    useEffect(() => {
        if (data !== undefined) {
            setbooks(data.books);
        }
    }, [data]);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    return (
        <div className="BookListMainDiv">
            {books.map((book, id) => (
                <div className="bookDetailes" key={id}>
                    <p>{book.name}</p>
                </div>
            ))}
        </div>
    );
};

export default BooksList;
