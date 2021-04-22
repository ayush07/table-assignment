import React from 'react';
import './App.css';
// import { BasicTable } from './components/BasicTable';
// import { FilteringTable } from './components/FiltertingTable';
// import { PaginationTable } from './components/PaginationTable';
import { Table } from './components/Table';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* <BasicTable />
      <FilteringTable /> */}
        {/* <PaginationTable /> */}
        <Table />
      </div>
    );
  }
}

export default App;
