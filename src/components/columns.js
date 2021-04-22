import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ColumnFilter } from './ColumnFilter';
export const COLUMNS = [
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    // sticky: 'left',
    Filter: ColumnFilter,
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender',
    sticky: 'left',
  },

  {
    Header: 'Birth Year',
    Footer: 'Birth Year',
    accessor: 'birth_year',
  },
  {
    Header: 'Height',
    Footer: 'Height',
    accessor: 'height',
  },
  {
    Header: 'Skin Color',
    Footer: 'Skin Color',
    accessor: 'skin_color',
  },
  {
    Header: 'Hair Color',
    Footer: 'Hair Color',
    accessor: 'hair_color',
  },
  {
    Header: 'Eye Color',
    Footer: 'Eye Color',
    accessor: 'eye_color',
  },
  {
    Header: 'Mass',
    Footer: 'Mass',
    accessor: 'mass',
  },
  {
    Header: 'Home World',
    Footer: 'Home World',
    accessor: 'homeworld',
  },
  {
    Header: 'Films',
    Footer: 'Films',

    accessor: 'films',
    Cell: (props, index) => {
      return props.cell.value.map((film, index) => <li key={index}>{film}</li>);
    },
  },
  {
    Header: 'Species',
    Footer: 'Species',
    accessor: 'species',
    Cell: (props) => {
      console.log(props);
      return props.cell.value.length === 0 ? (
        <FontAwesomeIcon icon={faUserCircle} size='3x' />
      ) : (
        <i className='fa fa-android' style={{ fontSize: '44px' }}></i>
      );
    },
  },
  {
    Header: 'Starships',
    Footer: 'Starships',
    accessor: 'starships',
    Cell: (props) => {
      return props.cell.value.map((starship, index) => (
        <li key={index}>{starship}</li>
      ));
    },
  },
  {
    Header: 'url',
    Footer: 'url',
    accessor: 'url',
  },
  {
    Header: 'Vehicles',
    Footer: 'Vehicles',
    accessor: 'vehicles',
    Cell: (props) => {
      return props.cell.value.map((vehicle, index) => (
        <li key={index}>{vehicle}</li>
      ));
    },
  },
];
