import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, AlertCircle } from 'lucide-react';

function CompanyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  
  const holidays = [
    { date: '2025-03-23', name: 'Sunday', type: 'Weekly Off' },
    { date: '2025-03-24', name: 'Saturday', type: 'Weekly Off' },
    { date: '2025-03-25', name: 'Holi', type: 'Festival' },
  ];

  const reminders = [
    { date: '2025-03-20', title: 'Monthly Safety Meeting', time: '10:00 AM', priority: 'high' },
    { date: '2025-03-22', title: 'Inventory Review', time: '2:00 PM', priority: 'medium' },
    { date: '2025-03-26', title: 'Team Building Event', time: '11:00 AM', priority: 'low' },
  ];

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const previousMonthDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const isHoliday = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    return holidays.find(h => h.date === dateString) || date.getDay() === 0 || date.getDay() === 6;
  };

  const getReminders = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    return reminders.filter(r => r.date === dateString);
  };

  const handleDateClick = (day) => {
    setSelectedDate(selectedDate === day ? null : day);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <CalendarIcon className="h-8 w-8 mr-2 text-blue-600" />
          Company Calendar
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
          >
            Previous
          </button>
          <span className="text-xl font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="bg-gray-50 p-2 text-center font-semibold">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {previousMonthDays.map(day => (
                <div key={`prev-${day}`} className="bg-gray-50 p-4 min-h-[100px]"></div>
              ))}
              {days.map(day => {
                const isToday = new Date().getDate() === day &&
                              new Date().getMonth() === currentMonth.getMonth() &&
                              new Date().getFullYear() === currentMonth.getFullYear();
                const dayHoliday = isHoliday(day);
                const dayReminders = getReminders(day);
                const isSelected = selectedDate === day;

                return (
                  <div
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`bg-white p-4 min-h-[100px] cursor-pointer transition-all duration-200 
                      ${isToday ? 'bg-blue-50' : ''} 
                      ${dayHoliday ? 'bg-red-50' : ''} 
                      ${isSelected ? 'ring-2 ring-blue-500 shadow-lg transform scale-[0.98]' : ''}
                      hover:bg-gray-50`}
                  >
                    <div className="font-semibold mb-2">{day}</div>
                    {dayReminders.map((reminder, idx) => (
                      <div
                        key={idx}
                        className={`text-xs p-1 mb-1 rounded ${
                          reminder.priority === 'high' ? 'bg-red-100 text-red-800' :
                          reminder.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}
                      >
                        {reminder.title}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Holidays */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Holidays</h2>
            <div className="space-y-4">
              {holidays.map((holiday, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <CalendarIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">{holiday.name}</div>
                    <div className="text-sm text-gray-500">{holiday.date}</div>
                    <div className="text-xs text-gray-400">{holiday.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Reminders */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Reminders</h2>
            <div className="space-y-4">
              {reminders.map((reminder, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    reminder.priority === 'high' ? 'bg-red-100' :
                    reminder.priority === 'medium' ? 'bg-yellow-100' :
                    'bg-green-100'
                  }`}>
                    <Clock className={`h-5 w-5 ${
                      reminder.priority === 'high' ? 'text-red-600' :
                      reminder.priority === 'medium' ? 'text-yellow-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <div className="font-medium">{reminder.title}</div>
                    <div className="text-sm text-gray-500">{reminder.date}</div>
                    <div className="text-xs text-gray-400">{reminder.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCalendar;