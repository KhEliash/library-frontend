import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBorrowBookMutation, useGetBookQuery,   } from "@/redux/api/booksApi";
import { toast } from "sonner";

export default function BorrowBookForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const { data: book, isLoading: bookLoading } =  useGetBookQuery(id);
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dueDate) return toast.error("Due date is required");
    if (quantity < 1) return toast.error("Quantity must be at least 1");

    try {
      await borrowBook({ id, payload: { quantity, dueDate } }).unwrap();
      toast.success("Book borrowed successfully!");
    //   navigate("/borrow-summary");
    } catch (err: any) {
      toast.error(err?.data?.message || "Borrow failed");
    }
  };
  if (bookLoading) return <div>Loading book info...</div>;
  console.log(book);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Borrow Book: {book?.data?.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Available Copies: {book?.data?.copies}</Label>
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            min={1}
            max={book?.data?.copies}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Borrowing..." : "Borrow"}
        </Button>
      </form>
    </div>
  );
}
