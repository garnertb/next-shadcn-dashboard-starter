import { AreaGraph } from '@/features/overview/components/area-graph';
import { BarGraph } from '@/features/overview/components/bar-graph';
import { PieGraph } from '@/features/overview/components/pie-graph';
import { RecentSales } from '@/features/overview/components/recent-sales';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IconTrendingUp } from '@tabler/icons-react';
import { mockCopilotSummaryMetrics } from '@/constants/copilot-metrics';

export default function CopilotDashboard() {
  return (
    <div className='bg-background min-h-screen p-6'>
      <div className='flex flex-1 flex-col space-y-2'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-2xl font-bold tracking-tight'>
            GitHub Copilot Analytics Dashboard 🚀
          </h2>
          <div className='hidden items-center space-x-2 md:flex'>
            <button className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2'>
              Export Report
            </button>
          </div>
        </div>
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='analytics' disabled>
              Advanced Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-6'>
              <Card className=''>
                <CardHeader>
                  <CardDescription>Total Suggestions</CardDescription>
                  <CardTitle className='text-2xl font-semibold tabular-nums'>
                    {mockCopilotSummaryMetrics.total_suggestions_last_30_days.toLocaleString()}
                  </CardTitle>
                  <CardAction>
                    <Badge variant='outline'>
                      <IconTrendingUp />
                      +18.3%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                  <div className='line-clamp-1 flex gap-2 font-medium'>
                    Growing adoption this month{' '}
                    <IconTrendingUp className='size-4' />
                  </div>
                  <div className='text-muted-foreground'>
                    Suggestions generated in last 30 days
                  </div>
                </CardFooter>
              </Card>
              <Card className=''>
                <CardHeader>
                  <CardDescription>Acceptance Rate</CardDescription>
                  <CardTitle className='text-2xl font-semibold tabular-nums'>
                    {mockCopilotSummaryMetrics.overall_acceptance_rate}%
                  </CardTitle>
                  <CardAction>
                    <Badge variant='outline'>
                      <IconTrendingUp />
                      +2.1%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                  <div className='line-clamp-1 flex gap-2 font-medium'>
                    Improved developer experience{' '}
                    <IconTrendingUp className='size-4' />
                  </div>
                  <div className='text-muted-foreground'>
                    Code suggestions accepted by developers
                  </div>
                </CardFooter>
              </Card>
              <Card className=''>
                <CardHeader>
                  <CardDescription>Active Users</CardDescription>
                  <CardTitle className='text-2xl font-semibold tabular-nums'>
                    {mockCopilotSummaryMetrics.total_active_users}
                  </CardTitle>
                  <CardAction>
                    <Badge variant='outline'>
                      <IconTrendingUp />
                      +8.2%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                  <div className='line-clamp-1 flex gap-2 font-medium'>
                    Strong user engagement <IconTrendingUp className='size-4' />
                  </div>
                  <div className='text-muted-foreground'>
                    Developers actively using Copilot
                  </div>
                </CardFooter>
              </Card>
              <Card className=''>
                <CardHeader>
                  <CardDescription>Seat Utilization</CardDescription>
                  <CardTitle className='text-2xl font-semibold tabular-nums'>
                    {mockCopilotSummaryMetrics.seat_utilization}%
                  </CardTitle>
                  <CardAction>
                    <Badge variant='outline'>
                      <IconTrendingUp />
                      +5.4%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                  <div className='line-clamp-1 flex gap-2 font-medium'>
                    Excellent license utilization{' '}
                    <IconTrendingUp className='size-4' />
                  </div>
                  <div className='text-muted-foreground'>
                    {mockCopilotSummaryMetrics.total_active_users} of{' '}
                    {mockCopilotSummaryMetrics.total_copilot_seats} seats used
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
              <div className='col-span-4'>
                <BarGraph />
              </div>
              <div className='col-span-4 md:col-span-3'>
                <RecentSales />
              </div>
              <div className='col-span-4'>
                <AreaGraph />
              </div>
              <div className='col-span-4 md:col-span-3'>
                <PieGraph />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
