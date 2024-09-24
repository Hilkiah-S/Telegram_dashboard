/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useMemo, useEffect, useState } from "react";

// // prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// // react-table components
// import { useTable, usePagination, useGlobalFilter, useAsyncDebounce, useSortBy } from "react-table";

// // @mui material components
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import TableRow from "@mui/material/TableRow";
// import Icon from "@mui/material/Icon";
// import Autocomplete from "@mui/material/Autocomplete";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// import MDPagination from "components/MDPagination";

// // Material Dashboard 2 React example components
// import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
// import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";

// function DataTable({
//   entriesPerPage,
//   canSearch,
//   showTotalEntries,
//   table,
//   pagination,
//   isSorted,
//   noEndBorder,
// }) {
//   const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
//   const entries = entriesPerPage.entries
//     ? entriesPerPage.entries.map((el) => el.toString())
//     : ["5", "10", "15", "20", "25"];
//   const columns = useMemo(() => table.columns, [table]);
//   const data = useMemo(() => table.rows, [table]);

//   const tableInstance = useTable(
//     { columns, data, initialState: { pageIndex: 0 } },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     rows,
//     page,
//     pageOptions,
//     canPreviousPage,
//     canNextPage,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     setGlobalFilter,
//     state: { pageIndex, pageSize, globalFilter },
//   } = tableInstance;

//   // Set the default value for the entries per page when component mounts
//   useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

//   // Set the entries per page value based on the select value
//   const setEntriesPerPage = (value) => setPageSize(value);

//   // Render the paginations
//   const renderPagination = pageOptions.map((option) => (
//     <MDPagination
//       item
//       key={option}
//       onClick={() => gotoPage(Number(option))}
//       active={pageIndex === option}
//     >
//       {option + 1}
//     </MDPagination>
//   ));

//   // Handler for the input to set the pagination index
//   const handleInputPagination = ({ target: { value } }) =>
//     value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

//   // Customized page options starting from 1
//   const customizedPageOptions = pageOptions.map((option) => option + 1);

//   // Setting value for the pagination input
//   const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

//   // Search input value state
//   const [search, setSearch] = useState(globalFilter);

//   // Search input state handle
//   const onSearchChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//   }, 100);

//   // A function that sets the sorted value for the table
//   const setSortedValue = (column) => {
//     let sortedValue;

//     if (isSorted && column.isSorted) {
//       sortedValue = column.isSortedDesc ? "desc" : "asce";
//     } else if (isSorted) {
//       sortedValue = "none";
//     } else {
//       sortedValue = false;
//     }

//     return sortedValue;
//   };

//   // Setting the entries starting point
//   const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

//   // Setting the entries ending point
//   let entriesEnd;

//   if (pageIndex === 0) {
//     entriesEnd = pageSize;
//   } else if (pageIndex === pageOptions.length - 1) {
//     entriesEnd = rows.length;
//   } else {
//     entriesEnd = pageSize * (pageIndex + 1);
//   }

//   return (
//     <TableContainer sx={{ boxShadow: "none" }}>
//       {entriesPerPage || canSearch ? (
//         <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
//           {entriesPerPage && (
//             <MDBox display="flex" alignItems="center">
//               <Autocomplete
//                 disableClearable
//                 value={pageSize.toString()}
//                 options={entries}
//                 onChange={(event, newValue) => {
//                   setEntriesPerPage(parseInt(newValue, 10));
//                 }}
//                 size="small"
//                 sx={{ width: "5rem" }}
//                 renderInput={(params) => <MDInput {...params} />}
//               />
//               <MDTypography variant="caption" color="secondary">
//                 &nbsp;&nbsp;entries per page
//               </MDTypography>
//             </MDBox>
//           )}
//           {canSearch && (
//             <MDBox width="12rem" ml="auto">
//               <MDInput
//                 placeholder="Search..."
//                 value={search}
//                 size="small"
//                 fullWidth
//                 onChange={({ currentTarget }) => {
//                   setSearch(search);
//                   onSearchChange(currentTarget.value);
//                 }}
//               />
//             </MDBox>
//           )}
//         </MDBox>
//       ) : null}
//       <Table {...getTableProps()}>
//         <MDBox component="thead">
//           {headerGroups.map((headerGroup, key) => (
//             <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column, idx) => (
//                 <DataTableHeadCell
//                   key={idx}
//                   {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
//                   width={column.width ? column.width : "auto"}
//                   align={column.align ? column.align : "left"}
//                   sorted={setSortedValue(column)}
//                 >
//                   {column.render("Header")}
//                 </DataTableHeadCell>
//               ))}
//             </TableRow>
//           ))}
//         </MDBox>
//         <TableBody {...getTableBodyProps()}>
//           {page.map((row, key) => {
//             prepareRow(row);
//             return (
//               <TableRow key={key} {...row.getRowProps()}>
//                 {row.cells.map((cell, idx) => (
//                   <DataTableBodyCell
//                     key={idx}
//                     noBorder={noEndBorder && rows.length - 1 === key}
//                     align={cell.column.align ? cell.column.align : "left"}
//                     {...cell.getCellProps()}
//                   >
//                     {cell.render("Cell")}
//                   </DataTableBodyCell>
//                 ))}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>

