import { gql, useQuery } from "@apollo/client";

const GetAllAuthors = gql`
    {
        authors {
            id
            age
            name
        }
    }
`;

const getAllBooks = gql`
    {
        books {
            name
            genre
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId:$authorId){
            name
            id
        }
    }
`;

export {GetAllAuthors, getAllBooks, addBookMutation};