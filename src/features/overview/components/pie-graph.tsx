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
import { mockCopilotLanguageBreakdown } from '@/constants/copilot-metrics';

const chartData = mockCopilotLanguageBreakdown.map((lang, index) => ({
  language: lang.language.toLowerCase().replace(/[^a-z]/g, ''),
  suggestions: lang.suggestions,
  acceptances: lang.acceptances,
  fill: `var(--chart-${index + 1})`
}));

const chartConfig = mockCopilotLanguageBreakdown.reduce(
  (config, lang, index) => {
    const key = lang.language.toLowerCase().replace(/[^a-z]/g, '');
    config[key] = {
      label: lang.language,
      color: `hsl(var(--chart-${index + 1}))`
    };
    return config;
  },
  {} as ChartConfig
);

export function PieGraph() {
  const totalSuggestions = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.suggestions, 0);
  }, []);

  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Copilot Usage by Programming Language</CardTitle>
        <CardDescription>
          <span className='hidden @[540px]/card:block'>
            Distribution of Copilot suggestions across programming languages
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='suggestions'
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
                          {totalSuggestions.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground text-sm'
                        >
                          Total Suggestions
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
          {(
            (mockCopilotLanguageBreakdown[0].suggestions / totalSuggestions) *
            100
          ).toFixed(1)}
          % <IconTrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          Based on usage data from January 2024
        </div>
      </CardFooter>
    </Card>
  );
}
