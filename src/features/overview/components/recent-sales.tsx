import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

const activityData = [
  {
    name: 'Sarah Chen',
    team: 'Frontend Team',
    avatar: 'https://api.slingacademy.com/public/sample-users/1.png',
    fallback: 'SC',
    suggestions: '2,847',
    acceptanceRate: '78.4%'
  },
  {
    name: 'Marcus Rodriguez',
    team: 'Backend Team',
    avatar: 'https://api.slingacademy.com/public/sample-users/2.png',
    fallback: 'MR',
    suggestions: '1,943',
    acceptanceRate: '71.2%'
  },
  {
    name: 'Emily Zhang',
    team: 'DevOps Team',
    avatar: 'https://api.slingacademy.com/public/sample-users/3.png',
    fallback: 'EZ',
    suggestions: '3,125',
    acceptanceRate: '82.1%'
  },
  {
    name: 'David Park',
    team: 'Mobile Team',
    avatar: 'https://api.slingacademy.com/public/sample-users/4.png',
    fallback: 'DP',
    suggestions: '2,156',
    acceptanceRate: '69.8%'
  },
  {
    name: 'Lisa Thompson',
    team: 'QA Team',
    avatar: 'https://api.slingacademy.com/public/sample-users/5.png',
    fallback: 'LT',
    suggestions: '1,534',
    acceptanceRate: '74.6%'
  }
];

export function RecentSales() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Top Active Users</CardTitle>
        <CardDescription>
          Users with the highest Copilot activity this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {activityData.map((user, index) => (
            <div key={index} className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={user.avatar} alt='Avatar' />
                <AvatarFallback>{user.fallback}</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm leading-none font-medium'>{user.name}</p>
                <p className='text-muted-foreground text-sm'>{user.team}</p>
              </div>
              <div className='ml-auto text-right'>
                <div className='text-sm font-medium'>{user.suggestions}</div>
                <div className='text-xs text-muted-foreground'>
                  {user.acceptanceRate} accepted
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
