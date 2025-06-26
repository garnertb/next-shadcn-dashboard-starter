// Mock data based on GitHub Copilot Metrics API
// Reference: https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-metrics

export interface CopilotMetrics {
  date: string;
  total_active_users: number;
  total_engaged_users: number;
  copilot_ide_code_completions: {
    total_engaged_users: number;
    languages: Array<{
      name: string;
      total_engaged_users: number;
    }>;
    editors: Array<{
      name: string;
      total_engaged_users: number;
    }>;
  };
  copilot_ide_chat: {
    total_engaged_users: number;
  };
  copilot_dotcom_chat: {
    total_engaged_users: number;
  };
  copilot_dotcom_pull_requests: {
    total_engaged_users: number;
  };
}

// Historical data for charts (last 90 days)
export const copilotDailyMetrics: Array<{
  date: string;
  activeUsers: number;
  engagedUsers: number;
  suggestionsAccepted: number;
  suggestionsRejected: number;
  chatInteractions: number;
}> = [
  { date: '2024-04-01', activeUsers: 1850, engagedUsers: 1650, suggestionsAccepted: 4200, suggestionsRejected: 1800, chatInteractions: 850 },
  { date: '2024-04-02', activeUsers: 1920, engagedUsers: 1720, suggestionsAccepted: 4350, suggestionsRejected: 1750, chatInteractions: 920 },
  { date: '2024-04-03', activeUsers: 1780, engagedUsers: 1580, suggestionsAccepted: 3980, suggestionsRejected: 1920, chatInteractions: 780 },
  { date: '2024-04-04', activeUsers: 1950, engagedUsers: 1750, suggestionsAccepted: 4500, suggestionsRejected: 1650, chatInteractions: 950 },
  { date: '2024-04-05', activeUsers: 2100, engagedUsers: 1900, suggestionsAccepted: 4800, suggestionsRejected: 1600, chatInteractions: 1100 },
  { date: '2024-04-06', activeUsers: 1800, engagedUsers: 1600, suggestionsAccepted: 4100, suggestionsRejected: 1850, chatInteractions: 800 },
  { date: '2024-04-07', activeUsers: 1700, engagedUsers: 1500, suggestionsAccepted: 3850, suggestionsRejected: 1950, chatInteractions: 700 },
  { date: '2024-04-08', activeUsers: 2050, engagedUsers: 1850, suggestionsAccepted: 4650, suggestionsRejected: 1550, chatInteractions: 1050 },
  { date: '2024-04-09', activeUsers: 1980, engagedUsers: 1780, suggestionsAccepted: 4450, suggestionsRejected: 1650, chatInteractions: 980 },
  { date: '2024-04-10', activeUsers: 2200, engagedUsers: 2000, suggestionsAccepted: 5100, suggestionsRejected: 1400, chatInteractions: 1200 },
  // Continue with more realistic data
  { date: '2024-04-11', activeUsers: 2150, engagedUsers: 1950, suggestionsAccepted: 4950, suggestionsRejected: 1450, chatInteractions: 1150 },
  { date: '2024-04-12', activeUsers: 2080, engagedUsers: 1880, suggestionsAccepted: 4700, suggestionsRejected: 1500, chatInteractions: 1080 },
  { date: '2024-04-13', activeUsers: 1850, engagedUsers: 1650, suggestionsAccepted: 4200, suggestionsRejected: 1800, chatInteractions: 850 },
  { date: '2024-04-14', activeUsers: 1750, engagedUsers: 1550, suggestionsAccepted: 3950, suggestionsRejected: 1900, chatInteractions: 750 },
  { date: '2024-04-15', activeUsers: 2300, engagedUsers: 2100, suggestionsAccepted: 5400, suggestionsRejected: 1300, chatInteractions: 1300 },
  { date: '2024-04-16', activeUsers: 2250, engagedUsers: 2050, suggestionsAccepted: 5250, suggestionsRejected: 1350, chatInteractions: 1250 },
  { date: '2024-04-17', activeUsers: 2180, engagedUsers: 1980, suggestionsAccepted: 5050, suggestionsRejected: 1400, chatInteractions: 1180 },
  { date: '2024-04-18', activeUsers: 2400, engagedUsers: 2200, suggestionsAccepted: 5700, suggestionsRejected: 1200, chatInteractions: 1400 },
  { date: '2024-04-19', activeUsers: 2350, engagedUsers: 2150, suggestionsAccepted: 5550, suggestionsRejected: 1250, chatInteractions: 1350 },
  { date: '2024-04-20', activeUsers: 1900, engagedUsers: 1700, suggestionsAccepted: 4400, suggestionsRejected: 1700, chatInteractions: 900 },
  { date: '2024-04-21', activeUsers: 1800, engagedUsers: 1600, suggestionsAccepted: 4100, suggestionsRejected: 1850, chatInteractions: 800 },
  { date: '2024-04-22', activeUsers: 2500, engagedUsers: 2300, suggestionsAccepted: 5900, suggestionsRejected: 1100, chatInteractions: 1500 },
  { date: '2024-04-23', activeUsers: 2450, engagedUsers: 2250, suggestionsAccepted: 5750, suggestionsRejected: 1150, chatInteractions: 1450 },
  { date: '2024-04-24', activeUsers: 2380, engagedUsers: 2180, suggestionsAccepted: 5600, suggestionsRejected: 1200, chatInteractions: 1380 },
  { date: '2024-04-25', activeUsers: 2320, engagedUsers: 2120, suggestionsAccepted: 5450, suggestionsRejected: 1250, chatInteractions: 1320 },
  { date: '2024-04-26', activeUsers: 2280, engagedUsers: 2080, suggestionsAccepted: 5350, suggestionsRejected: 1300, chatInteractions: 1280 },
  { date: '2024-04-27', activeUsers: 1950, engagedUsers: 1750, suggestionsAccepted: 4500, suggestionsRejected: 1650, chatInteractions: 950 },
  { date: '2024-04-28', activeUsers: 1850, engagedUsers: 1650, suggestionsAccepted: 4200, suggestionsRejected: 1800, chatInteractions: 850 },
  { date: '2024-04-29', activeUsers: 2600, engagedUsers: 2400, suggestionsAccepted: 6200, suggestionsRejected: 1000, chatInteractions: 1600 },
  { date: '2024-04-30', activeUsers: 2550, engagedUsers: 2350, suggestionsAccepted: 6050, suggestionsRejected: 1050, chatInteractions: 1550 },
  { date: '2024-05-01', activeUsers: 2480, engagedUsers: 2280, suggestionsAccepted: 5850, suggestionsRejected: 1100, chatInteractions: 1480 },
  { date: '2024-05-02', activeUsers: 2420, engagedUsers: 2220, suggestionsAccepted: 5700, suggestionsRejected: 1150, chatInteractions: 1420 },
  { date: '2024-05-03', activeUsers: 2380, engagedUsers: 2180, suggestionsAccepted: 5600, suggestionsRejected: 1200, chatInteractions: 1380 },
  { date: '2024-05-04', activeUsers: 2000, engagedUsers: 1800, suggestionsAccepted: 4700, suggestionsRejected: 1600, chatInteractions: 1000 },
  { date: '2024-05-05', activeUsers: 1900, engagedUsers: 1700, suggestionsAccepted: 4400, suggestionsRejected: 1700, chatInteractions: 900 },
  { date: '2024-05-06', activeUsers: 2700, engagedUsers: 2500, suggestionsAccepted: 6500, suggestionsRejected: 950, chatInteractions: 1700 },
  { date: '2024-05-07', activeUsers: 2650, engagedUsers: 2450, suggestionsAccepted: 6350, suggestionsRejected: 1000, chatInteractions: 1650 },
  { date: '2024-05-08', activeUsers: 2580, engagedUsers: 2380, suggestionsAccepted: 6150, suggestionsRejected: 1050, chatInteractions: 1580 },
  { date: '2024-05-09', activeUsers: 2520, engagedUsers: 2320, suggestionsAccepted: 5950, suggestionsRejected: 1100, chatInteractions: 1520 },
  { date: '2024-05-10', activeUsers: 2480, engagedUsers: 2280, suggestionsAccepted: 5850, suggestionsRejected: 1150, chatInteractions: 1480 },
  { date: '2024-05-11', activeUsers: 2100, engagedUsers: 1900, suggestionsAccepted: 4900, suggestionsRejected: 1550, chatInteractions: 1100 },
  { date: '2024-05-12', activeUsers: 2000, engagedUsers: 1800, suggestionsAccepted: 4700, suggestionsRejected: 1600, chatInteractions: 1000 },
  { date: '2024-05-13', activeUsers: 2800, engagedUsers: 2600, suggestionsAccepted: 6800, suggestionsRejected: 900, chatInteractions: 1800 },
  { date: '2024-05-14', activeUsers: 2750, engagedUsers: 2550, suggestionsAccepted: 6650, suggestionsRejected: 950, chatInteractions: 1750 },
  { date: '2024-05-15', activeUsers: 2680, engagedUsers: 2480, suggestionsAccepted: 6450, suggestionsRejected: 1000, chatInteractions: 1680 },
  { date: '2024-05-16', activeUsers: 2620, engagedUsers: 2420, suggestionsAccepted: 6250, suggestionsRejected: 1050, chatInteractions: 1620 },
  { date: '2024-05-17', activeUsers: 2580, engagedUsers: 2380, suggestionsAccepted: 6150, suggestionsRejected: 1100, chatInteractions: 1580 },
  { date: '2024-05-18', activeUsers: 2200, engagedUsers: 2000, suggestionsAccepted: 5100, suggestionsRejected: 1500, chatInteractions: 1200 },
  { date: '2024-05-19', activeUsers: 2100, engagedUsers: 1900, suggestionsAccepted: 4900, suggestionsRejected: 1550, chatInteractions: 1100 },
  { date: '2024-05-20', activeUsers: 2900, engagedUsers: 2700, suggestionsAccepted: 7100, suggestionsRejected: 850, chatInteractions: 1900 },
  { date: '2024-05-21', activeUsers: 2850, engagedUsers: 2650, suggestionsAccepted: 6950, suggestionsRejected: 900, chatInteractions: 1850 },
  { date: '2024-05-22', activeUsers: 2780, engagedUsers: 2580, suggestionsAccepted: 6750, suggestionsRejected: 950, chatInteractions: 1780 },
  { date: '2024-05-23', activeUsers: 2720, engagedUsers: 2520, suggestionsAccepted: 6550, suggestionsRejected: 1000, chatInteractions: 1720 },
  { date: '2024-05-24', activeUsers: 2680, engagedUsers: 2480, suggestionsAccepted: 6450, suggestionsRejected: 1050, chatInteractions: 1680 },
  { date: '2024-05-25', activeUsers: 2300, engagedUsers: 2100, suggestionsAccepted: 5300, suggestionsRejected: 1450, chatInteractions: 1300 },
  { date: '2024-05-26', activeUsers: 2200, engagedUsers: 2000, suggestionsAccepted: 5100, suggestionsRejected: 1500, chatInteractions: 1200 },
  { date: '2024-05-27', activeUsers: 3000, engagedUsers: 2800, suggestionsAccepted: 7400, suggestionsRejected: 800, chatInteractions: 2000 },
  { date: '2024-05-28', activeUsers: 2950, engagedUsers: 2750, suggestionsAccepted: 7250, suggestionsRejected: 850, chatInteractions: 1950 },
  { date: '2024-05-29', activeUsers: 2880, engagedUsers: 2680, suggestionsAccepted: 7050, suggestionsRejected: 900, chatInteractions: 1880 },
  { date: '2024-05-30', activeUsers: 2820, engagedUsers: 2620, suggestionsAccepted: 6850, suggestionsRejected: 950, chatInteractions: 1820 },
  { date: '2024-05-31', activeUsers: 2780, engagedUsers: 2580, suggestionsAccepted: 6750, suggestionsRejected: 1000, chatInteractions: 1780 },
  { date: '2024-06-01', activeUsers: 2400, engagedUsers: 2200, suggestionsAccepted: 5500, suggestionsRejected: 1400, chatInteractions: 1400 },
  { date: '2024-06-02', activeUsers: 2300, engagedUsers: 2100, suggestionsAccepted: 5300, suggestionsRejected: 1450, chatInteractions: 1300 },
  { date: '2024-06-03', activeUsers: 3100, engagedUsers: 2900, suggestionsAccepted: 7700, suggestionsRejected: 750, chatInteractions: 2100 },
  { date: '2024-06-04', activeUsers: 3050, engagedUsers: 2850, suggestionsAccepted: 7550, suggestionsRejected: 800, chatInteractions: 2050 },
  { date: '2024-06-05', activeUsers: 2980, engagedUsers: 2780, suggestionsAccepted: 7350, suggestionsRejected: 850, chatInteractions: 1980 },
  { date: '2024-06-06', activeUsers: 2920, engagedUsers: 2720, suggestionsAccepted: 7150, suggestionsRejected: 900, chatInteractions: 1920 },
  { date: '2024-06-07', activeUsers: 2880, engagedUsers: 2680, suggestionsAccepted: 7050, suggestionsRejected: 950, chatInteractions: 1880 },
  { date: '2024-06-08', activeUsers: 2500, engagedUsers: 2300, suggestionsAccepted: 5700, suggestionsRejected: 1350, chatInteractions: 1500 },
  { date: '2024-06-09', activeUsers: 2400, engagedUsers: 2200, suggestionsAccepted: 5500, suggestionsRejected: 1400, chatInteractions: 1400 },
  { date: '2024-06-10', activeUsers: 3200, engagedUsers: 3000, suggestionsAccepted: 8000, suggestionsRejected: 700, chatInteractions: 2200 },
  { date: '2024-06-11', activeUsers: 3150, engagedUsers: 2950, suggestionsAccepted: 7850, suggestionsRejected: 750, chatInteractions: 2150 },
  { date: '2024-06-12', activeUsers: 3080, engagedUsers: 2880, suggestionsAccepted: 7650, suggestionsRejected: 800, chatInteractions: 2080 },
  { date: '2024-06-13', activeUsers: 3020, engagedUsers: 2820, suggestionsAccepted: 7450, suggestionsRejected: 850, chatInteractions: 2020 },
  { date: '2024-06-14', activeUsers: 2980, engagedUsers: 2780, suggestionsAccepted: 7350, suggestionsRejected: 900, chatInteractions: 1980 },
  { date: '2024-06-15', activeUsers: 2600, engagedUsers: 2400, suggestionsAccepted: 5900, suggestionsRejected: 1300, chatInteractions: 1600 },
  { date: '2024-06-16', activeUsers: 2500, engagedUsers: 2300, suggestionsAccepted: 5700, suggestionsRejected: 1350, chatInteractions: 1500 },
  { date: '2024-06-17', activeUsers: 3300, engagedUsers: 3100, suggestionsAccepted: 8300, suggestionsRejected: 650, chatInteractions: 2300 },
  { date: '2024-06-18', activeUsers: 3250, engagedUsers: 3050, suggestionsAccepted: 8150, suggestionsRejected: 700, chatInteractions: 2250 },
  { date: '2024-06-19', activeUsers: 3180, engagedUsers: 2980, suggestionsAccepted: 7950, suggestionsRejected: 750, chatInteractions: 2180 },
  { date: '2024-06-20', activeUsers: 3120, engagedUsers: 2920, suggestionsAccepted: 7750, suggestionsRejected: 800, chatInteractions: 2120 },
  { date: '2024-06-21', activeUsers: 3080, engagedUsers: 2880, suggestionsAccepted: 7650, suggestionsRejected: 850, chatInteractions: 2080 },
  { date: '2024-06-22', activeUsers: 2700, engagedUsers: 2500, suggestionsAccepted: 6100, suggestionsRejected: 1250, chatInteractions: 1700 },
  { date: '2024-06-23', activeUsers: 2600, engagedUsers: 2400, suggestionsAccepted: 5900, suggestionsRejected: 1300, chatInteractions: 1600 },
  { date: '2024-06-24', activeUsers: 3400, engagedUsers: 3200, suggestionsAccepted: 8600, suggestionsRejected: 600, chatInteractions: 2400 },
  { date: '2024-06-25', activeUsers: 3350, engagedUsers: 3150, suggestionsAccepted: 8450, suggestionsRejected: 650, chatInteractions: 2350 },
  { date: '2024-06-26', activeUsers: 3280, engagedUsers: 3080, suggestionsAccepted: 8250, suggestionsRejected: 700, chatInteractions: 2280 },
  { date: '2024-06-27', activeUsers: 3220, engagedUsers: 3020, suggestionsAccepted: 8050, suggestionsRejected: 750, chatInteractions: 2220 },
  { date: '2024-06-28', activeUsers: 3180, engagedUsers: 2980, suggestionsAccepted: 7950, suggestionsRejected: 800, chatInteractions: 2180 },
  { date: '2024-06-29', activeUsers: 2800, engagedUsers: 2600, suggestionsAccepted: 6300, suggestionsRejected: 1200, chatInteractions: 1800 },
  { date: '2024-06-30', activeUsers: 2700, engagedUsers: 2500, suggestionsAccepted: 6100, suggestionsRejected: 1250, chatInteractions: 1700 }
];

