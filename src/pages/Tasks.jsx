import React from 'react';
import { CheckSquare, Calendar, Clock, AlertCircle } from 'lucide-react';

function Tasks() {
  const tasks = {
    upcoming: [
      { id: 1, title: "Site inspection at Project A", date: "2025-03-20", priority: "high", description: "Complete site inspection and prepare detailed report", assignedBy: "Rajesh Kumar" },
      { id: 2, title: "Quality check for cement delivery", date: "2025-03-22", priority: "medium", description: "Verify quality standards for new cement batch", assignedBy: "Amit Shah" },
      { id: 3, title: "Team meeting for new project planning", date: "2025-03-25", priority: "low", description: "Discuss project timeline and resource allocation", assignedBy: "Vijay Kumar" }
    ],
    inProgress: [
      { id: 4, title: "Update inventory records", date: "2025-03-19", priority: "medium", description: "Record all new material arrivals and update stock levels", assignedBy: "Suresh Patel" },
      { id: 5, title: "Safety equipment inspection", date: "2025-03-19", priority: "high", description: "Check all safety equipment and prepare maintenance report", assignedBy: "Rajesh Kumar" }
    ],
    completed: [
      { id: 6, title: "Material inventory check", date: "2025-03-15", status: "completed", description: "Completed full inventory audit", completedDate: "2025-03-15", verifiedBy: "Amit Shah" },
      { id: 7, title: "Safety training session", date: "2025-03-10", status: "completed", description: "Conducted safety training for new employees", completedDate: "2025-03-10", verifiedBy: "Vijay Kumar" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Task Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Tasks */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="bg-yellow-50 p-4 border-b border-yellow-100">
            <h2 className="text-xl font-semibold text-yellow-800 flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              Upcoming Tasks
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {tasks.upcoming.map(task => (
              <div key={task.id} className="border-l-4 border-yellow-400 bg-white p-4 rounded-lg shadow transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                <h3 className="font-semibold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {task.date}
                  </div>
                  <span className={`text-sm px-2 py-1 rounded ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Assigned by: {task.assignedBy}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Tasks */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="bg-blue-50 p-4 border-b border-blue-100">
            <h2 className="text-xl font-semibold text-blue-800 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              In Progress
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {tasks.inProgress.map(task => (
              <div key={task.id} className="border-l-4 border-blue-400 bg-white p-4 rounded-lg shadow transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                <h3 className="font-semibold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {task.date}
                  </div>
                  <span className={`text-sm px-2 py-1 rounded ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Assigned by: {task.assignedBy}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="bg-green-50 p-4 border-b border-green-100">
            <h2 className="text-xl font-semibold text-green-800 flex items-center">
              <CheckSquare className="h-6 w-6 mr-2" />
              Completed
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {tasks.completed.map(task => (
              <div key={task.id} className="border-l-4 border-green-400 bg-white p-4 rounded-lg shadow transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                <h3 className="font-semibold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    Completed: {task.completedDate}
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    {task.status}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Verified by: {task.verifiedBy}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;