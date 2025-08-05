import { useState } from 'react';
import MarbleTexture from '../components/MarbleTexture';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  action?: string;
}

const Email = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'success',
      title: 'Harvest Complete',
      message: 'Your tomatoes harvest is ready! 45kg of Premium quality tomatoes have been added to your warehouse.',
      timestamp: '2 minutes ago',
      read: false,
      action: 'View in Sales'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Low Inventory Alert',
      message: 'Your herbs inventory is running low. Consider purchasing more seeds from Suppliers.',
      timestamp: '15 minutes ago',
      read: false,
      action: 'Buy Seeds'
    },
    {
      id: '3',
      type: 'info',
      title: 'Market Update',
      message: 'Tomato prices have increased by 3.2% this week. Consider selling your stock now.',
      timestamp: '1 hour ago',
      read: true,
      action: 'Check Prices'
    },
    {
      id: '4',
      type: 'error',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur tonight at 2:00 AM. Some features may be temporarily unavailable.',
      timestamp: '3 hours ago',
      read: true
    },
    {
      id: '5',
      type: 'success',
      title: 'Purchase Successful',
      message: 'Your order for 3 Basic salad modules has been confirmed. Delivery expected in 24 hours.',
      timestamp: '1 day ago',
      read: true,
      action: 'Track Order'
    },
    {
      id: '6',
      type: 'info',
      title: 'Season Change',
      message: 'Spring season is ending. Prepare for Summer crops and adjust your production strategy.',
      timestamp: '2 days ago',
      read: true,
      action: 'View Calendar'
    }
  ]);



  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-green-500 bg-green-50/80';
      case 'warning': return 'border-yellow-500 bg-yellow-50/80';
      case 'error': return 'border-red-500 bg-red-50/80';
      case 'info': return 'border-blue-500 bg-blue-50/80';
      default: return 'border-stone-300 bg-stone-50/80';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error': return '✕';
      case 'info': return 'ℹ';
      default: return '•';
    }
  };

  const getTypeTextColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-700';
      case 'warning': return 'text-yellow-700';
      case 'error': return 'text-red-700';
      case 'info': return 'text-blue-700';
      default: return 'text-stone-700';
    }
  };



  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        
        {/* Header */}
        <div className="bg-stone-100/90 backdrop-blur-sm border border-stone-400/50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-stone-800">Email</h1>
              <p className="text-xs sm:text-sm text-stone-600">
                {unreadCount} unread • {notifications.length} total
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                className="text-xs sm:text-sm text-stone-600 hover:text-stone-800 font-medium"
              >
                Mark all read
              </button>
            </div>
          </div>
        </div>



        {/* Notifications List */}
        <div className="space-y-2 sm:space-y-3">
          {notifications.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-stone-200/40 text-center">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2">No emails</h3>
              <p className="text-stone-600 text-sm sm:text-base">You're all caught up!</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border-l-4 ${getTypeColor(notification.type)} border-r border-t border-b border-stone-200/40 shadow-sm hover:shadow-md transition-all duration-200 ${
                  !notification.read ? 'ring-2 ring-stone-300/50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base font-bold ${getTypeTextColor(notification.type)} bg-white/80 border border-stone-200/40`}>
                    {getTypeIcon(notification.type)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-stone-800">
                        {notification.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-stone-400 hover:text-stone-600 text-xs"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-stone-600 mb-2 sm:mb-3">
                      {notification.message}
                    </p>
                    
                                         <div className="flex items-center justify-between">
                       <span className="text-xs text-stone-500">{notification.timestamp}</span>
                       {!notification.read && (
                         <button
                           onClick={() => markAsRead(notification.id)}
                           className="text-xs text-stone-600 hover:text-stone-800 font-medium"
                         >
                           Mark as read
                         </button>
                       )}
                     </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Email; 
