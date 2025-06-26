'use client';

import { BarGraph } from '@/features/overview/components/bar-graph';
import { AreaGraph } from '@/features/overview/components/area-graph';
import { PieGraph } from '@/features/overview/components/pie-graph';
import { RecentSales } from '@/features/overview/components/recent-sales';
import { currentMetrics } from '@/data/copilot-metrics';

export default function CopilotDashboard() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>
          GitHub Copilot Metrics Dashboard 🤖
        </h1>
        <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Real-time insights into your organization's GitHub Copilot usage and performance
        </p>
      </div>

      {/* Metrics Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '3rem' 
      }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Active Users</div>
          <div style={{ fontSize: '2.25rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
            {currentMetrics.totalActiveUsers.toLocaleString()}
          </div>
          <div style={{ 
            backgroundColor: '#f3f4f6', 
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            padding: '0.25rem 0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.75rem',
            color: '#059669',
            marginBottom: '1rem'
          }}>
            ↗ +{currentMetrics.monthlyGrowth.activeUsers}%
          </div>
          <div style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500', marginBottom: '0.25rem' }}>
            Strong user adoption
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Users with Copilot activity this month
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Engaged Users</div>
          <div style={{ fontSize: '2.25rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
            {currentMetrics.totalEngagedUsers.toLocaleString()}
          </div>
          <div style={{ 
            backgroundColor: '#f3f4f6', 
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            padding: '0.25rem 0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.75rem',
            color: '#059669',
            marginBottom: '1rem'
          }}>
            ↗ +{currentMetrics.monthlyGrowth.engagedUsers}%
          </div>
          <div style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500', marginBottom: '0.25rem' }}>
            Excellent engagement
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Users actively using code suggestions
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Acceptance Rate</div>
          <div style={{ fontSize: '2.25rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
            {currentMetrics.acceptanceRate}%
          </div>
          <div style={{ 
            backgroundColor: '#f3f4f6', 
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            padding: '0.25rem 0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.75rem',
            color: '#059669',
            marginBottom: '1rem'
          }}>
            ↗ +{currentMetrics.monthlyGrowth.acceptanceRate}%
          </div>
          <div style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500', marginBottom: '0.25rem' }}>
            High quality suggestions
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Percentage of suggestions accepted
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Chat Interactions</div>
          <div style={{ fontSize: '2.25rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
            {currentMetrics.chatInteractions.toLocaleString()}
          </div>
          <div style={{ 
            backgroundColor: '#f3f4f6', 
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            padding: '0.25rem 0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.75rem',
            color: '#059669',
            marginBottom: '1rem'
          }}>
            ↗ +{currentMetrics.monthlyGrowth.chatInteractions}%
          </div>
          <div style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500', marginBottom: '0.25rem' }}>
            Growing AI assistance
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Daily Copilot Chat conversations
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
        gap: '2rem' 
      }}>
        <div style={{ gridColumn: 'span 2' }}>
          <BarGraph />
        </div>
        <div>
          <RecentSales />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <AreaGraph />
        </div>
        <div>
          <PieGraph />
        </div>
      </div>
    </div>
  );
}