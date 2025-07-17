import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { 
  Plus, 
  Phone, 
  Mail, 
  Calendar,
  DollarSign,
  User,
  TrendingUp,
  Clock
} from 'lucide-react'

export function Sales() {
  const [activeView, setActiveView] = useState<'pipeline' | 'leads'>('pipeline')

  const salesPipeline = [
    {
      id: 1,
      customer: 'Jennifer Wilson',
      email: 'jennifer.wilson@email.com',
      phone: '(555) 123-4567',
      vehicle: '2024 Honda Accord',
      stage: 'qualified',
      value: 28500,
      probability: 75,
      lastContact: '2024-01-20',
      nextAction: 'Schedule test drive',
      salesperson: 'Mike Johnson'
    },
    {
      id: 2,
      customer: 'Robert Chen',
      email: 'robert.chen@email.com',
      phone: '(555) 234-5678',
      vehicle: '2024 Toyota Camry',
      stage: 'negotiation',
      value: 32100,
      probability: 85,
      lastContact: '2024-01-19',
      nextAction: 'Send final offer',
      salesperson: 'Sarah Davis'
    },
    {
      id: 3,
      customer: 'Lisa Martinez',
      email: 'lisa.martinez@email.com',
      phone: '(555) 345-6789',
      vehicle: '2023 Ford F-150',
      stage: 'proposal',
      value: 45200,
      probability: 60,
      lastContact: '2024-01-18',
      nextAction: 'Follow up on financing',
      salesperson: 'Tom Wilson'
    },
    {
      id: 4,
      customer: 'David Thompson',
      email: 'david.thompson@email.com',
      phone: '(555) 456-7890',
      vehicle: '2024 Nissan Altima',
      stage: 'lead',
      value: 26800,
      probability: 25,
      lastContact: '2024-01-17',
      nextAction: 'Initial contact call',
      salesperson: 'Mike Johnson'
    }
  ]

  const recentLeads = [
    {
      id: 1,
      name: 'Amanda Foster',
      email: 'amanda.foster@email.com',
      phone: '(555) 567-8901',
      interest: '2024 BMW X5',
      source: 'Website',
      created: '2024-01-20',
      status: 'new'
    },
    {
      id: 2,
      name: 'Kevin Brown',
      email: 'kevin.brown@email.com',
      phone: '(555) 678-9012',
      interest: '2024 Mercedes C-Class',
      source: 'Referral',
      created: '2024-01-19',
      status: 'contacted'
    },
    {
      id: 3,
      name: 'Rachel Green',
      email: 'rachel.green@email.com',
      phone: '(555) 789-0123',
      interest: '2023 Audi A4',
      source: 'Social Media',
      created: '2024-01-18',
      status: 'qualified'
    }
  ]

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'lead': return 'bg-gray-100 text-gray-800'
      case 'qualified': return 'bg-blue-100 text-blue-800'
      case 'proposal': return 'bg-yellow-100 text-yellow-800'
      case 'negotiation': return 'bg-orange-100 text-orange-800'
      case 'closed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'qualified': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const salesStats = [
    { label: 'Active Deals', value: salesPipeline.length, color: 'text-blue-600' },
    { label: 'Pipeline Value', value: `$${salesPipeline.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()}`, color: 'text-green-600' },
    { label: 'Avg Deal Size', value: `$${Math.round(salesPipeline.reduce((sum, deal) => sum + deal.value, 0) / salesPipeline.length).toLocaleString()}`, color: 'text-purple-600' },
    { label: 'New Leads', value: recentLeads.filter(lead => lead.status === 'new').length, color: 'text-orange-600' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Management</h1>
          <p className="text-gray-600">Track deals, manage leads, and monitor sales performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Deal
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {salesStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View Toggle */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <Button
          variant={activeView === 'pipeline' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveView('pipeline')}
          className={activeView === 'pipeline' ? 'bg-white shadow-sm' : ''}
        >
          Sales Pipeline
        </Button>
        <Button
          variant={activeView === 'leads' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveView('leads')}
          className={activeView === 'leads' ? 'bg-white shadow-sm' : ''}
        >
          Recent Leads
        </Button>
      </div>

      {/* Sales Pipeline */}
      {activeView === 'pipeline' && (
        <div className="space-y-4">
          {salesPipeline.map((deal) => (
            <Card key={deal.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {deal.customer}
                        </h3>
                        <p className="text-sm text-gray-600">{deal.vehicle}</p>
                      </div>
                      <Badge className={getStageColor(deal.stage)}>
                        {deal.stage}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        {deal.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {deal.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Last: {new Date(deal.lastContact).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-green-600 font-semibold">
                        <DollarSign className="h-4 w-4" />
                        {deal.value.toLocaleString()}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Probability:</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={deal.probability} className="w-20" />
                          <span className="text-sm font-medium">{deal.probability}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 lg:w-48">
                    <div className="text-sm">
                      <span className="text-gray-600">Next Action:</span>
                      <p className="font-medium">{deal.nextAction}</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Salesperson:</span>
                      <p className="font-medium">{deal.salesperson}</p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Recent Leads */}
      {activeView === 'leads' && (
        <div className="space-y-4">
          {recentLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {lead.name}
                        </h3>
                        <p className="text-sm text-gray-600">Interested in: {lead.interest}</p>
                      </div>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        {lead.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {lead.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Source: {lead.source}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      Created: {new Date(lead.created).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex space-x-2 lg:w-48">
                    <Button variant="outline" size="sm">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Qualify
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}