import React, { PureComponent } from "react"
import { students } from "./data"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
export default function BarchartAdmin() {
  console.log("CHAYCHART")
  return (
    <div className="flex flex-col rounded-xl bg-white">
      <div>
        <p className="p-4 font-Manrope text-base font-semibold text-black">Student Classification</p>
      </div>
      <BarChart
        width={600}
        height={300}
        data={students}
        margin={{
          top: 5,
          right: 30,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis dataKey="type" axisLine={false} padding={{ left: 10 }} />
        <YAxis axisLine={false} tickLine={false} padding={{ bottom: 10, top: 10 }} />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend iconType="circle" iconSize={10} verticalAlign="top" align="right" />
        <Bar
          fill="#4a7746"
          activeBar={false}
          isAnimationActive={true}
          barSize={24}
          radius={[4, 4, 4, 4]}
          dataKey="numberThisYear"
          animationBegin={0}
          animationDuration={1500}
          animationEasing="ease"
        />
        <Bar
          dataKey="numberLastYear"
          fill="#B0D4B8"
          activeBar={false}
          isAnimationActive={true}
          barSize={24}
          radius={[4, 4, 4, 4]}
          animationBegin={0}
          animationDuration={1500}
          animationEasing="ease"
        />
      </BarChart>
    </div>
  )
}