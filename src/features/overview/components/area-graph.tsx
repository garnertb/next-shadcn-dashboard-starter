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
import { mockCopilotUsageMetrics } from '@/constants/copilot-metrics';

// Calculate acceptance rate for each day and group by week for better visualization
const chartData = mockCopilotUsageMetrics
  .filter((_, index) => index % 7 === 0) // Take every 7th day for weekly data
  .map((metric, index) => {
    const acceptance_rate =
      (metric.total_acceptances_count / metric.total_suggestions_count) * 100;
    const active_users = metric.total_active_users;
    return {
      week: `Week ${index + 1}`,
      acceptance_rate: parseFloat(acceptance_rate.toFixed(1)),
      active_users: active_users
    };
  });

const chartConfig = {
  acceptance_rate: {
    label: 'Acceptance Rate (%)',
    color: 'var(--primary)'
  },
  active_users: {
    label: 'Active Users',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Acceptance Rate & User Activity Trends</CardTitle>
        <CardDescription>
          Weekly acceptance rates and active user count over time
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
              <linearGradient
                id='fillAcceptanceRate'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop
                  offset='5%'
                  stopColor='var(--primary)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='var(--primary)'
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id='fillActiveUsers' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='hsl(var(--chart-2))'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='hsl(var(--chart-2))'
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='week'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' />}
            />
            <Area
              dataKey='acceptance_rate'
              type='natural'
              fill='url(#fillAcceptanceRate)'
              stroke='var(--primary)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 leading-none font-medium'>
              Acceptance rate trending up by 2.1% this month{' '}
              <IconTrendingUp className='h-4 w-4' />
            </div>
            <div className='text-muted-foreground flex items-center gap-2 leading-none'>
              January 2024 - Current
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
