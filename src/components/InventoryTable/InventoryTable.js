import React from "react";
import MaterialReactTable from "material-react-table";
import { Box, Typography } from "@mui/material";

const InventoryTable = () => {
  const data = [
    {
      id: "1",
      product: "Stagin Family Vineyard",
      rating: "RP 95 +3",
      vintage: 1950,
      quantity: 4,
      volume: "Standard (750 mL)",
      cost: "$56.95",
      price: "$59.95",
    },
    {
      id: "2",
      product: "Bibi Gartez Testamatta",
      rating: "RP 95 +3",
      vintage: 2015,
      quantity: 32,
      volume: "Magnum (1500 mL)",
      cost: "$71.95",
      price: "$72.95",
    },
    {
      id: "3",
      product: "Cayuse Syrah en Chamber",
      rating: "RP 95 +3",
      vintage: 2012,
      quantity: 12,
      volume: "Standard (750 mL)",
      cost: "$139.95",
      price: "$150.00",
    },
    {
      id: "4",
      product: "Staglin Family Vineyard",
      rating: "RP 95 +3",
      vintage: 2010,
      quantity: 4,
      volume: "Odd Ball (5000 mL)",
      cost: "$56.95",
      price: "$59.95",
    },
    {
      id: "5",
      product: "K Vintners Syrah Cattle king",
      rating: "RP 95 +3",
      vintage: 2015,
      quantity: 25,
      volume: "Magnum (1500 mL)",
      cost: "$79.95",
      price: "$92.95",
    },
    {
      id: "6",
      product: "L'Ecole No. 41 Ferguson",
      rating: "RP 95 +3",
      vintage: 2004,
      quantity: 4,
      volume: "Odd Ball (5000 mL)",
      cost: "$54.95",
      price: "$59.95",
    },
    {
      id: "7",
      product: "Staglin Family Vineyard",
      rating: "RP 95 +3",
      vintage: 1950,
      quantity: 22,
      volume: "Regular (750 mL)",
      cost: "$56.95",
      price: "$59.95",
    },
  ];

  const columns = [
    {
      accessorKey: "product",
      header: "PRODUCT",
    },
    {
      accessorKey: "rating",
      header: "RATING",
    },
    {
      accessorKey: "vintage",
      header: "VINTAGE",
    },
    {
      accessorKey: "quantity",
      header: "QTY",
    },
    {
      accessorKey: "volume",
      header: "VOLUME",
    },
    {
      accessorKey: "cost",
      header: "COST",
    },
    {
      accessorKey: "price",
      header: "PRICE",
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: "grid",
            margin: "auto",
            gridTemplateColumns: "1fr 1fr",
            width: "100%",
          }}
        >
          <Typography>product: {row.original.product}</Typography>
          <Typography>rating: {row.original.rating}</Typography>
          <Typography>vintage: {row.original.vintage}</Typography>
          <Typography>quantity: {row.original.quantity}</Typography>
        </Box>
      )}
      enableTopToolbar={false}
      enableBottomToolbar={false}
      enableColumnActions={false}
      enableExpandAll={false}
      positionExpandColumn="last"
      enableRowSelection={true}
    />
  );
};

export { InventoryTable };
