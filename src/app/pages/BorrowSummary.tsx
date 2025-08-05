import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBorrowSummaryQuery } from "@/redux/api/booksApi";

export default function BorrowSummary() {
  const { data, isLoading, isError } = useBorrowSummaryQuery(undefined);

  if (isLoading)
    return <div className="text-center mt-10">Loading summary...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading summary
      </div>
    );

  const summary = data?.data || [];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-2">
      <h2 className="text-2xl font-bold mb-6">Borrow Summary</h2>
      {summary.length === 0 ? (
        <div>No borrowed books yet.</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Total Borrowed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {summary.map((item: any) => (
              <TableRow key={item.isbn} className="odd: ">
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.isbn}</TableCell>
                <TableCell>{item.totalQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
