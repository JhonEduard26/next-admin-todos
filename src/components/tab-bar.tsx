'use client'

import { useState } from "react"


interface Props {
  currentTab?: number
  tabOptions?: number[]
}

export default function TabBar({ currentTab = 1, tabOptions = [1, 2, 3, 4] }: Props) {
  const [tabState, setTabState] = useState(currentTab)

  const onSelectedTab = (tab: number) => {
    setTabState(tab)
  }

  return (
    <div className="grid w-full grid-cols-4 rounded-xl bg-gray-200 p-2">
      {
        tabOptions.map((tab) => (
          <div key={tab}>
            <input
              type="radio"
              id={tab.toString()}
              checked={tab === tabState}
              className="peer hidden"
              onChange={() => {}}
            />
            <label
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
              onClick={() => onSelectedTab(tab)}
            >
              {tab}
            </label>
          </div>
        ))
      }
    </div>
  )
}