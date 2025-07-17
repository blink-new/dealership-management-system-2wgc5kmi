import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Badge } from '../ui/badge'
import { 
  Search, 
  Filter, 
  Plus, 
  Car, 
  Calendar,
  MapPin,
  DollarSign
} from 'lucide-react'

export function Inventory() {
  const [searchTerm, setSearchTerm] = useState('')

  const vehicles = [
    {
      id: 1,
      make: 'Honda',
      model: 'Accord',
      year: 2024,
      vin: '1HGCV1F30NA123456',
      price: 28500,
      mileage: 12,
      color: 'Silver',
      status: 'available',
      location: 'Lot A-15',
      dateAdded: '2024-01-15'
    },
    {
      id: 2,
      make: 'Toyota',
      model: 'Camry',
      year: 2024,
      vin: '4T1C11AK5NU123456',
      price: 32100,
      mileage: 8,
      color: 'White',
      status: 'sold',
      location: 'Lot B-08',
      dateAdded: '2024-01-12'
    },
    {
      id: 3,
      make: 'Ford',
      model: 'F-150',
      year: 2023,
      vin: '1FTFW1E50NFA12345',
      price: 45200,
      mileage: 15000,
      color: 'Blue',
      status: 'pending',
      location: 'Lot C-22',
      dateAdded: '2024-01-10'
    },
    {
      id: 4,
      make: 'Nissan',
      model: 'Altima',
      year: 2024,
      vin: '1N4BL4BV0NC123456',
      price: 26800,
      mileage: 5,
      color: 'Black',
      status: 'available',
      location: 'Lot A-03',
      dateAdded: '2024-01-18'
    },
    {
      id: 5,
      make: 'BMW',
      model: 'X5',
      year: 2023,
      vin: '5UXCR6C0XN9123456',
      price: 65900,
      mileage: 8500,
      color: 'Gray',
      status: 'service',
      location: 'Service Bay 2',
      dateAdded: '2024-01-08'
    },
    {
      id: 6,
      make: 'Mercedes',
      model: 'C-Class',
      year: 2024,
      vin: 'WDDWF4HB0NR123456',
      price: 48700,
      mileage: 150,
      color: 'Red',
      status: 'available',
      location: 'Lot B-12',
      dateAdded: '2024-01-20'
    }
  ]

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.vin.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800'
      case 'sold': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'service': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const inventoryStats = [
    { label: 'Total Vehicles', value: vehicles.length, color: 'text-blue-600' },
    { label: 'Available', value: vehicles.filter(v => v.status === 'available').length, color: 'text-green-600' },
    { label: 'Sold This Month', value: vehicles.filter(v => v.status === 'sold').length, color: 'text-purple-600' },
    { label: 'In Service', value: vehicles.filter(v => v.status === 'service').length, color: 'text-orange-600' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vehicle Inventory</h1>
          <p className="text-gray-600">Manage your dealership's vehicle inventory</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {inventoryStats.map((stat) => (
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

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by make, model, or VIN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{vehicle.color}</p>
                </div>
                <Badge className={getStatusColor(vehicle.status)}>
                  {vehicle.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Vehicle Image Placeholder */}
              <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <Car className="h-12 w-12 text-gray-400" />
              </div>

              {/* Vehicle Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">VIN:</span>
                  <span className="font-mono text-xs">{vehicle.vin}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Mileage:</span>
                  <span>{vehicle.mileage.toLocaleString()} miles</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    Location:
                  </span>
                  <span>{vehicle.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    Added:
                  </span>
                  <span>{new Date(vehicle.dateAdded).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="pt-2 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-lg font-bold text-green-600">
                    <DollarSign className="h-4 w-4" />
                    {vehicle.price.toLocaleString()}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or add a new vehicle.</p>
        </div>
      )}
    </div>
  )
}