// Mock Copilot Metrics Data based on GitHub Copilot Metrics API
// Reference: https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-metrics

export interface CopilotUsageMetrics {
  day: string;
  total_suggestions_count: number;
  total_acceptances_count: number;
  total_lines_suggested: number;
  total_lines_accepted: number;
  total_active_users: number;
  total_chat_acceptances: number;
  total_chat_turns: number;
  total_active_chat_users: number;
}

export interface CopilotBreakdown {
  language: string;
  editor: string;
  suggestions_count: number;
  acceptances_count: number;
  lines_suggested: number;
  lines_accepted: number;
  active_users: number;
}

export interface CopilotSeat {
  assignee: {
    login: string;
    id: number;
    avatar_url: string;
  };
  assigning_team?: {
    name: string;
  };
  pending_cancellation_date?: string;
  last_activity_at?: string;
  last_activity_editor?: string;
  created_at: string;
  updated_at: string;
}

// Mock data for the last 30 days
export const mockCopilotUsageMetrics: CopilotUsageMetrics[] = [
  {
    day: '2024-01-01',
    total_suggestions_count: 2547,
    total_acceptances_count: 1298,
    total_lines_suggested: 12483,
    total_lines_accepted: 6421,
    total_active_users: 127,
    total_chat_acceptances: 234,
    total_chat_turns: 456,
    total_active_chat_users: 89
  },
  {
    day: '2024-01-02',
    total_suggestions_count: 2834,
    total_acceptances_count: 1456,
    total_lines_suggested: 13892,
    total_lines_accepted: 7123,
    total_active_users: 142,
    total_chat_acceptances: 267,
    total_chat_turns: 523,
    total_active_chat_users: 98
  },
  {
    day: '2024-01-03',
    total_suggestions_count: 2123,
    total_acceptances_count: 1087,
    total_lines_suggested: 10234,
    total_lines_accepted: 5298,
    total_active_users: 105,
    total_chat_acceptances: 198,
    total_chat_turns: 389,
    total_active_chat_users: 76
  },
  {
    day: '2024-01-04',
    total_suggestions_count: 2976,
    total_acceptances_count: 1523,
    total_lines_suggested: 14562,
    total_lines_accepted: 7834,
    total_active_users: 156,
    total_chat_acceptances: 289,
    total_chat_turns: 567,
    total_active_chat_users: 103
  },
  {
    day: '2024-01-05',
    total_suggestions_count: 3245,
    total_acceptances_count: 1687,
    total_lines_suggested: 15923,
    total_lines_accepted: 8456,
    total_active_users: 164,
    total_chat_acceptances: 312,
    total_chat_turns: 634,
    total_active_chat_users: 112
  },
  {
    day: '2024-01-06',
    total_suggestions_count: 1876,
    total_acceptances_count: 934,
    total_lines_suggested: 8765,
    total_lines_accepted: 4523,
    total_active_users: 89,
    total_chat_acceptances: 167,
    total_chat_turns: 345,
    total_active_chat_users: 67
  },
  {
    day: '2024-01-07',
    total_suggestions_count: 2145,
    total_acceptances_count: 1098,
    total_lines_suggested: 10234,
    total_lines_accepted: 5467,
    total_active_users: 98,
    total_chat_acceptances: 189,
    total_chat_turns: 378,
    total_active_chat_users: 71
  },
  {
    day: '2024-01-08',
    total_suggestions_count: 2756,
    total_acceptances_count: 1423,
    total_lines_suggested: 13245,
    total_lines_accepted: 6987,
    total_active_users: 135,
    total_chat_acceptances: 254,
    total_chat_turns: 489,
    total_active_chat_users: 94
  },
  {
    day: '2024-01-09',
    total_suggestions_count: 2634,
    total_acceptances_count: 1356,
    total_lines_suggested: 12687,
    total_lines_accepted: 6543,
    total_active_users: 128,
    total_chat_acceptances: 243,
    total_chat_turns: 467,
    total_active_chat_users: 91
  },
  {
    day: '2024-01-10',
    total_suggestions_count: 2987,
    total_acceptances_count: 1534,
    total_lines_suggested: 14356,
    total_lines_accepted: 7456,
    total_active_users: 149,
    total_chat_acceptances: 278,
    total_chat_turns: 534,
    total_active_chat_users: 105
  },
  {
    day: '2024-01-11',
    total_suggestions_count: 3123,
    total_acceptances_count: 1612,
    total_lines_suggested: 15234,
    total_lines_accepted: 7891,
    total_active_users: 157,
    total_chat_acceptances: 294,
    total_chat_turns: 567,
    total_active_chat_users: 109
  },
  {
    day: '2024-01-12',
    total_suggestions_count: 2876,
    total_acceptances_count: 1487,
    total_lines_suggested: 13845,
    total_lines_accepted: 7234,
    total_active_users: 143,
    total_chat_acceptances: 267,
    total_chat_turns: 512,
    total_active_chat_users: 98
  },
  {
    day: '2024-01-13',
    total_suggestions_count: 1987,
    total_acceptances_count: 1023,
    total_lines_suggested: 9456,
    total_lines_accepted: 4876,
    total_active_users: 95,
    total_chat_acceptances: 178,
    total_chat_turns: 356,
    total_active_chat_users: 73
  },
  {
    day: '2024-01-14',
    total_suggestions_count: 2234,
    total_acceptances_count: 1156,
    total_lines_suggested: 10675,
    total_lines_accepted: 5543,
    total_active_users: 107,
    total_chat_acceptances: 201,
    total_chat_turns: 389,
    total_active_chat_users: 79
  },
  {
    day: '2024-01-15',
    total_suggestions_count: 2645,
    total_acceptances_count: 1367,
    total_lines_suggested: 12543,
    total_lines_accepted: 6456,
    total_active_users: 129,
    total_chat_acceptances: 245,
    total_chat_turns: 467,
    total_active_chat_users: 92
  },
  {
    day: '2024-01-16',
    total_suggestions_count: 2834,
    total_acceptances_count: 1456,
    total_lines_suggested: 13456,
    total_lines_accepted: 6987,
    total_active_users: 138,
    total_chat_acceptances: 267,
    total_chat_turns: 501,
    total_active_chat_users: 98
  },
  {
    day: '2024-01-17',
    total_suggestions_count: 2987,
    total_acceptances_count: 1534,
    total_lines_suggested: 14234,
    total_lines_accepted: 7345,
    total_active_users: 147,
    total_chat_acceptances: 289,
    total_chat_turns: 534,
    total_active_chat_users: 104
  },
  {
    day: '2024-01-18',
    total_suggestions_count: 3156,
    total_acceptances_count: 1623,
    total_lines_suggested: 15067,
    total_lines_accepted: 7798,
    total_active_users: 155,
    total_chat_acceptances: 298,
    total_chat_turns: 567,
    total_active_chat_users: 110
  },
  {
    day: '2024-01-19',
    total_suggestions_count: 2765,
    total_acceptances_count: 1423,
    total_lines_suggested: 13156,
    total_lines_accepted: 6798,
    total_active_users: 134,
    total_chat_acceptances: 256,
    total_chat_turns: 489,
    total_active_chat_users: 95
  },
  {
    day: '2024-01-20',
    total_suggestions_count: 2054,
    total_acceptances_count: 1067,
    total_lines_suggested: 9876,
    total_lines_accepted: 5123,
    total_active_users: 98,
    total_chat_acceptances: 189,
    total_chat_turns: 367,
    total_active_chat_users: 75
  },
  {
    day: '2024-01-21',
    total_suggestions_count: 2345,
    total_acceptances_count: 1203,
    total_lines_suggested: 11234,
    total_lines_accepted: 5789,
    total_active_users: 112,
    total_chat_acceptances: 213,
    total_chat_turns: 412,
    total_active_chat_users: 84
  },
  {
    day: '2024-01-22',
    total_suggestions_count: 2687,
    total_acceptances_count: 1387,
    total_lines_suggested: 12765,
    total_lines_accepted: 6543,
    total_active_users: 131,
    total_chat_acceptances: 243,
    total_chat_turns: 467,
    total_active_chat_users: 93
  },
  {
    day: '2024-01-23',
    total_suggestions_count: 2934,
    total_acceptances_count: 1512,
    total_lines_suggested: 14023,
    total_lines_accepted: 7234,
    total_active_users: 145,
    total_chat_acceptances: 278,
    total_chat_turns: 523,
    total_active_chat_users: 102
  },
  {
    day: '2024-01-24',
    total_suggestions_count: 3087,
    total_acceptances_count: 1589,
    total_lines_suggested: 14756,
    total_lines_accepted: 7656,
    total_active_users: 152,
    total_chat_acceptances: 289,
    total_chat_turns: 556,
    total_active_chat_users: 108
  },
  {
    day: '2024-01-25',
    total_suggestions_count: 2876,
    total_acceptances_count: 1487,
    total_lines_suggested: 13654,
    total_lines_accepted: 7098,
    total_active_users: 141,
    total_chat_acceptances: 267,
    total_chat_turns: 512,
    total_active_chat_users: 96
  },
  {
    day: '2024-01-26',
    total_suggestions_count: 2543,
    total_acceptances_count: 1312,
    total_lines_suggested: 12123,
    total_lines_accepted: 6234,
    total_active_users: 124,
    total_chat_acceptances: 234,
    total_chat_turns: 456,
    total_active_chat_users: 88
  },
  {
    day: '2024-01-27',
    total_suggestions_count: 1876,
    total_acceptances_count: 967,
    total_lines_suggested: 8932,
    total_lines_accepted: 4623,
    total_active_users: 91,
    total_chat_acceptances: 167,
    total_chat_turns: 334,
    total_active_chat_users: 69
  },
  {
    day: '2024-01-28',
    total_suggestions_count: 2123,
    total_acceptances_count: 1098,
    total_lines_suggested: 10134,
    total_lines_accepted: 5234,
    total_active_users: 102,
    total_chat_acceptances: 189,
    total_chat_turns: 378,
    total_active_chat_users: 76
  },
  {
    day: '2024-01-29',
    total_suggestions_count: 2654,
    total_acceptances_count: 1367,
    total_lines_suggested: 12654,
    total_lines_accepted: 6543,
    total_active_users: 130,
    total_chat_acceptances: 245,
    total_chat_turns: 467,
    total_active_chat_users: 92
  },
  {
    day: '2024-01-30',
    total_suggestions_count: 2987,
    total_acceptances_count: 1534,
    total_lines_suggested: 14234,
    total_lines_accepted: 7345,
    total_active_users: 147,
    total_chat_acceptances: 278,
    total_chat_turns: 534,
    total_active_chat_users: 104
  }
];

