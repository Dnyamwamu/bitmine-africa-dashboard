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
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy"
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

const Deposit = () => {
  const { currentColor, currentMode } = useStateContext()
  const editing = { allowDeleting: true, allowEditing: true }
  return (
    <div className="mt-24">
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="History" title="Transaction Statistics" />
        <GridComponent
          id="gridcomp"
          dataSource={ordersData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {ordersGrid.map((item, index) => (
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
    </div>
  )
}

export default Deposit
