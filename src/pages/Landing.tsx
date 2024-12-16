import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master UPSC with
              <span className="text-indigo-600"> AI-Powered</span> Learning
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Revolutionize your UPSC preparation with personalized study plans, 
              AI-powered evaluations, and real-time performance analytics.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/auth"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-indigo-600" />}
              title="AI-Powered Learning"
              description="Personalized study plans and content recommendations based on your performance."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8 text-indigo-600" />}
              title="Smart Evaluation"
              description="Get instant feedback on your answers with detailed analysis and improvement suggestions."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-indigo-600" />}
              title="Performance Analytics"
              description="Track your progress with detailed insights and performance metrics."
            />
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your UPSC Journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of aspirants who have already revolutionized their 
              preparation with our AI-powered platform.
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 hover:bg-gray-100 transition-colors"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-50">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Landing;