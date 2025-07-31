import { useGetBooksQuery } from "../redux/api/booksApi";

function App() {
  const { data: book, error, isLoading } = useGetBooksQuery(undefined);
  console.log({ book, error, isLoading });

  return (
    <div className="  ">
      {book?.data?.map((book: any) => (
        <div>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
