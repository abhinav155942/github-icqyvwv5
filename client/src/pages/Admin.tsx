import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Mail, 
  Phone, 
  Calendar, 
  TrendingUp, 
  Database,
  Webhook,
  BarChart3,
  Eye,
  RefreshCw
} from 'lucide-react';

interface ContactSubmission {
  id: number;
  userType: string;
  name: string;
  email: string;
  phone?: string;
  business?: string;
  selectedServices: string[];
  status: string;
  createdAt: string;
  webhookSent?: string;
}

interface Analytics {
  totalSubmissions: number;
  submissionsToday: number;
  submissionsThisWeek: number;
  submissionsByUserType: Record<string, number>;
  submissionsByStatus: Record<string, number>;
  totalWebhooks: number;
  webhookSuccessRate: string;
}

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [submissionsRes, analyticsRes] = await Promise.all([
        fetch('/api/admin/submissions'),
        fetch('/api/admin/analytics/summary')
      ]);

      if (submissionsRes.ok) {
        const submissionsData = await submissionsRes.json();
        setSubmissions(submissionsData.data || []);
      }

      if (analyticsRes.ok) {
        const analyticsData = await analyticsRes.json();
        setAnalytics(analyticsData.data);
      }
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUserTypeColor = (userType: string) => {
    switch (userType) {
      case 'coach': return 'bg-purple-100 text-purple-800';
      case 'creator': return 'bg-blue-100 text-blue-800';
      case 'ecommerce': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-6 w-6 animate-spin" />
          <span>Loading admin dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage contact submissions and analytics</p>
          </div>
          <Button onClick={fetchData} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Analytics Cards */}
        {analytics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.totalSubmissions}</div>
                <p className="text-xs text-muted-foreground">
                  {analytics.submissionsToday} today
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.submissionsThisWeek}</div>
                <p className="text-xs text-muted-foreground">
                  New submissions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Webhook Success</CardTitle>
                <Webhook className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.webhookSuccessRate}%</div>
                <p className="text-xs text-muted-foreground">
                  {analytics.totalWebhooks} total webhooks
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Popular Type</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Object.entries(analytics.submissionsByUserType).sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Most selected user type
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        <Tabs defaultValue="submissions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="submissions">Contact Submissions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle>Recent Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <div key={submission.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span className="font-semibold">{submission.name}</span>
                            </div>
                            <Badge className={getUserTypeColor(submission.userType)}>
                              {submission.userType}
                            </Badge>
                            <Badge className={getStatusColor(submission.status)}>
                              {submission.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Mail className="h-3 w-3" />
                              <span>{submission.email}</span>
                            </div>
                            {submission.phone && (
                              <div className="flex items-center space-x-1">
                                <Phone className="h-3 w-3" />
                                <span>{submission.phone}</span>
                              </div>
                            )}
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(submission.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                          {submission.selectedServices && submission.selectedServices.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {submission.selectedServices.map((service, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedSubmission(submission)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Submissions by User Type</CardTitle>
                </CardHeader>
                <CardContent>
                  {analytics && (
                    <div className="space-y-3">
                      {Object.entries(analytics.submissionsByUserType).map(([type, count]) => (
                        <div key={type} className="flex justify-between items-center">
                          <Badge className={getUserTypeColor(type)}>
                            {type}
                          </Badge>
                          <span className="font-semibold">{count}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Submissions by Status</CardTitle>
                </CardHeader>
                <CardContent>
                  {analytics && (
                    <div className="space-y-3">
                      {Object.entries(analytics.submissionsByStatus).map(([status, count]) => (
                        <div key={status} className="flex justify-between items-center">
                          <Badge className={getStatusColor(status)}>
                            {status}
                          </Badge>
                          <span className="font-semibold">{count}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Submission Detail Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Submission Details</CardTitle>
                  <Button variant="outline" onClick={() => setSelectedSubmission(null)}>
                    Close
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold">Name:</label>
                    <p>{selectedSubmission.name}</p>
                  </div>
                  <div>
                    <label className="font-semibold">Email:</label>
                    <p>{selectedSubmission.email}</p>
                  </div>
                  <div>
                    <label className="font-semibold">Phone:</label>
                    <p>{selectedSubmission.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="font-semibold">User Type:</label>
                    <Badge className={getUserTypeColor(selectedSubmission.userType)}>
                      {selectedSubmission.userType}
                    </Badge>
                  </div>
                  <div>
                    <label className="font-semibold">Status:</label>
                    <Badge className={getStatusColor(selectedSubmission.status)}>
                      {selectedSubmission.status}
                    </Badge>
                  </div>
                  <div>
                    <label className="font-semibold">Submitted:</label>
                    <p>{new Date(selectedSubmission.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                {selectedSubmission.business && (
                  <div>
                    <label className="font-semibold">Business:</label>
                    <p>{selectedSubmission.business}</p>
                  </div>
                )}
                {selectedSubmission.selectedServices && selectedSubmission.selectedServices.length > 0 && (
                  <div>
                    <label className="font-semibold">Selected Services:</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedSubmission.selectedServices.map((service, index) => (
                        <Badge key={index} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;