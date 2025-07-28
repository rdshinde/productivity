"use client";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradientFrom: string;
  gradientTo: string;
}

function FeatureCard({ icon, title, description, features, gradientFrom, gradientTo }: FeatureCardProps) {
  return (
    <div className="feature-card vibrant-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div 
        className="w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
        }}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontWeight: 700 }}>
        {title}
      </h3>
      <p className="text-gray-600 mb-4 font-medium">
        {description}
      </p>
      <ul className="text-sm text-gray-500 space-y-1 font-medium">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Smart Task Management",
      description: "Notion-inspired task boards with AI-powered prioritization, natural language processing, and intelligent deadline suggestions that learn from your work patterns.",
      features: ["Drag & drop Kanban boards", "AI priority recommendations", "Smart deadline tracking"],
      gradientFrom: "#00809d",
      gradientTo: "#0099cc"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      ),
      title: "Intelligent Notes",
      description: "Rich text editing with real-time collaboration, automatic organization, AI-powered summaries, and seamless integration with your tasks and calendar.",
      features: ["Real-time collaboration", "AI content suggestions", "Auto-tagging & search"],
      gradientFrom: "#00b4d8",
      gradientTo: "#00809d"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
        </svg>
      ),
      title: "AI Calendar Optimization",
      description: "Google Calendar integration with intelligent scheduling, automatic conflict resolution, focus time blocking, and meeting efficiency analytics.",
      features: ["Smart meeting scheduling", "Focus time protection", "Travel time calculations"],
      gradientFrom: "#0099cc",
      gradientTo: "#005577"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      ),
      title: "Universal AI Search",
      description: "Ask questions in natural language and instantly find information across all your notes, tasks, files, and connected apps. Like having a personal assistant who knows everything.",
      features: ["Natural language queries", "Cross-platform indexing", "Contextual suggestions"],
      gradientFrom: "#00809d",
      gradientTo: "#00b4d8"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: "Wellness Integration",
      description: "Holistic health tracking with personalized nutrition plans, adaptive workout routines, mindfulness reminders, and wellness analytics integrated into your daily workflow.",
      features: ["Personalized meal planning", "Adaptive fitness routines", "Wellness analytics"],
      gradientFrom: "#005577",
      gradientTo: "#0099cc"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
        </svg>
      ),
      title: "Dynamic Dashboard",
      description: "Personalized command center with intelligent widgets for news, weather, music, stocks, and more. Automatically curates content based on your interests and schedule.",
      features: ["Intelligent content curation", "Customizable layouts", "Third-party integrations"],
      gradientFrom: "#00b4d8",
      gradientTo: "#00809d"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Powerful features designed to supercharge your productivity and streamline your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
} 