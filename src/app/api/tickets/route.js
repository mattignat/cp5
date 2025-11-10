// Sample tickets data
const tickets = [
  {
    id: 'TK001',
    title: 'Login page not loading',
    description: 'Users are unable to access the login page, getting a 500 error',
    priority: 'Critical',
    status: 'Open',
    assignee: 'Sarah Johnson',
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
  },
  {
    id: 'TK002',
    title: 'Email notifications delayed',
    description: 'Email notifications are being sent with a 30-minute delay',
    priority: 'High',
    status: 'In Progress',
    assignee: 'Mike Chen',
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString() // 1 hour ago
  },
  {
    id: 'TK003',
    title: 'Update user profile photo feature',
    description: 'Users need ability to update their profile photos',
    priority: 'Low',
    status: 'Open',
    assignee: 'Emma Wilson',
    updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString() // 4 hours ago
  },
  {
    id: 'TK004',
    title: 'Database connection timeout',
    description: 'Database queries are timing out during peak hours',
    priority: 'Critical',
    status: 'In Progress',
    assignee: 'David Rodriguez',
    updatedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString() // 30 minutes ago
  },
  {
    id: 'TK005',
    title: 'Mobile app crashes on Android',
    description: 'App crashes when users try to upload files on Android devices',
    priority: 'High',
    status: 'On Hold',
    assignee: 'Lisa Thompson',
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString() // 6 hours ago
  },
  {
    id: 'TK006',
    title: 'Add dark mode theme',
    description: 'Implement a dark mode theme for better user experience',
    priority: 'Medium',
    status: 'Open',
    assignee: 'Alex Kumar',
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString() // 3 hours ago
  },
  {
    id: 'TK007',
    title: 'Payment gateway integration failing',
    description: 'Payment processing is failing intermittently with Stripe integration',
    priority: 'Critical',
    status: 'Resolved',
    assignee: 'Jennifer Lee',
    updatedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString() // 8 hours ago
  },
  {
    id: 'TK008',
    title: 'Improve search functionality',
    description: 'Search results are not accurate and need better filtering options',
    priority: 'Medium',
    status: 'In Progress',
    assignee: 'Tom Anderson',
    updatedAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString() // 2.5 hours ago
  },
  {
    id: 'TK009',
    title: 'Fix broken links in footer',
    description: 'Several links in the website footer are returning 404 errors',
    priority: 'Low',
    status: 'Resolved',
    assignee: 'Rachel Green',
    updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString() // 12 hours ago
  },
  {
    id: 'TK010',
    title: 'Server performance optimization',
    description: 'Server response times are slow during peak usage periods',
    priority: 'High',
    status: 'Open',
    assignee: 'Kevin Park',
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() // 5 hours ago
  },
  {
    id: 'TK011',
    title: 'Add password reset functionality',
    description: 'Users need a way to reset their passwords when forgotten',
    priority: 'Medium',
    status: 'On Hold',
    assignee: 'Maria Garcia',
    updatedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString() // 7 hours ago
  },
  {
    id: 'TK012',
    title: 'Update terms of service page',
    description: 'Legal team has requested updates to the terms of service',
    priority: 'Low',
    status: 'Open',
    assignee: 'Chris Taylor',
    updatedAt: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString() // 1.5 hours ago
  },
  {
    id: 'TK013',
    title: 'SSL certificate expiring soon',
    description: 'SSL certificate for main domain expires in 2 weeks',
    priority: 'High',
    status: 'Resolved',
    assignee: 'Anna Martinez',
    updatedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString() // 10 hours ago
  },
  {
    id: 'TK014',
    title: 'Implement user activity logging',
    description: 'Need to track user activities for security and analytics',
    priority: 'Medium',
    status: 'In Progress',
    assignee: 'Steve Brown',
    updatedAt: new Date(Date.now() - 45 * 60 * 1000).toISOString() // 45 minutes ago
  },
  {
    id: 'TK015',
    title: 'Fix calendar widget display issue',
    description: 'Calendar widget is not displaying correctly on mobile devices',
    priority: 'Medium',
    status: 'On Hold',
    assignee: 'Nancy White',
    updatedAt: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString() // 9 hours ago
  },
  {
    id: 'TK016',
    title: 'Add export data feature',
    description: 'Users should be able to export their data in CSV format',
    priority: 'Low',
    status: 'Open',
    assignee: 'Paul Davis',
    updatedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString() // 11 hours ago
  }
];

export async function GET() {
  try {
    // Simulate a small delay to make the loading state visible
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return Response.json(tickets);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch tickets' }, { status: 500 });
  }
}