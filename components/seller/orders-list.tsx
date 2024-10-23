import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const demoOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2024-01-15",
    total: 199.99,
    status: "Pending",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2024-01-14",
    total: 349.99,
    status: "Shipped",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    date: "2024-01-13",
    total: 89.99,
    status: "Delivered",
  },
];

export function OrdersList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demoOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Badge variant={
                  order.status === "Delivered" ? "default" :
                  order.status === "Shipped" ? "secondary" : "outline"
                }>
                  {order.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}