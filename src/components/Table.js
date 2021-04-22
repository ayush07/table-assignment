import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import { COLUMNS } from './columns';
import './table.css';
import axios from 'axios';
import Spinner from './Spinner';
export const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [tableData, setData] = useState([]);
  const [loading, setLoading] = useState('true');

  const defaultColumn = React.useMemo(
    () => ({
      Filter: false,
    }),
    [],
  );
  useEffect(() => {
    const fetchData = async () => {
      const tableData = await axios.get(`${url}`);
      setData(tableData.data.results);
      setLoading(false);
    };
    fetchData();
  }, []);
  const data = useMemo(() => tableData, [tableData]);
  const url = 'https://swapi.dev/api/people/';

  const {
    getTableProps,
    getTableBodyProps,

    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    headerGroups,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 3 },
    },
    useFilters,

    useSortBy,

    usePagination,
  );
  const { pageIndex, pageSize } = state;
  if (!loading) {
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}

                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>{' '}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: '50px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[3, 5, 10].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
};
