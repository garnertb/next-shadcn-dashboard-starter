import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { recentCopilotActivity } from '@/data/copilot-metrics';

export function RecentSales() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Top Active Users</CardTitle>
        <CardDescription>Recent Copilot activity and acceptance rates.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {recentCopilotActivity.map((activity, index) => (
            <div key={index} className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={activity.avatar} alt='Avatar' />
                <AvatarFallback>{activity.fallback}</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm leading-none font-medium'>{activity.user}</p>
                <p className='text-muted-foreground text-sm'>{activity.activity}</p>
              </div>
              <div className='ml-auto font-medium text-right'>
                <div className='text-sm'>{activity.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
