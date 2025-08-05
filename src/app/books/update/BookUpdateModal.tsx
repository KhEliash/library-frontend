import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useUpdateBookMutation } from "@/redux/api/booksApi";
import { toast } from "sonner";
import { Pen } from "lucide-react";

type Props = {
  book: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
  };
};

const BookUpdateModal = ({ book }: Props) => {
  const [open, setOpen] = useState(false);
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    copies: "",
  });

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (val) {
      setForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        copies: book.copies.toString(),
      });
    }
  };

  const handleUpdate = async () => {
    try {
      await updateBook({
        id: book._id,
        data: { ...form, copies: Number(form.copies) },
      }).unwrap();
      toast.success("Book updated successfully!");
      setOpen(false);
    } catch (error) {
      toast.error("Failed to update book.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Pen/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Book title"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              name="author"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Author name"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="genre">Genre</Label>
            <Input
              id="genre"
              name="genre"
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
              placeholder="Genre"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="isbn">ISBN</Label>
            <Input
              id="isbn"
              name="isbn"
              value={form.isbn}
              onChange={(e) => setForm({ ...form, isbn: e.target.value })}
              placeholder="ISBN"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="copies">Copies</Label>
            <Input
              id="copies"
              name="copies"
              type="number"
              value={form.copies}
              onChange={(e) => setForm({ ...form, copies: e.target.value })}
              placeholder="Number of copies"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleUpdate} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookUpdateModal;
