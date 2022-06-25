import React, { useState } from "react"
import { DialogComponent } from "@syncfusion/ej2-react-popups"
import { GiTakeMyMoney } from "react-icons/gi"
import nowPayments from "../data/NowPayments.jfif"
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
import { useStateContext } from "../contexts/ContextProvider"
import product9 from "../data/product9.jpg"
import { FaHistory, FaWallet } from "react-icons/fa"

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

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext()
  const [visibility, setDialogVisibility] = useState(false)

  const onOverlayClick = () => {
    setDialogVisibility(true)
  }
  const dialogClose = () => {
    setDialogVisibility(false)
  }
  const handleClick = () => {
    setDialogVisibility(true)
  }

  const header = () => {
    return (
      <div>
        <img src={nowPayments} />
        <div
          title="NOWPayments"
          className="e-icon-settings dlg-template e-primary"
        >
          <a href="https://account.nowpayments.io/sign-in">
            Sign in to your Account
          </a>
        </div>
      </div>
    )
  }
  const footerTemplate = () => {
    return (
      <div>
        <p>
          Cryptocurrency payment gateway which allows businesses to accept BTC,
          ETH, XRP and other coins on their websites.
        </p>

        <a href="https://account.nowpayments.io/sign-in" className="mt-24">
          <button
            id="sendButton"
            className="e-control e-btn e-primary"
            data-ripple="true"
          >
            Sign In
          </button>
        </a>
      </div>
    )
  }
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Current Investments</p>
              <p className="text-2xl">USD 152.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <GiTakeMyMoney />
            </button>
          </div>
          {/* <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div> */}
        </div>
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

      <div className="flex flex-wrap gap-5 m-6 justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-3/4 md:w-3/4">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Investment Summary</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-24 rounded-xl w-50 p-8 pt-9 m-3">
          <div className="justify-center items-center">
            <div onClick={handleClick}>
              <Button
                color="white"
                bgColor={currentColor}
                text="Re-Invest"
                borderRadius="10px"
              />
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-24 rounded-xl w-50 p-8 pt-9 m-3">
          <div onClick={handleClick}>
            <Button
              color="white"
              bgColor={currentColor}
              text="Deposit"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
      <DialogComponent
        width="450px"
        isModal={true}
        visible={visibility}
        close={dialogClose}
        overlayClick={onOverlayClick}
        header={header}
        footerTemplate={footerTemplate}
        showCloseIcon={true}
        closeOnEscape={true}
      >
        Deposit with NOWPayments
      </DialogComponent>
    </div>
  )
}

export default Ecommerce
