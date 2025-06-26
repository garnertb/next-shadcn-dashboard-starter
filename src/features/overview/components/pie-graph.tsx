'use client';

import * as React from 'react';
import { IconTrendingUp } from '@tabler/icons-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { language: 'JavaScript', usage: 2847, fill: 'var(--primary)' },
  { language: 'Python', usage: 2134, fill: 'var(--primary-light)' },
  { language: 'TypeScript', usage: 1876, fill: 'var(--primary-lighter)' },
  { language: 'Java', usage: 1543, fill: 'var(--primary-dark)' },
  { language: 'Go', usage: 987, fill: 'var(--primary-darker)' },
  { language: 'Other', usage: 1234, fill: 'var(--primary-darkest)' }
];

const chartConfig = {
  usage: {
    label: 'Usage'
  },
  javascript: {
    label: 'JavaScript',
    color: 'var(--primary)'
  },
  python: {
    label: 'Python',
    color: 'var(--primary-light)'
  },
  typescript: {
    label: 'TypeScript',
    color: 'var(--primary-lighter)'
  },
  java: {
    label: 'Java',
    color: 'var(--primary-dark)'
  },
  go: {
    label: 'Go',
    color: 'var(--primary-darker)'
  },
  other: {
    label: 'Other',
    color: 'var(--primary-darkest)'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalUsage = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.usage, 0);
  }, []);

  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Programming Language Usage</CardTitle>
        <CardDescription>
          <span className='hidden @[540px]/card:block'>
            Copilot usage distribution by programming language
          </span>
          <span className='@[540px]/card:hidden'>Language usage</span>
        </CardDescription>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square h-[250px]'
        >
          <PieChart>
            <defs>
              {['javascript', 'python', 'typescript', 'java', 'go', 'other'].map(
                (language, index) => (
                  <linearGradient
                    key={language}
                    id={`fill${language}`}
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='0%'
                      stopColor='var(--primary)'
                      stopOpacity={1 - index * 0.12}
                    />
                    <stop
                      offset='100%'
                      stopColor='var(--primary)'
                      stopOpacity={0.8 - index * 0.12}
                    />
                  </linearGradient>
                )
              )}
            </defs>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData.map((item) => ({
                ...item,
                fill: `url(#fill${item.language.toLowerCase()})`
              }))}
              dataKey='usage'
              nameKey='language'
              innerRadius={60}
              strokeWidth={2}
              stroke='var(--background)'
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {totalUsage.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground text-sm'
                        >
                          Total Usage
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 leading-none font-medium'>
          JavaScript leads with{' '}
          {((chartData[0].usage / totalUsage) * 100).toFixed(1)}%{' '}
          <IconTrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          Copilot usage distribution over the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