//       <MDBox
//         display="flex"
//         flexDirection={{ xs: "column", sm: "row" }}
//         justifyContent="space-between"
//         alignItems={{ xs: "flex-start", sm: "center" }}
//         p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
//       >
//         {showTotalEntries && (
//           <MDBox mb={{ xs: 3, sm: 0 }}>
//             <MDTypography variant="button" color="secondary" fontWeight="regular">
//               Showing {entriesStart} to {entriesEnd} of {rows.length} entries
//             </MDTypography>
//           </MDBox>
//         )}
//         {pageOptions.length > 1 && (
//           <MDPagination
//             variant={pagination.variant ? pagination.variant : "gradient"}
//             color={pagination.color ? pagination.color : "info"}
//           >
//             {canPreviousPage && (
//               <MDPagination item onClick={() => previousPage()}>
//                 <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
//               </MDPagination>
//             )}
//             {renderPagination.length > 6 ? (
//               <MDBox width="5rem" mx={1}>
//                 <MDInput
//                   inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
//                   value={customizedPageOptions[pageIndex]}
//                   onChange={(handleInputPagination, handleInputPaginationValue)}
//                 />
//               </MDBox>
//             ) : (
//               renderPagination
//             )}
//             {canNextPage && (
//               <MDPagination item onClick={() => nextPage()}>
//                 <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
//               </MDPagination>
//             )}
//           </MDPagination>
//         )}
//       </MDBox>
//     </TableContainer>
//   );
// }

// // Setting default values for the props of DataTable
// DataTable.defaultProps = {
//   entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
//   canSearch: false,
//   showTotalEntries: true,
//   pagination: { variant: "gradient", color: "info" },
//   isSorted: true,
//   noEndBorder: false,
// };

// // Typechecking props for the DataTable
// DataTable.propTypes = {
//   entriesPerPage: PropTypes.oneOfType([
//     PropTypes.shape({
//       defaultValue: PropTypes.number,
//       entries: PropTypes.arrayOf(PropTypes.number),
//     }),
//     PropTypes.bool,
//   ]),
//   canSearch: PropTypes.bool,
//   showTotalEntries: PropTypes.bool,
//   table: PropTypes.objectOf(PropTypes.array).isRequired,
//   pagination: PropTypes.shape({
//     variant: PropTypes.oneOf(["contained", "gradient"]),
//     color: PropTypes.oneOf([
//       "primary",
//       "secondary",
//       "info",
//       "success",
//       "warning",
//       "error",
//       "dark",
//       "light",
//     ]),
//   }),
//   isSorted: PropTypes.bool,
//   noEndBorder: PropTypes.bool,
// };

// export default DataTable;



import { useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce, useSortBy } from "react-table";
import axios from "axios";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Icon from "@mui/material/Icon";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDPagination from "components/MDPagination";

