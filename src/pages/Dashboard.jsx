import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Calendar, CheckSquare, Bell, LogOut, User, Clock, AlertCircle, CheckCircle, AlertTriangle, MessageSquare, Menu, Home, Building2, Newspaper } from 'lucide-react';
import Tasks from './Tasks';
import CompanyCalendar from './CompanyCalendar';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSOSModal, setShowSOSModal] = useState(false);
  const [sosMessage, setSOSMessage] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  

  const upcomingTasks = [
    { id: 1, title: "Site inspection at Project A", date: "2025-03-20", priority: "high" },
    { id: 2, title: "Quality check for cement delivery", date: "2025-03-22", priority: "medium" },
    { id: 3, title: "Team meeting for new project planning", date: "2025-03-25", priority: "low" }
  ];

  const completedTasks = [
    { id: 4, title: "Material inventory check", date: "2025-03-15", status: "completed" },
    { id: 5, title: "Safety training session", date: "2025-03-10", status: "completed" }
  ];

  const notifications = [
    { id: 1, type: 'task', message: 'New task assigned: Site inspection', time: '1 hour ago' },
    { id: 2, type: 'alert', message: 'Safety meeting tomorrow at 10 AM', time: '2 hours ago' },
    { id: 3, type: 'update', message: 'Project A timeline updated', time: '3 hours ago' }
  ];

  const news = [
    { id: 1, title: "New Safety Protocols Implemented", date: "2025-03-19" },
    { id: 2, title: "Company Achieves ISO Certification", date: "2025-03-18" },
    { id: 3, title: "Employee Training Program Launch", date: "2025-03-17" }
  ];

  const statistics = [
    { id: 1, title: 'Tasks Completed', value: '24', icon: CheckCircle, color: 'text-green-600' },
    { id: 2, title: 'Tasks Pending', value: '15', icon: AlertCircle, color: 'text-yellow-600' },
    { id: 3, title: 'Employee Dashboard', value: user.displayName, icon: User, color: 'text-purple-600', highlight: true },
    { id: 4, title: 'Active Projects', value: '8', icon: Building2, color: 'text-blue-600' }
  ];

  const chairmanMessage = {
    message: "Success is not final, failure is not fatal: it is the courage to continue that counts. Let's work together to achieve our goals.",
    author: "Vijay Kumar",
    date: "March 19, 2025"
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSOSSubmit = () => {
    console.log('SOS Alert:', sosMessage);
    alert('SOS alert has been sent to the admin');
    setSOSMessage('');
    setShowSOSModal(false);
  };

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const DashboardContent = () => (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Employee Dashboard</h1>

        {/* Chairman's Message */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-6 mb-6 text-white transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div className="flex items-start space-x-4">
            <MessageSquare className="h-8 w-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Chairman's Message</h2>
              <p className="text-lg mb-4">"{chairmanMessage.message}"</p>
              <div className="flex items-center justify-between text-sm opacity-80">
                <span>- {chairmanMessage.author}</span>
                <span>{chairmanMessage.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statistics.map(stat => (
            <div 
              key={stat.id} 
              className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-xl ${
                stat.highlight ? 'ring-2 ring-purple-500 bg-purple-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Company News</h2>
              <Newspaper className="h-5 w-5 text-blue-600" />
            </div>
            <div className="space-y-4">
              {news.map(item => (
                <div key={item.id} className="border-l-4 border-blue-500 pl-4 py-2 transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Upcoming Tasks</h2>
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div className="space-y-4">
              {upcomingTasks.map(task => (
                <div key={task.id} className="border-l-4 border-blue-500 pl-4 py-2 transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="font-medium text-gray-800">{task.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">{task.date}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Popup */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowWelcome(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, {user.displayName}! 👋</h2>
              <p className="text-gray-600">
                We're glad to have you here. Your dashboard is ready with all the latest updates.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SOS Modal */}
      {showSOSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowSOSModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-red-600 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Send SOS Alert
              </h2>
              <textarea
                value={sosMessage}
                onChange={(e) => setSOSMessage(e.target.value)}
                placeholder="Describe your emergency..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={handleSOSSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center"
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                Send Alert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2 ml-2">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-gray-800">Vishnu Building Material</span>
              </div>
              <div className="hidden lg:flex items-center space-x-8 ml-8">
                <Link to="/dashboard" className="flex items-center space-x-2 text-blue-600">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/dashboard/tasks" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <CheckSquare className="h-5 w-5" />
                  <span>Tasks</span>
                </Link>
                <Link to="/dashboard/calendar" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <Calendar className="h-5 w-5" />
                  <span>Calendar</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSOSModal(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center transform transition-all duration-300 hover:scale-105"
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">SOS</span>
              </button>

              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transform transition-all duration-300 hover:scale-110"
                >
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                      <div className="space-y-4">
                        {notifications.map(notification => (
                          <div key={notification.id} className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                            {notification.type === 'task' && <CheckSquare className="h-5 w-5 text-blue-500" />}
                            {notification.type === 'alert' && <AlertCircle className="h-5 w-5 text-red-500" />}
                            <div>
                              <p className="text-sm text-gray-800">{notification.message}</p>
                              <span className="text-xs text-gray-500">{notification.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-all duration-300 flex items-center space-x-1 transform hover:scale-105"
              >
                <LogOut className="h-5 w-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-2">
            <div className="space-y-1 px-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-blue-600 py-2">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link to="/dashboard/tasks" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                <CheckSquare className="h-5 w-5" />
                <span>Tasks</span>
              </Link>
              <Link to="/dashboard/calendar" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                <Calendar className="h-5 w-5" />
                <span>Calendar</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<CompanyCalendar />} />
      </Routes>
    </div>
  );
}

export default Dashboard;