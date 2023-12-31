import { View } from "react-native"
import { Card } from "react-native-paper"



import * as React from 'react';
import { DataTable } from 'react-native-paper';

const OrderHistory = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     name: 'Cupcake',
     menu: 356,
     fat: 16,
   },
   {
     key: 2,
     name: 'Eclair',
     menu: 262,
     fat: 16,
   },
   {
     key: 3,
     name: 'Frozen yogurt',
     menu: 159,
     fat: 6,
   },
   {
     key: 4,
     name: 'Gingerbread',
     menu: 305,
     fat: 3.7,
   },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>menu</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.menu}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}

     
    </DataTable>
  );
};

export default OrderHistory;