import React, { useState } from 'react';
import { Building2, Users, Bell, LogOut, MessageSquare, Plus, Trash2, AlertTriangle, X } from 'lucide-react';

function AdminDashboard() {
  const [chairmanMessage, setChairmanMessage] = useState('');
  const [showAddNewsModal, setShowAddNewsModal] = useState(false);
  const [showSOSAlerts, setShowSOSAlerts] = useState(false);

  const sosAlerts = [
    { id: 1, user: 'John Doe', message: 'Emergency at Site A', time: '10 minutes ago', status: 'unread' },
    { id: 2, user: 'Jane Smith', message: 'Urgent help needed', time: '1 hour ago', status: 'read' },
  ];

  const employees = [
    { id: 1, name: 'John Doe', role: 'Site Supervisor', status: 'active' },
    { id: 2, name: 'Jane Smith', role: 'Engineer', status: 'active' },
    { id: 3, name: 'Mike Johnson', role: 'Foreman', status: 'inactive' },
  ];

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('New chairman message:', chairmanMessage);
    setChairmanMessage('');
    alert('Message posted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSOSAlerts(!showSOSAlerts)}
                className="relative"
              >
                <AlertTriangle className="h-6 w-6 text-red-600" />
                {sosAlerts.some(alert => alert.status === 'unread') && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                )}
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <Bell className="h-6 w-6" />
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Chairman's Message Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
            Post Chairman's Message
          </h2>
          <form onSubmit={handleMessageSubmit}>
            <textarea
              value={chairmanMessage}
              onChange={(e) => setChairmanMessage(e.target.value)}
              className="w-full h-32 p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your message to employees..."
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Post Message
            </button>
          </form>
        </div>

        {/* Employee Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              Employee Management
            </h2>
            <button
              onClick={() => setShowAddNewsModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Employee
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SOS Alerts Modal */}
        {showSOSAlerts && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-red-600 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  SOS Alerts
                </h2>
                <button
                  onClick={() => setShowSOSAlerts(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                {sosAlerts.map(alert => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg ${
                      alert.status === 'unread' ? 'bg-red-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{alert.user}</h3>
                        <p className="text-gray-600 mt-1">{alert.message}</p>
                        <span className="text-sm text-gray-500">{alert.time}</span>
                      </div>
                      {alert.status === 'unread' && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;