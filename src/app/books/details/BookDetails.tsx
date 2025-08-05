import { useParams, useNavigate } from "react-router-dom";
import { useGetBookQuery } from "@/redux/api/booksApi";
import { Button } from "@/components/ui/button";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetBookQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading book info.</p>;

  const book = data?.data;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Copies Available:</strong> {book.copies}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>

      <p className="mt-4">
        <strong>Description:</strong> {book.description}
      </p>

      <div className="flex gap-4 mt-6">
        {book.available ? (
          <Button
            onClick={() => navigate(`/borrow/${book._id}`)}
            className="cursor-pointer"
          >
            Borrow
          </Button>
        ) : (
          ""
        )}
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default BookDetails;
