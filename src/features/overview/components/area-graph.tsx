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
  { month: 'January', acceptanceRate: 68.2, chatUsage: 42.1 },
  { month: 'February', acceptanceRate: 70.5, chatUsage: 45.3 },
  { month: 'March', acceptanceRate: 69.8, chatUsage: 48.7 },
  { month: 'April', acceptanceRate: 71.3, chatUsage: 51.2 },
  { month: 'May', acceptanceRate: 72.9, chatUsage: 54.8 },
  { month: 'June', acceptanceRate: 73.4, chatUsage: 58.3 }
];

const chartConfig = {
  usage: {
    label: 'Usage Metrics'
  },
  acceptanceRate: {
    label: 'Acceptance Rate (%)',
    color: 'var(--primary)'
  },
  chatUsage: {
    label: 'Chat Usage (%)',
    color: 'var(--primary-light)'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Copilot Engagement Trends</CardTitle>
        <CardDescription>
          Acceptance rates and chat usage over the last 6 months
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
              <linearGradient id='fillAcceptanceRate' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-acceptanceRate)'
                  stopOpacity={1.0}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-acceptanceRate)'
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id='fillChatUsage' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--color-chatUsage)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='var(--color-chatUsage)'
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
              dataKey='chatUsage'
              type='natural'
              fill='url(#fillChatUsage)'
              stroke='var(--color-chatUsage)'
              stackId='a'
            />
            <Area
              dataKey='acceptanceRate'
              type='natural'
              fill='url(#fillAcceptanceRate)'
              stroke='var(--color-acceptanceRate)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 leading-none font-medium'>
              Acceptance rate up 5.2% this month{' '}
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
