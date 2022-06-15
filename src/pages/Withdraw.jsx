import React from "react"
import { GiTakeMyMoney } from "react-icons/gi"

import { GoPrimitiveDot } from "react-icons/go"
import { IoIosMore } from "react-icons/io"
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns"

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components"
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
  withdrawnData,
} from "../data/dummy"

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids"
import { ordersData, contextMenuItems, withdrawGrid } from "../data/dummy"
import { Header } from "../components"

import { useStateContext } from "../contexts/ContextProvider"
import product9 from "../data/product9.jpg"

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
)

const Withdraw = () => {
  const { currentColor, currentMode } = useStateContext()
  const editing = { allowDeleting: true, allowEditing: true }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex justify-between">
        <Header category="Transaction Statistics" title="Withdraw" />
        <div className="opacity-0.9 hover:drop-shadow-xl">
          <Button
            color="white"
            bgColor={currentColor}
            text="Withdraw -"
            borderRadius="10px"
          />
        </div>
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={withdrawnData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {withdrawGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  )
}

export default Withdraw
