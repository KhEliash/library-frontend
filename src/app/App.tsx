import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "../redux/api/booksApi";

function App() {
  const { data: book, error, isLoading } = useGetBooksQuery(undefined);
  console.log({ book, error, isLoading });

  return (
    <div className="  ">
      <Button>Click me</Button>
      {book.data.map((b: any) => (
        <div>
          <p>{b.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
