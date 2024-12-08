import { Brain, Wand2, Clock, LineChart } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Analysis",
      description: "Harness the power of AI to extract and analyze data from your files, transforming it into meaningful dashboards and insights effortlessly."
    },
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "Effortless Data Transformations",
      description: "With just one click, turn any data file into stunning, easy-to-understand visualizations in seconds. Simplify your workflow and make data come to life effortlessly."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time, Gain Insights",
      description:"Quickly understand your document's key insights without spending hours reading through it. Let VizBoard AI do the heavy lifting for you, delivering valuable information in seconds."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Professional charts",
      description: "Easily transform your data into professional-grade charts and graphs. Visualize your files with clarity and precision, making complex information easy to understand"
    }
  ]

  return (
    <section id="features" className="p-5 mt-5 justify-center">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

