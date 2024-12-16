import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Book, Target, Trophy } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { PerformanceChart } from '../components/dashboard/PerformanceChart';
import { FocusAreas } from '../components/dashboard/FocusAreas';
import { AIRecommendations } from '../components/dashboard/AIRecommendations';

function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          icon={<Brain className="w-8 h-8 text-indigo-600" />}
          title="AI Study Sessions"
          value="24"
        />
        <StatCard
          icon={<Book className="w-8 h-8 text-purple-600" />}
          title="Topics Mastered"
          value="18"
        />
        <StatCard
          icon={<Target className="w-8 h-8 text-pink-600" />}
          title="Practice Tests"
          value="12"
        />
        <StatCard
          icon={<Trophy className="w-8 h-8 text-yellow-600" />}
          title="Current Rank"
          value="#42"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-6">Performance Trend</h2>
        <PerformanceChart />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <FocusAreas />
        <AIRecommendations />
      </motion.div>
    </div>
  );
}

export default Dashboard;