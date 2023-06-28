import React, { useState } from "react";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from "recharts";

const PirExample = () => {
  const data = [
    { name: "Tea", value: 400 },
    { name: "Coffee", value: 300 },
    { name: "Cola", value: 300 },
    { name: "Water", value: 200 },
  ];

  // 套件功能
  const [state, setState] = useState({ activeIndex: 0, subscriptioname: "" });
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const onPieEnter = (_, index) => {
    setState({ activeIndex: index });
  };

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    console.log("payload", payload);
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={375} dy={5} textAnchor="middle" fill={fill}>
          選取訂閱帳戶 :
        </text>
        {/* 各部分扇形區域 */}
        <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
        {/* 動態外圈 */}
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    );
  };
  return (
    <>
      <div>
        <div class="row d-flex justify-content-center text-center">
          <h1>Favorite Beverages - technostuf.com</h1>
          <hr />
          <div className="col-md-8">
            <ResponsiveContainer width={400} height={400} className="text-center">
              <PieChart width={400} height={400}>
                <Legend layout="vertical" verticalAlign="top" align="top" />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  activeIndex={state.activeIndex}
                  activeShape={renderActiveShape}
                  onMouseEnter={onPieEnter}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default PirExample;
