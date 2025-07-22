import Link from 'next/link'
import { Search, Users, Briefcase, Star, ArrowRight, Brain, Database, Eye, MessageSquare, Zap } from 'lucide-react'

const aiCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Neural networks, model training, predictions",
    avgSalary: "$155k",
    growth: "26%",
    projects: 234
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Data analysis, visualization, business intelligence",
    avgSalary: "$150k",
    growth: "36%",
    projects: 189
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image/video analysis, visual recognition",
    avgSalary: "$157k",
    growth: "Rapid",
    projects: 156
  },
  {
    icon: MessageSquare,
    title: "NLP Engineering",
    description: "Chatbots, language processing, text analysis",
    avgSalary: "$158k",
    growth: "26%",
    projects: 142
  },
  {
    icon: Zap,
    title: "Prompt Engineering",
    description: "AI prompt optimization, generative AI",
    avgSalary: "$121k",
    growth: "Emerging",
    projects: 98
  }
]

const featuredProjects = [
  {
    id: 1,
    title: "Computer Vision Model for Medical Imaging",
    category: "Computer Vision",
    budget: "$5,000 - $8,000",
    duration: "2-3 months",
    skills: ["TensorFlow", "OpenCV", "Python", "Medical Imaging"],
    description: "Develop a deep learning model to detect anomalies in medical scans...",
    postedBy: "HealthTech Solutions",
    applicants: 12
  },
  {
    id: 2,
    title: "NLP Chatbot for Customer Service",
    category: "NLP Engineering",
    budget: "$3,000 - $5,000",
    duration: "1-2 months",
    skills: ["GPT", "LangChain", "Python", "API Integration"],
    description: "Build an intelligent chatbot to handle customer inquiries...",
    postedBy: "E-commerce Startup",
    applicants: 8
  },
  {
    id: 3,
    title: "Predictive Analytics Dashboard",
    category: "Data Science",
    budget: "$4,000 - $6,000",
    duration: "6-8 weeks",
    skills: ["Python", "Pandas", "Plotly", "Machine Learning"],
    description: "Create a comprehensive analytics dashboard with ML predictions...",
    postedBy: "FinTech Company",
    applicants: 15
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AI Community</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                Browse Projects
              </Link>
              <Link href="/freelancers" className="text-gray-600 hover:text-blue-600 transition-colors">
                Find Talent
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                How it Works
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect AI Talent with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Global Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The premier marketplace for AI freelancers and project creators. Find top talent in Machine Learning, 
            Data Science, Computer Vision, NLP, and emerging AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg">
              <Search className="w-5 h-5 mr-2" />
              Browse Projects
            </Link>
            <Link href="/signup?type=freelancer" className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg">
              <Users className="w-5 h-5 mr-2" />
              Join as Freelancer
            </Link>
          </div>
        </div>
      </section>

      {/* AI Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Top AI Project Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most in-demand AI specializations with high growth potential and competitive salaries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-medium text-green-600">{category.avgSalary}</span>
                      <span className="text-gray-500"> avg salary</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-600">{category.growth}</span>
                      <span className="text-gray-500"> growth</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{category.projects} active projects</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600">
                Discover high-quality AI projects from top companies and startups.
              </p>
            </div>
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.applicants} applicants</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Budget:</span>
                    <span className="font-medium text-green-600">{project.budget}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">by {project.postedBy}</span>
                  <Link href={`/projects/${project.id}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Trusted by AI Professionals Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Active Freelancers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5K+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">$2M+</div>
              <div className="text-blue-100">Total Earnings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of AI professionals building the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?type=client" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg">
              <Briefcase className="w-5 h-5 mr-2" />
              Post a Project
            </Link>
            <Link href="/signup?type=freelancer" className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg">
              <Star className="w-5 h-5 mr-2" />
              Find Work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">AI Community</span>
              </div>
              <p className="text-gray-400">
                Connecting AI talent with global opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">For Freelancers</h3>
              <ul className="space-y-2">
                <li><Link href="/projects" className="hover:text-white transition-colors">Find Projects</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
                <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">For Clients</h3>
              <ul className="space-y-2">
                <li><Link href="/freelancers" className="hover:text-white transition-colors">Find Talent</Link></li>
                <li><Link href="/post-project" className="hover:text-white transition-colors">Post a Project</Link></li>
                <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AI Community Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
