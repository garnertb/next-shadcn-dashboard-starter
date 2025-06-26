'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', suggestions: 892, acceptances: 654 },
  { date: '2024-04-02', suggestions: 1047, acceptances: 789 },
  { date: '2024-04-03', suggestions: 967, acceptances: 698 },
  { date: '2024-04-04', suggestions: 1142, acceptances: 863 },
  { date: '2024-04-05', suggestions: 1373, acceptances: 982 },
  { date: '2024-04-06', suggestions: 901, acceptances: 645 },
  { date: '2024-04-07', suggestions: 745, acceptances: 534 },
  { date: '2024-04-08', suggestions: 1209, acceptances: 891 },
  { date: '2024-04-09', suggestions: 659, acceptances: 471 },
  { date: '2024-04-10', suggestions: 1061, acceptances: 756 },
  { date: '2024-04-11', suggestions: 1327, acceptances: 945 },
  { date: '2024-04-12', suggestions: 1092, acceptances: 798 },
  { date: '2024-04-13', suggestions: 1242, acceptances: 912 },
  { date: '2024-04-14', suggestions: 837, acceptances: 598 },
  { date: '2024-04-15', suggestions: 720, acceptances: 521 },
  { date: '2024-04-16', suggestions: 738, acceptances: 534 },
  { date: '2024-04-17', suggestions: 1346, acceptances: 987 },
  { date: '2024-04-18', suggestions: 1264, acceptances: 934 },
  { date: '2024-04-19', suggestions: 843, acceptances: 612 },
  { date: '2024-04-20', suggestions: 589, acceptances: 423 },
  { date: '2024-04-21', suggestions: 737, acceptances: 532 },
  { date: '2024-04-22', suggestions: 624, acceptances: 456 },
  { date: '2024-04-23', suggestions: 738, acceptances: 543 },
  { date: '2024-04-24', suggestions: 1187, acceptances: 867 },
  { date: '2024-04-25', suggestions: 915, acceptances: 672 },
  { date: '2024-04-26', suggestions: 475, acceptances: 341 },
  { date: '2024-04-27', suggestions: 1183, acceptances: 874 },
  { date: '2024-04-28', suggestions: 622, acceptances: 445 },
  { date: '2024-04-29', suggestions: 815, acceptances: 598 },
  { date: '2024-04-30', suggestions: 1254, acceptances: 923 },
  { date: '2024-05-01', suggestions: 765, acceptances: 561 },
  { date: '2024-05-02', suggestions: 1093, acceptances: 801 },
  { date: '2024-05-03', suggestions: 847, acceptances: 623 },
  { date: '2024-05-04', suggestions: 1285, acceptances: 942 },
  { date: '2024-05-05', suggestions: 1381, acceptances: 1014 },
  { date: '2024-05-06', suggestions: 1398, acceptances: 1025 },
  { date: '2024-05-07', suggestions: 988, acceptances: 724 },
  { date: '2024-05-08', suggestions: 649, acceptances: 476 },
  { date: '2024-05-09', suggestions: 727, acceptances: 533 },
  { date: '2024-05-10', suggestions: 1093, acceptances: 802 },
  { date: '2024-05-11', suggestions: 935, acceptances: 686 },
  { date: '2024-05-12', suggestions: 797, acceptances: 584 },
  { date: '2024-05-13', suggestions: 697, acceptances: 511 },
  { date: '2024-05-14', suggestions: 1348, acceptances: 989 },
  { date: '2024-05-15', suggestions: 1273, acceptances: 934 },
  { date: '2024-05-16', suggestions: 1138, acceptances: 835 },
  { date: '2024-05-17', suggestions: 1399, acceptances: 1026 },
  { date: '2024-05-18', suggestions: 1015, acceptances: 744 },
  { date: '2024-05-19', suggestions: 735, acceptances: 539 },
  { date: '2024-05-20', suggestions: 677, acceptances: 497 },
  { date: '2024-05-21', suggestions: 482, acceptances: 354 },
  { date: '2024-05-22', suggestions: 481, acceptances: 353 },
  { date: '2024-05-23', suggestions: 852, acceptances: 625 },
  { date: '2024-05-24', suggestions: 894, acceptances: 656 },
  { date: '2024-05-25', suggestions: 701, acceptances: 514 },
  { date: '2024-05-26', suggestions: 613, acceptances: 450 },
  { date: '2024-05-27', suggestions: 1220, acceptances: 896 },
  { date: '2024-05-28', suggestions: 733, acceptances: 538 },
  { date: '2024-05-29', suggestions: 478, acceptances: 351 },
  { date: '2024-05-30', suggestions: 940, acceptances: 690 },
  { date: '2024-05-31', suggestions: 678, acceptances: 498 },
  { date: '2024-06-01', suggestions: 678, acceptances: 498 },
  { date: '2024-06-02', suggestions: 1270, acceptances: 932 },
  { date: '2024-06-03', suggestions: 503, acceptances: 369 },
  { date: '2024-06-04', suggestions: 1239, acceptances: 909 },
  { date: '2024-06-05', suggestions: 488, acceptances: 358 },
  { date: '2024-06-06', suggestions: 894, acceptances: 656 },
  { date: '2024-06-07', suggestions: 923, acceptances: 677 },
  { date: '2024-06-08', suggestions: 1085, acceptances: 796 },
  { date: '2024-06-09', suggestions: 1238, acceptances: 908 },
  { date: '2024-06-10', suggestions: 655, acceptances: 481 },
  { date: '2024-06-11', suggestions: 492, acceptances: 361 },
  { date: '2024-06-12', suggestions: 1292, acceptances: 948 },
  { date: '2024-06-13', suggestions: 481, acceptances: 353 },
  { date: '2024-06-14', suggestions: 1226, acceptances: 900 },
  { date: '2024-06-15', suggestions: 1007, acceptances: 739 },
  { date: '2024-06-16', suggestions: 971, acceptances: 713 },
  { date: '2024-06-17', suggestions: 1375, acceptances: 1009 },
  { date: '2024-06-18', suggestions: 507, acceptances: 372 },
  { date: '2024-06-19', suggestions: 941, acceptances: 691 },
  { date: '2024-06-20', suggestions: 1208, acceptances: 887 },
  { date: '2024-06-21', suggestions: 669, acceptances: 491 },
  { date: '2024-06-22', suggestions: 917, acceptances: 673 },
  { date: '2024-06-23', suggestions: 1380, acceptances: 1013 },
  { date: '2024-06-24', suggestions: 632, acceptances: 464 },
  { date: '2024-06-25', suggestions: 641, acceptances: 470 },
  { date: '2024-06-26', suggestions: 1234, acceptances: 906 },
  { date: '2024-06-27', suggestions: 1348, acceptances: 989 },
  { date: '2024-06-28', suggestions: 649, acceptances: 476 },
  { date: '2024-06-29', suggestions: 503, acceptances: 369 },
  { date: '2024-06-30', suggestions: 1246, acceptances: 914 }
];

