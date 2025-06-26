'use client';

import { IconTrendingUp } from '@tabler/icons-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

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
  { month: 'January', activeUsers: 2186, engagedUsers: 1980 },
  { month: 'February', activeUsers: 2405, engagedUsers: 2200 },
  { month: 'March', activeUsers: 2637, engagedUsers: 2420 },
  { month: 'April', activeUsers: 2173, engagedUsers: 1990 },
  { month: 'May', activeUsers: 2809, engagedUsers: 2630 },
  { month: 'June', activeUsers: 3214, engagedUsers: 3040 }
];

const chartConfig = {
  users: {
    label: 'Users'
  },
  activeUsers: {
    label: 'Active Users',
    color: 'var(--primary)'
  },
  engagedUsers: {
    label: 'Engaged Users',
    color: 'var(--primary)'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Copilot User Engagement</CardTitle>
        <CardDescription>
          Showing active and engaged users for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <defs>
              <linearGradient id='fillActiveUsers' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-activeUsers)'
                  stopOpacity={1.0}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-activeUsers)'
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id='fillEngagedUsers' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-engagedUsers)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-engagedUsers)'
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' />}
            />
            <Area
              dataKey='engagedUsers'
              type='natural'
              fill='url(#fillEngagedUsers)'
              stroke='var(--color-engagedUsers)'
              stackId='a'
            />
            <Area
              dataKey='activeUsers'
              type='natural'
              fill='url(#fillActiveUsers)'
              stroke='var(--color-activeUsers)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 leading-none font-medium'>
              Trending up by 18.2% this month{' '}
              <IconTrendingUp className='h-4 w-4' />
            </div>
            <div className='text-muted-foreground flex items-center gap-2 leading-none'>
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
