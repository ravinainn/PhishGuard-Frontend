import React from 'react'
import { Card, LineChart, Metric, Title } from '@tremor/react'
import styled from 'styled-components';

// const chartData = [
//     {
//       visitors: 1000,
//       dateTime: '2023-10-31T21:25:00Z',
//     },
//     {
//       visitors: 900,
//       dateTime: '2023-10-31T21:25:30Z',
//     },
//     {
//       visitors: 800,
//       dateTime: '2023-10-31T21:26:00Z',
//     },
//     {
//       visitors: 700,
//       dateTime: '2023-10-31T21:26:30Z',
//     },
//     {
//       visitors: 600,
//       dateTime: '2023-10-31T21:27:00Z',
//     },
//     {
//       visitors: 500,
//       dateTime: '2023-10-31T21:27:30Z',
//     },
//     {
//       visitors: 400,
//       dateTime: '2023-10-31T21:28:00Z',
//     },
//     {
//       visitors: 300,
//       dateTime: '2023-10-31T21:28:30Z',
//     },
//     {
//       visitors: 200,
//       dateTime: '2023-10-31T21:29:00Z',
//     },
//     {
//       visitors: 100,
//       dateTime: '2023-10-31T21:29:30Z',
//     },
//   ];
  
const chartdata = [
    {
      year: 1970,
      "Export Growth Rate": 2.04,
      "Import Growth Rate": 1.53,
    },
    {
      year: 1971,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.58,
    },
    {
      year: 1972,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1973,
      "Export Growth Rate": 1.93,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1974,
      "Export Growth Rate": 1.88,
      "Import Growth Rate": 1.67,
    },
    //...
  ];
  
  const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const ChartTrafficAnalysis = () => {
  return (
    <WebTrafficChartSection>
      <Card>
        <StyledTitle>Web Traffic <br/> Analysis</StyledTitle>
        <LineChart
      className="mt-6"
      data={chartdata}
      index="year"
      categories={["Export Growth Rate", "Import Growth Rate"]}
      colors={["emerald", "gray"]}
      valueFormatter={valueFormatter}
      yAxisWidth={40}
    />
      </Card>
    </WebTrafficChartSection>
  )
}

export default ChartTrafficAnalysis

const WebTrafficChartSection = styled.div`
  margin-top: 3rem;
`

const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.secondary};
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 120%;
`