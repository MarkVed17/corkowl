import React from "react";
import MaterialReactTable from "material-react-table";
import "./InventoryTable.css";

const InventoryTable = () => {
  const data = [
    {
      id: "1",
      product: "Stagin Family Vineyard",
      rating: "+3",
      vintage: 1950,
      quantity: 4,
      volume: "Standard (750 mL)",
      cost: "$56.95",
      price: "$59.95",
      imgURL: "/assets/staglin-family-vineyard.svg",
      origin: "France . Sauternes",
    },
    {
      id: "2",
      product: "Bibi Gartez Testamatta",
      rating: "+3",
      vintage: 2015,
      quantity: 32,
      volume: "Magnum (1500 mL)",
      cost: "$71.95",
      price: "$72.95",
      imgURL: "/assets/bibi-graetz.svg",
      origin: "Chianti . Blends and Other",
    },
    {
      id: "3",
      product: "Cayuse Syrah en Chamber",
      rating: "+3",
      vintage: 2012,
      quantity: 12,
      volume: "Standard (750 mL)",
      cost: "$139.95",
      price: "$150.00",
      imgURL: "/assets/cayuse-syrah.svg",
      origin: "Syrah",
    },
    {
      id: "4",
      product: "Staglin Family Vineyard",
      rating: "+3",
      vintage: 2010,
      quantity: 4,
      volume: "Odd Ball (5000 mL)",
      cost: "$56.95",
      price: "$59.95",
      imgURL: "/assets/staglin-family-vineyard.svg",
      origin: "United States . California Blends",
    },
    {
      id: "5",
      product: "K Vintners Syrah Cattle king",
      rating: "+3",
      vintage: 2015,
      quantity: 25,
      volume: "Magnum (1500 mL)",
      cost: "$79.95",
      price: "$92.95",
      imgURL: "/assets/k-vintners.svg",
      origin: "France . Sauternes",
    },
    {
      id: "6",
      product: "L'Ecole No. 41 Ferguson",
      rating: "+3",
      vintage: 2004,
      quantity: 4,
      volume: "Odd Ball (5000 mL)",
      cost: "$54.95",
      price: "$59.95",
      imgURL: "/assets/l'ecole.svg",
      origin: "United States . California Blends",
    },
    {
      id: "7",
      product: "Staglin Family Vineyard",
      rating: "+3",
      vintage: 1950,
      quantity: 22,
      volume: "Regular (750 mL)",
      cost: "$56.95",
      price: "$59.95",
      imgURL: "/assets/staglin-family-vineyard.svg",
      origin: "France . Sauternes",
    },
  ];

  const columns = [
    {
      accessorKey: "product",
      header: "PRODUCT",
      Header: <span className="table-header">PRODUCT</span>,
      Cell: ({ row }) => (
        <div className="product-cell">
          <img src={row.original.imgURL} alt="img" />
          <div className="product-details">
            <p className="product-name">{row.original.product}</p>
            <p className="product-origin">{row.original.origin}</p>
          </div>
        </div>
      ),
      size: 300,
    },
    {
      accessorKey: "rating",
      header: "RATING",
      Header: <span className="table-header">RATING</span>,
      Cell: ({ row }) => (
        <div className="rating-cell">
          <p className="rating-name">RP 95</p>
          <p className="rating-value">{row.original.rating}</p>
        </div>
      ),
      size: 120,
    },
    {
      accessorKey: "vintage",
      header: "VINTAGE",
      Header: <span className="table-header">VINTAGE</span>,
      Cell: ({ row }) => <p className="regular-cell">{row.original.vintage}</p>,
      size: 120,
    },
    {
      accessorKey: "quantity",
      header: "QTY",
      Header: <span className="table-header">QTY</span>,
      Cell: ({ row }) => (
        <p className="regular-cell">{row.original.quantity}</p>
      ),
      size: 100,
    },
    {
      accessorKey: "volume",
      header: "VOLUME",
      Header: <span className="table-header">VOLUME</span>,
      Cell: ({ row }) => <p className="regular-cell">{row.original.volume}</p>,
    },
    {
      accessorKey: "cost",
      header: "COST",
      Header: <span className="table-header">COST</span>,
      Cell: ({ row }) => <p className="regular-cell">{row.original.cost}</p>,

      size: 100,
    },
    {
      accessorKey: "price",
      header: "PRICE",
      Header: <span className="table-header">PRICE</span>,
      Cell: ({ row }) => <p className="price-cell">{row.original.price}</p>,

      size: 100,
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      renderDetailPanel={({ row }) => (
        <div className="detail-panel">
          <div className="detail-panel__top">
            <div className="detail-panel__product-info">
              <p className="detail-panel__product-name">
                {row.original.product}
              </p>
              <div className="detail-panel__product-origin">
                <p className="detail-panel__product-region">
                  Region:{" "}
                  <span className="detail-panel__text">
                    {row.original.origin}
                  </span>
                </p>
                <p className="detail-panel__product-vintage">
                  Vintage:{" "}
                  <span className="detail-panel__text">
                    {row.original.vintage}
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-panel__actions">
              <p>View wine</p>
              <img src="/assets/edit.svg" alt="edit" />
              <img src="/assets/delete.svg" alt="delete" />
            </div>
          </div>
          <div className="detail-panel__bottom">
            <div className="detail-panel__product-rating">
              <p className="detail-panel__rating-heading">RATING</p>
              <div className="detail-panel__rating-container">
                <div className="detail-panel__rating-container-row-1">
                  <div className="detail-panel__rating-wrapper">
                    <p className="detail-panel__rating-name">
                      James Suckling's
                    </p>
                    <p className="detail-panel__rating-value">JS 95</p>
                  </div>
                  <div className="detail-panel__rating-wrapper">
                    <p className="detail-panel__rating-name">Robert Parker </p>
                    <p className="detail-panel__rating-value">RP 80</p>
                  </div>
                  <div className="detail-panel__rating-wrapper">
                    <p className="detail-panel__rating-name">
                      Antonio Galloni’s
                    </p>
                    <p className="detail-panel__rating-value">---</p>
                  </div>
                </div>

                <div className="detail-panel__rating-container-row-2">
                  <div className="detail-panel__rating-wrapper">
                    <p className="detail-panel__rating-name">
                      Wine Spectator Tasting
                    </p>
                    <p className="detail-panel__rating-value">WS 79</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-panel__product-stock">
              <p className="detail-panel__stock-heading">STOCK</p>
              <div className="detail-panel__stock-container">
                <div className="detail-panel__stock-wrapper">
                  <p className="detail-panel__stock-name">Possimus</p>
                  <p className="detail-panel__stock-value">43 units</p>
                </div>

                <div className="detail-panel__stock-wrapper">
                  <p className="detail-panel__stock-name">Downtown Condo</p>
                  <p className="detail-panel__stock-value">95 units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
