import React from 'react';
import { BarChart3, Clock, Trophy, Trash2, TrendingDown, TrendingUp } from 'lucide-react';
import { SpinResult, WheelSegment } from '../types/wheel';

interface StatsPanelProps {
  spinHistory: SpinResult[];
  segments: WheelSegment[];
  onClearHistory: () => void;
}

const StatsPanel: React.FC<StatsPanelProps> = ({
  spinHistory,
  segments,
  onClearHistory
}) => {
  const getSegmentStats = () => {
    const stats = new Map<string, number>();
    
    spinHistory.forEach(result => {
      const key = result.segment.text;
      stats.set(key, (stats.get(key) || 0) + 1);
    });

    return Array.from(stats.entries())
      .map(([text, count]) => ({
        text,
        count,
        percentage: spinHistory.length > 0 ? (count / spinHistory.length) * 100 : 0,
        color: segments.find(s => s.text === text)?.color || '#6B7280'
      }))
      .sort((a, b) => b.count - a.count);
  };

  const segmentStats = getSegmentStats();
  const totalSpins = spinHistory.length;

  // Find least picked (could be multiple)
  const minCount = segmentStats.length > 0 ? Math.min(...segmentStats.map(s => s.count)) : 0;
  const leastPicked = segmentStats.filter(s => s.count === minCount && minCount > 0);

  // Spin trend: spins per day (last 7 days)
  const spinsByDay: Record<string, number> = {};
  spinHistory.forEach(result => {
    const day = result.timestamp instanceof Date
      ? result.timestamp.toISOString().slice(0, 10)
      : new Date(result.timestamp).toISOString().slice(0, 10);
    spinsByDay[day] = (spinsByDay[day] || 0) + 1;
  });
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
  const trendData = last7Days.map(day => spinsByDay[day] || 0);
  const maxTrend = Math.max(...trendData, 1);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-gray-200/50">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Statistics
          </h2>
          {totalSpins > 0 && (
            <button
              onClick={onClearHistory}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Clear history"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-gray-600 mt-1">Track your spinning activity</p>
      </div>

      <div className="p-6">
        {totalSpins === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">📊</div>
            <p className="text-gray-500 font-medium">No spins yet</p>
            <p className="text-sm text-gray-400 mt-1">Start spinning to see statistics</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Overview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-900">Total Spins</span>
                </div>
                <div className="text-2xl font-bold text-indigo-600 mt-1">
                  {totalSpins}
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Most Common</span>
                </div>
                <div className="text-sm font-bold text-purple-600 mt-1 truncate">
                  {segmentStats[0]?.text || 'None'}
                </div>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl col-span-2">
                <div className="flex items-center space-x-2">
                  <TrendingDown className="w-5 h-5 text-pink-600" />
                  <span className="text-sm font-medium text-pink-900">Least Picked</span>
                </div>
                <div className="text-sm font-bold text-pink-600 mt-1 truncate">
                  {leastPicked.length > 0 ? leastPicked.map(s => s.text).join(', ') : 'None'}
                </div>
              </div>
            </div>
            {/* Spin Trend Chart */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" /> Spin Trend (last 7 days)
              </h3>
              <div className="flex items-end gap-1 h-16">
                {trendData.map((val, i) => (
                  <div key={i} className="flex flex-col items-center w-6">
                    <div
                      className="bg-green-400 rounded-t h-full transition-all duration-500"
                      style={{ height: `${(val / maxTrend) * 56}px`, minHeight: '4px', width: '100%' }}
                      title={`${val} spins`}
                    ></div>
                    <span className="text-[10px] text-gray-500 mt-1">
                      {last7Days[i].slice(5)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment Statistics */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Results Breakdown
              </h3>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {segmentStats.map((stat) => (
                  <div key={stat.text} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: stat.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-900 truncate">
                        {stat.text}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${stat.percentage}%`,
                            backgroundColor: stat.color 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-8 text-right">
                        {stat.count}
                      </span>
                      <span className="text-xs text-gray-500 w-10 text-right">
                        {stat.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent History */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Recent Spins
              </h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {spinHistory.slice(0, 5).map((result) => (
                  <div key={result.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: result.segment.color }}
                      ></div>
                      <span className="text-gray-900 truncate">
                        {result.segment.text}
                      </span>
                    </div>
                    <span className="text-gray-500 text-xs">
                      {result.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPanel;