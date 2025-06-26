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
import { languageDistribution } from '@/data/copilot-metrics';

const chartData = languageDistribution.map(item => ({
  language: item.language,
  users: item.users,
  fill: item.fill
}));

const chartConfig = {
  users: {
    label: 'Users'
  },
  JavaScript: {
    label: 'JavaScript',
    color: 'var(--primary)'
  },
  TypeScript: {
    label: 'TypeScript',
    color: 'var(--primary)'
  },
  Python: {
    label: 'Python',
    color: 'var(--primary)'
  },
  Java: {
    label: 'Java',
    color: 'var(--primary)'
  },
  'C#': {
    label: 'C#',
    color: 'var(--primary)'
  },
  Go: {
    label: 'Go',
    color: 'var(--primary)'
  },
  Rust: {
    label: 'Rust',
    color: 'var(--primary)'
  },
  Other: {
    label: 'Other',
    color: 'var(--primary)'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalUsers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0);
  }, []);

  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Programming Languages</CardTitle>
        <CardDescription>
          <span className='hidden @[540px]/card:block'>
            Copilot usage by programming language
          </span>
          <span className='@[540px]/card:hidden'>Language distribution</span>
        </CardDescription>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square h-[250px]'
        >
          <PieChart>
            <defs>
              {['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'Other'].map(
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
                      stopOpacity={1 - index * 0.1}
                    />
                    <stop
                      offset='100%'
                      stopColor='var(--primary)'
                      stopOpacity={0.8 - index * 0.1}
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
                fill: `url(#fill${item.language})`
              }))}
              dataKey='users'
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
                          {totalUsers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground text-sm'
                        >
                          Total Users
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
          {((chartData[0].users / totalUsers) * 100).toFixed(1)}%{' '}
          <IconTrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          Based on Copilot usage from January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
