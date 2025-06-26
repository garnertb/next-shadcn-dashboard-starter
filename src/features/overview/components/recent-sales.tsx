import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { mockRecentCopilotActivity } from '@/constants/copilot-metrics';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

function getAcceptanceRateColor(rate: number): string {
  if (rate >= 55) return 'bg-green-500';
  if (rate >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours}h ago`;
  return `${Math.floor(diffInHours / 24)}d ago`;
}

export function RecentSales() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Recent Copilot Activity</CardTitle>
        <CardDescription>
          Top active developers using GitHub Copilot today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {mockRecentCopilotActivity.map((activity, index) => (
            <div key={index} className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={activity.user.avatar} alt='Avatar' />
                <AvatarFallback>
                  {getInitials(activity.user.name)}
                </AvatarFallback>
              </Avatar>
              <div className='ml-4 flex-1 space-y-1'>
                <div className='flex items-center justify-between'>
                  <p className='text-sm leading-none font-medium'>
                    {activity.user.name}
                  </p>
                  <span className='text-muted-foreground text-xs'>
                    {formatTimeAgo(activity.last_active)}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <p className='text-muted-foreground text-xs'>
                    {activity.primary_language}
                  </p>
                  <Badge
                    variant='outline'
                    className={`px-1.5 py-0.5 text-xs ${getAcceptanceRateColor(activity.acceptance_rate)} border-none text-white`}
                  >
                    {activity.acceptance_rate}%
                  </Badge>
                </div>
              </div>
              <div className='ml-auto text-right'>
                <div className='text-sm font-medium'>
                  {activity.acceptances}/{activity.suggestions}
                </div>
                <div className='text-muted-foreground text-xs'>accepted</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
