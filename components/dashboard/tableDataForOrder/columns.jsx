"use client"
import { Badge } from "@/components/ui/badge";
import DataTableColumnHeader from "./data-table-column-header";
import DataTableRowActions from "./data-table-row-actions";

export const columns = () => [
  {
    accessorKey: "paymentIntent",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="ORDERID" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate font-medium">#{row.original.paymentIntent.id}</span>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderby",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="CUSTOMER" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate font-medium">{row.original.orderby.firstname}</span>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderStatus",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="STATUS" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate text-xs font-semibold text-blue-700 p-2 bg-blue-200 rounded-md">{row.original.orderStatus}</span>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="AMOUNT" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate font-medium text-blue-700">{row.original.paymentIntent.amount}</span>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader className={"font-medium text-xs uppercase text-gray-300"} column={column} title="Action" />
    ),
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },

];