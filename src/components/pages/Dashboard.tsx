import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  Car, 
  Users, 
  DollarSign, 
  Calendar,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

export function Dashboard() {
  const kpiData = [
    {
      title: 'Total Sales',
      value: '$2,847,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Vehicles Sold',
      value: '156',
      change: '+8.2%',
      trend: 'up',
      icon: Car,
      color: 'text-blue-600'
    },
    {
      title: 'Active Customers',
      value: '2,847',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Service Appointments',
      value: '89',
      change: '-3.1%',
      trend: 'down',
      icon: Calendar,
      color: 'text-orange-600'
    }
  ]

  const recentSales = [
    { id: 1, customer: 'John Smith', vehicle: '2024 Honda Accord', amount: '$28,500', status: 'completed' },
    { id: 2, customer: 'Sarah Johnson', vehicle: '2024 Toyota Camry', amount: '$32,100', status: 'pending' },
    { id: 3, customer: 'Mike Davis', vehicle: '2023 Ford F-150', amount: '$45,200', status: 'completed' },
    { id: 4, customer: 'Emily Brown', vehicle: '2024 Nissan Altima', amount: '$26,800', status: 'completed' },
  ]

  const upcomingTasks = [
    { id: 1, task: 'Follow up with lead - Jennifer Wilson', priority: 'high', due: '2 hours' },
    { id: 2, task: 'Vehicle inspection - 2023 BMW X5', priority: 'medium', due: '4 hours' },
    { id: 3, task: 'Insurance paperwork - Mike Davis', priority: 'low', due: '1 day' },
    { id: 4, task: 'Service reminder - Oil change due', priority: 'medium', due: '2 days' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening at your dealership.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon
          const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown
          return (
            <Card key={kpi.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {kpi.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${kpi.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendIcon className={`h-4 w-4 ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                  <span className={kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {kpi.change}
                  </span>
                  <span className="text-gray-500">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Sales
              <Badge variant="secondary">This Week</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{sale.customer}</p>
                    <p className="text-sm text-gray-600">{sale.vehicle}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{sale.amount}</p>
                    <div className="flex items-center space-x-1">
                      {sale.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                      )}
                      <span className={`text-xs capitalize ${
                        sale.status === 'completed' ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {sale.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Upcoming Tasks
              <Badge variant="outline">4 pending</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    task.priority === 'high' ? 'bg-red-500' : 
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{task.task}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge 
                        variant={task.priority === 'high' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-xs text-gray-500">Due in {task.due}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}