// Material Dashboard 2 React example components
import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
}) {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state

  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries
    ? entriesPerPage.entries.map((el) => el.toString())
    : ["5", "10", "15", "20", "25"];
  
  // Define the table columns including relevant fields and a blocking button
  const columns = useMemo(() => [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    // { Header: 'Email', accessor: 'email' },
    { Header: 'Phone Number', accessor: 'phoneNumber' },
    { Header: 'Telegram Username', accessor: 'username' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Actions', accessor: 'actions' }, // Column for actions like blocking
  ], []);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://telegram-bot-t2be.onrender.com/admin/users?round=1", {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNkMWZiYjlmLTQ2OGUtNDA0Mi1iMzExLTlkYjhjZTE5NjcxYyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImlhdCI6MTcyMTU3ODMzNCwiZXhwIjoxNzI5MzU0MzM0fQ.MaqnX3M2tojHir9rlEpyJVLtjuMibkHYZXlnEoWe-NQ`, // Replace YOUR_TOKEN_HERE with your actual token
          },
        });

        const fetchedData = response.data.data.map((user) => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          // email: user.email || "N/A",
          phoneNumber: user.phone_number,
          username: user.username,
          status: user.status,
        }));

        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  const setEntriesPerPage = (value) => setPageSize(value);

  const renderPagination = pageOptions.map((option) => (
    <MDPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </MDPagination>
  ));

  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  const customizedPageOptions = pageOptions.map((option) => option + 1);

  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  const [search, setSearch] = useState(globalFilter);

  const onSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);

  const setSortedValue = (column) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  let entriesEnd;
  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  // Function to handle blocking a user
  const handleBlockUser = async (userId) => {
    try {
      await axios.post(`https://your-api-endpoint.com/block-user`, { userId }, {
        headers: {
          Authorization: `Bearer YOUR_TOKEN_HERE`, // Use your actual token
        },
      });
      alert('User blocked successfully');
      // Optionally refresh data or update the UI state
    } catch (error) {
      console.error('Error blocking user:', error);
      alert('Failed to block user');
    }
  };

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {loading ? (
        <MDBox display="flex" justifyContent="center" alignItems="center" p={3}>
          <MDTypography variant="caption" color="secondary">
            Loading...
          </MDTypography>
        </MDBox>
      ) : (
        <>
          {entriesPerPage || canSearch ? (
            <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              {entriesPerPage && (
                <MDBox display="flex" alignItems="center">
                  <Autocomplete
                    disableClearable
                    value={pageSize.toString()}
                    options={entries}
                    onChange={(event, newValue) => {
                      setEntriesPerPage(parseInt(newValue, 10));
                    }}
                    size="small"
                    sx={{ width: "5rem" }}
                    renderInput={(params) => <MDInput {...params} />}
                  />
                  <MDTypography variant="caption" color="secondary">
                    &nbsp;&nbsp;entries per page
                  </MDTypography>
                </MDBox>
              )}
              {canSearch && (
                <MDBox width="12rem" ml="auto">
                  <MDInput
                    placeholder="Search..."
                    value={search}
                    size="small"
                    fullWidth
                    onChange={({ currentTarget }) => {
                      setSearch(currentTarget.value);
                      onSearchChange(currentTarget.value);
                    }}
                  />
                </MDBox>
              )}
            </MDBox>
          ) : null}
          <Table {...getTableProps()}>
            <MDBox component="thead">
              {headerGroups.map((headerGroup, key) => (
                <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, idx) => (
                    <DataTableHeadCell
                      key={idx}
                      {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                      width={column.width ? column.width : "auto"}
                      align={column.align ? column.align : "left"}
                      sorted={setSortedValue(column)}
                    >
                      {column.render("Header")}
                    </DataTableHeadCell>
                  ))}
                </TableRow>
              ))}
            </MDBox>
            <TableBody {...getTableBodyProps()}>
              {page.map((row, key) => {
                prepareRow(row);
                return (
                  <TableRow key={key} {...row.getRowProps()}>
                    {row.cells.map((cell, idx) => (
                      <DataTableBodyCell
                        key={idx}
                        noBorder={noEndBorder && rows.length - 1 === key}
                        align={cell.column.align ? cell.column.align : "left"}
                        {...cell.getCellProps()}
                      >
                        {cell.column.id === 'actions' ? (
                          <button onClick={() => handleBlockUser(row.original.id)}>Block</button>
                        ) : (
                          cell.render("Cell")
                        )}
                      </DataTableBodyCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <MDBox
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
          >
            {showTotalEntries && (
              <MDBox mb={{ xs: 3, sm: 0 }}>
                <MDTypography variant="button" color="secondary" fontWeight="regular">
                  Showing {entriesStart} to {entriesEnd} of {rows.length} entries
                </MDTypography>
              </MDBox>
            )}
            {pageOptions.length > 1 && (
              <MDPagination
                variant={pagination.variant ? pagination.variant : "gradient"}
                color={pagination.color ? pagination.color : "info"}
              >
                {canPreviousPage && (
                  <MDPagination item onClick={() => previousPage()}>
                    <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
                  </MDPagination>
                )}
                {renderPagination.length > 6 ? (
                  <MDBox width="5rem" mx={1}>
                    <MDInput
                      inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                      value={customizedPageOptions[pageIndex]}
                      onChange={(handleInputPagination, handleInputPaginationValue)}
                    />
                  </MDBox>
                ) : (
                  renderPagination
                )}
                {canNextPage && (
                  <MDPagination item onClick={() => nextPage()}>
                    <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
                  </MDPagination>
                )}
              </MDPagination>
            )}
          </MDBox>
        </>
      )}
    </TableContainer>
  );
}

DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};

DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;
