import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { GetAllAuthors, addBookMutation, getAllBooks } from "../../queries/queries";

const AddBook = () => {
    const [book, setbook] = useState({});
    const { loading, error, data } = useQuery(GetAllAuthors);
    const [addBookMutationQuery, addBookMutationData] =
        useMutation(addBookMutation, {
            refetchQueries: [
                {
                    query: getAllBooks,
                }
            ]
        });
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div>
            <form
                id="add-book"
                onSubmit={async (e) => {
                    e.preventDefault();
                    console.log(book);
                    addBookMutationQuery({
                        variables: {
                            name: book.name,
                            genre: book.genre,
                            authorId: book.authorId,
                        },
                    });
                }}
            >
                <div className="field">
                    <label>Book name:</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setbook({
                                ...book,
                                name: e.target.value,
                            });
                        }}
                    />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setbook({
                                ...book,
                                genre: e.target.value,
                            });
                        }}
                    />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select
                        onChange={(e) => {
                            setbook({
                                ...book,
                                authorId: e.target.value,
                            });
                        }}
                    >
                        <option>Select Author</option>
                        {loading ? (
                            <option disabled>loading authors...</option>
                        ) : (
                            data.authors.map((author) => (
                                <option value={author.id}>{author.name}</option>
                            ))
                        )}
                    </select>
                </div>

                <button>+</button>
            </form>
        </div>
    );
};

export default AddBook;
