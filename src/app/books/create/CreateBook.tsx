import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";
import { useCreateBookMutation } from "@/redux/api/booksApi";

const formSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  genre: z.string().min(1),
  isbn: z.string().min(1),
  description: z.string().optional(),
  copies: z.coerce.number().min(1),
});

const CreateBook = () => {
  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);
    await createBook(values);
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">➕ Add New Book</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {["title", "author", "genre", "isbn", "copies"].map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Create Book
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateBook;
