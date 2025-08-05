import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBooksQuery } from "@/redux/api/booksApi";
import { Link, useNavigate } from "react-router-dom";
import BookUpdateModal from "../books/update/BookUpdateModal";
import { Button } from "@/components/ui/button";
import BookDeleteConfirm from "../books/delete/BookDelete";
import { Eye } from "lucide-react";
const Home = () => {
  const { data: book, isLoading } = useGetBooksQuery(undefined);
  const navigate = useNavigate();
  if (isLoading) return <p className="text-center py-6">Loading...</p>;
  return (
    <Card className="p-4">
      <h2 className="text-2xl font-bold mb-4">📖 Books</h2>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Available</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {book?.data?.map((book: any) => (
              <TableRow key={book._id} className="even:bg-gray-50">
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>{book.available ? "✅" : "❌"}</TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <Link to={`/book/${book?._id}`}>
                    <Button variant="outline" size="icon" className="cursor-pointer">
                      <Eye />
                    </Button>
                  </Link>
                  <BookUpdateModal book={book} />
                  {book.available ? (
                    <Button
                      onClick={() => navigate(`/borrow/${book._id}`)}
                      className="cursor-pointer"
                      disabled={book.available === 0}
                    >
                      Borrow
                    </Button>
                  ) : (
                    <Button variant="ghost">Borrow</Button>
                  )}

                  <BookDeleteConfirm id={book._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Home;
