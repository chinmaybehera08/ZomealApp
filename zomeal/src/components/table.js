import * as React from 'react';
import { DataTable } from 'react-native-paper';

const table = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     name: 'Monday',
     menu:'Rice Dalma Papad Tomato Khata Saga',
     menu1:'Dalma'
     
   },
   {
     key: 2,
     name: 'Tuesday',
    
   },
   {
     key: 3,
     name: 'Wednesday',
    
   },
   {
     key: 4,
     name: 'Thursday',
    
   },
   {
    key: 5,
    name: 'Friday',
    
  },
  {
    key: 6,
    name: 'Saturday',
   
  },{
    key: 7,
    name: 'Sunday',
    
  },
  ]);


  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Days</DataTable.Title>
        <DataTable.Title>Menu</DataTable.Title>
      </DataTable.Header>

      {items.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell >{item.menu} {item.menu1}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default table;