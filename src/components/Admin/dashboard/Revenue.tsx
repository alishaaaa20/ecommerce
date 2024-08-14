import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Revenue() {
  return (
    <ScrollArea className="lg:w-full">
      <div className="overflow-x-auto mt-6">
        <Table className="min-w-full bg-white shadow-md rounded-lg">
          <TableHeader className="bg-[#F6F4F8]">
            <TableRow>
              <TableHead className="w-[100px] py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                S.N
              </TableHead>
              <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Date
              </TableHead>
              <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Product Name
              </TableHead>
              <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Category
              </TableHead>
              <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Qty.
              </TableHead>
              <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Amount
              </TableHead>
              <TableHead className="py-4 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Revenue
              </TableHead>
              <TableHead className="py-4 px-6 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index} className="hover:bg-secondary/5">
                <TableCell className="py-4 px-6 font-medium">
                  {index + 1}
                </TableCell>
                <TableCell className="py-4 px-6">2022-03-20</TableCell>
                <TableCell className="py-4 px-6">Silk Saree</TableCell>
                <TableCell className="py-4 px-6">Saree</TableCell>
                <TableCell className="py-4 px-6">1</TableCell>
                <TableCell className="py-4 px-6">Rs. 500.00</TableCell>
                <TableCell className="py-4 px-6">Rs. 500.00</TableCell>
                <TableCell className="py-4 px-6 text-right">
                  <Button
                    variant="outline"
                    className="text-black bg-white hover:bg-primary hover:text-white border border-primary px-2 sm:px-4 py-2 rounded"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-white">
            <TableRow>
              <TableCell
                colSpan={6}
                className="py-4 px-6 text-base font-bold text-right"
              >
                Total Revenue
              </TableCell>
              <TableCell
                colSpan={2}
                className="py-4 px-6 text-base font-bold text-left"
              >
                Rs. 2,500.00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