// Language distribution data
export const languageDistribution = [
  { language: 'JavaScript', users: 1245, fill: 'var(--primary)' },
  { language: 'TypeScript', users: 982, fill: 'var(--primary-light)' },
  { language: 'Python', users: 867, fill: 'var(--primary-lighter)' },
  { language: 'Java', users: 743, fill: 'var(--primary-dark)' },
  { language: 'C#', users: 521, fill: 'var(--primary-darker)' },
  { language: 'Go', users: 398, fill: 'var(--primary-darkest)' },
  { language: 'Rust', users: 287, fill: 'var(--secondary)' },
  { language: 'Other', users: 456, fill: 'var(--muted)' }
];

// IDE/Editor distribution data  
export const editorDistribution = [
  { editor: 'VS Code', users: 2145, fill: 'var(--primary)' },
  { editor: 'JetBrains', users: 987, fill: 'var(--primary-light)' },
  { editor: 'Vim/Neovim', users: 432, fill: 'var(--primary-lighter)' },
  { editor: 'Visual Studio', users: 298, fill: 'var(--primary-dark)' },
  { editor: 'Other', users: 187, fill: 'var(--primary-darker)' }
];

// Recent Copilot activity (replaces recent sales)
export const recentCopilotActivity = [
  {
    user: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    avatar: 'https://api.slingacademy.com/public/sample-users/1.png',
    fallback: 'SC',
    activity: '2,456 suggestions',
    metric: '89% accepted'
  },
  {
    user: 'Marcus Rodriguez',
    email: 'm.rodriguez@company.com', 
    avatar: 'https://api.slingacademy.com/public/sample-users/2.png',
    fallback: 'MR',
    activity: '1,892 suggestions',
    metric: '76% accepted'
  },
  {
    user: 'Emily Wang',
    email: 'emily.wang@company.com',
    avatar: 'https://api.slingacademy.com/public/sample-users/3.png',
    fallback: 'EW',
    activity: '1,654 suggestions',
    metric: '92% accepted'
  },
  {
    user: 'David Kumar',
    email: 'david.kumar@company.com',
    avatar: 'https://api.slingacademy.com/public/sample-users/4.png',
    fallback: 'DK',
    activity: '1,398 suggestions',
    metric: '83% accepted'
  },
  {
    user: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    avatar: 'https://api.slingacademy.com/public/sample-users/5.png',
    fallback: 'LT',
    activity: '1,245 suggestions',
    metric: '87% accepted'
  }
];

// Current month aggregated metrics for the cards
export const currentMetrics = {
  totalActiveUsers: 3400,
  totalEngagedUsers: 3200,
  acceptanceRate: 85.2,
  chatInteractions: 2400,
  monthlyGrowth: {
    activeUsers: 15.8,
    engagedUsers: 18.2,
    acceptanceRate: 3.4,
    chatInteractions: 22.1
  }
};