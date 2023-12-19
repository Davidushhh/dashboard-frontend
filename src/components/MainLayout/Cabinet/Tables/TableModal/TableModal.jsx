import React, { useEffect, useState } from "react";

import * as SC from "components/MainLayout/Cabinet/Tables/TableModal/TableModal.styled";

import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  GridActionsCellItem,
  GridRowEditStopReasons,
  useGridApiRef,
} from "@mui/x-data-grid";

import {
  useGetTableQuery,
  useUpdateTableRowMutation,
  useExportCSVMutation,
} from "redux/API/cabinetApi";
import { textFileDownload } from "components/helpers";

const editebleColumns = {
  comment: {
    headerName: "comment",
    field: "comment",
    type: "string",
    minWidth: 300,
    editable: true,
  },
  serviceStatus: {
    headerName: "serviceStatus",
    field: "serviceStatus",
    type: "singleSelect",
    editable: true,
    valueOptions: ["В обробці", "Виконано", "Відмова"],
  },
};

export default function TableModal({ table }) {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isRefreshRows, setIsRefreshRows] = useState(false);

  const [rowModesModel, setRowModesModel] = useState({});
  const apiRef = useGridApiRef();

  const { currentData } = useGetTableQuery(table.tableName);
  const [updateTableRow] = useUpdateTableRowMutation();
  const [exportCSV] = useExportCSVMutation();

  useEffect(() => {
    const handleEditClick = (id) => () => {
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.Edit },
      });
    };

    const handleSaveClick = (id) => () => {
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View },
      });
    };

    const handleCancelClick = (id) => () => {
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      });
    };

    const initialColumns = {
      field: "actions",
      type: "actions",
      headerName: "Actions",

      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    };

    if (!currentData) return;

    if (currentData.columns) {
      let newColumns = currentData.columns;
      newColumns = newColumns.map((column) => {
        if (editebleColumns[column]) {
          return {
            ...editebleColumns[column],
          };
        } else {
          return {
            field: column,
            headerName: column,
            editable: false,
          };
        }
      });
      newColumns.push(initialColumns);
      setColumns(newColumns);
    } else {
      setColumns([]);
      return;
    }
    if (currentData.data && !isRefreshRows) {
      let newData = currentData.data;
      setRows(newData);
    }
  }, [currentData, isRefreshRows, rowModesModel]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    const oldRow = rows.find((row) => row.id === newRow.id);
    //find field with changes
    const updatedFields = Object.keys(updatedRow).filter(
      (field) => updatedRow[field] !== oldRow[field] && field !== "isNew"
    );

    const updatedRowData = updatedFields.reduce(
      (acc, field) => ({
        ...acc,
        [field]: updatedRow[field],
      }),
      {}
    );
    updateTableRow({
      tableName: table.tableName,
      id: updatedRow.id,
      data: updatedRowData,
    });

    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    setIsRefreshRows(true);

    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const onExportCSVClick = async () => {
    try {
      const response = await exportCSV({
        tableName: table.tableName,
        data: rows,
      });

      const csvText = await response.data.data;
      textFileDownload(csvText, table.tableName);
    } catch (error) {
      console.error("Error exporting CSV:", error);
    }
  };

  return (
    <SC.TablesModal
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <SC.TableTitle variant="h6" component="h2">
        {table.serviceName_cyrillic}
      </SC.TableTitle>

      <SC.TableGrid
        apiRef={apiRef}
        autosizeOptions={{
          columns: ["name"],
          includeOutliers: true,
          includeHeaders: true,
        }}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />

      <SC.ExportButton variant="outlined" onClick={onExportCSVClick}>
        Експорт таблиці в CSV
      </SC.ExportButton>
    </SC.TablesModal>
  );
}