// Language breakdown mock data
export const mockCopilotLanguageBreakdown = [
  {
    language: 'JavaScript',
    suggestions: 8567,
    acceptances: 4234,
    acceptance_rate: 49.4
  },
  {
    language: 'TypeScript',
    suggestions: 7234,
    acceptances: 3912,
    acceptance_rate: 54.1
  },
  {
    language: 'Python',
    suggestions: 6543,
    acceptances: 3456,
    acceptance_rate: 52.8
  },
  {
    language: 'Java',
    suggestions: 4321,
    acceptances: 2134,
    acceptance_rate: 49.4
  },
  {
    language: 'C#',
    suggestions: 3456,
    acceptances: 1876,
    acceptance_rate: 54.3
  },
  {
    language: 'Go',
    suggestions: 2345,
    acceptances: 1234,
    acceptance_rate: 52.6
  },
  {
    language: 'Rust',
    suggestions: 1876,
    acceptances: 1023,
    acceptance_rate: 54.5
  },
  {
    language: 'Other',
    suggestions: 3456,
    acceptances: 1678,
    acceptance_rate: 48.6
  }
];

// Recent activity mock data
export const mockRecentCopilotActivity = [
  {
    user: {
      name: 'Sarah Chen',
      email: 'sarah.chen@company.com',
      avatar: '/avatars/01.png'
    },
    suggestions: 127,
    acceptances: 68,
    acceptance_rate: 53.5,
    last_active: '2024-01-30T14:23:00Z',
    primary_language: 'TypeScript'
  },
  {
    user: {
      name: 'Marcus Rodriguez',
      email: 'marcus.r@company.com',
      avatar: '/avatars/02.png'
    },
    suggestions: 94,
    acceptances: 52,
    acceptance_rate: 55.3,
    last_active: '2024-01-30T13:45:00Z',
    primary_language: 'Python'
  },
  {
    user: {
      name: 'Emily Watson',
      email: 'emily.watson@company.com',
      avatar: '/avatars/03.png'
    },
    suggestions: 156,
    acceptances: 78,
    acceptance_rate: 50.0,
    last_active: '2024-01-30T12:34:00Z',
    primary_language: 'JavaScript'
  },
  {
    user: {
      name: 'David Kim',
      email: 'david.kim@company.com',
      avatar: '/avatars/04.png'
    },
    suggestions: 203,
    acceptances: 112,
    acceptance_rate: 55.2,
    last_active: '2024-01-30T11:22:00Z',
    primary_language: 'Java'
  },
  {
    user: {
      name: 'Lisa Thompson',
      email: 'lisa.t@company.com',
      avatar: '/avatars/05.png'
    },
    suggestions: 89,
    acceptances: 48,
    acceptance_rate: 53.9,
    last_active: '2024-01-30T10:15:00Z',
    primary_language: 'C#'
  }
];

// Summary metrics
export const mockCopilotSummaryMetrics = {
  total_suggestions_last_30_days: 74521,
  total_acceptances_last_30_days: 38456,
  overall_acceptance_rate: 51.6,
  total_active_users: 156,
  total_copilot_seats: 200,
  seat_utilization: 78.0,
  total_lines_suggested: 365784,
  total_lines_accepted: 188956,
  productivity_gain: '+23.5%'
};
