import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { 
  Wrench, 
  Calendar, 
  Clock, 
  User, 
  Car,
  Plus,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export function Service() {
  const appointments = [
    {
      id: 1,
      customer: 'John Smith',
      vehicle: '2023 Honda Accord',
      service: 'Oil Change',
      technician: 'Mike Wilson',
      date: '2024-01-22',
      time: '09:00 AM',
      status: 'scheduled',
      estimatedDuration: '30 min'
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      vehicle: '2022 Toyota Camry',
      service: 'Brake Inspection',
      technician: 'Tom Davis',
      date: '2024-01-22',
      time: '11:00 AM',
      status: 'in-progress',
      estimatedDuration: '45 min'
    },
    {
      id: 3,
      customer: 'Mike Davis',
      vehicle: '2023 Ford F-150',
      service: 'Tire Rotation',
      technician: 'Lisa Brown',
      date: '2024-01-22',
      time: '02:00 PM',
      status: 'completed',
      estimatedDuration: '20 min'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />
      case 'in-progress': return <Clock className="h-4 w-4" />
      default: return <AlertCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Service Center</h1>
          <p className="text-gray-600">Manage service appointments and technician schedules</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{appointments.length}</div>
            <div className="text-sm text-gray-600">Today's Appointments</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{appointments.filter(a => a.status === 'in-progress').length}</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{appointments.filter(a => a.status === 'completed').length}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Wrench className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-600">Available Technicians</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {appointment.customer}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <Car className="h-4 w-4 mr-2" />
                        {appointment.vehicle}
                      </p>
                    </div>
                    <Badge className={getStatusColor(appointment.status)}>
                      <span className="flex items-center space-x-1">
                        {getStatusIcon(appointment.status)}
                        <span>{appointment.status}</span>
                      </span>
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Service:</span>
                      <p className="font-medium">{appointment.service}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Technician:</span>
                      <p className="font-medium">{appointment.technician}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Duration:</span>
                      <p className="font-medium">{appointment.estimatedDuration}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(appointment.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {appointment.time}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 lg:w-48">
                  {appointment.status === 'scheduled' && (
                    <>
                      <Button variant="outline" size="sm">Start</Button>
                      <Button variant="outline" size="sm">Reschedule</Button>
                    </>
                  )}
                  {appointment.status === 'in-progress' && (
                    <>
                      <Button variant="outline" size="sm">Update</Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">Complete</Button>
                    </>
                  )}
                  {appointment.status === 'completed' && (
                    <Button variant="outline" size="sm">View Details</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}