const chartConfig = {
  views: {
    label: 'Copilot Usage'
  },
  suggestions: {
    label: 'Suggestions',
    color: 'var(--primary)'
  },
  acceptances: {
    label: 'Acceptances',
    color: 'var(--primary)'
  },
  error: {
    label: 'Error',
    color: 'var(--primary)'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('suggestions');

  const total = React.useMemo(
    () => ({
      suggestions: chartData.reduce((acc, curr) => acc + curr.suggestions, 0),
      acceptances: chartData.reduce((acc, curr) => acc + curr.acceptances, 0)
    }),
    []
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (activeChart === 'error') {
      throw new Error('Mocking Error');
    }
  }, [activeChart]);

  if (!isClient) {
    return null;
  }

  return (
    <Card className='@container/card !pt-3'>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b !p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 !py-0'>
          <CardTitle>Copilot Daily Usage Trends</CardTitle>
          <CardDescription>
            <span className='hidden @[540px]/card:block'>
              Suggestions and acceptances for the last 3 months
            </span>
            <span className='@[540px]/card:hidden'>Last 3 months</span>
          </CardDescription>
        </div>
        <div className='flex'>
          {['suggestions', 'acceptances', 'error'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            if (!chart || total[key as keyof typeof total] === 0) return null;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className='data-[active=true]:bg-primary/5 hover:bg-primary/5 relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left transition-colors duration-200 even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6'
                onClick={() => setActiveChart(chart)}
              >
                <span className='text-muted-foreground text-xs'>
                  {chartConfig[chart].label}
                </span>
                <span className='text-lg leading-none font-bold sm:text-3xl'>
                  {total[key as keyof typeof total]?.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <defs>
              <linearGradient id='fillBar' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='0%'
                  stopColor='var(--primary)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='100%'
                  stopColor='var(--primary)'
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              cursor={{ fill: 'var(--primary)', opacity: 0.1 }}
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='usage'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill='url(#fillBar)'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
