import { useGetBooksQuery } from "@/redux/api/booksApi";

const Home = () => {
  const { data: book, error, isLoading } = useGetBooksQuery(undefined);
  console.log({ book, error, isLoading });
  return (
    <div className="bg-red-200 p-5">
      {book?.data?.map((book: any,index:number) => (
        <div key={index}>
          <p>{index+1}</p>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
