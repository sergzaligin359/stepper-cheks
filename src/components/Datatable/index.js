import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo({ data, columns }) {

  return (
    <MaterialTable
      title="Editable Example"
      columns={ columns }
      data={ data }
    />
  );
}
