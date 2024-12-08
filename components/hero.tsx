import { Button } from "@/components/ui/button"
import { LineChart, BarChart, PieChart, CircleAlert } from 'lucide-react'
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex gap-4 mb-6">
          <LineChart className="h-12 w-12 text-primary animate-pulse" />
          <BarChart className="h-12 w-12 text-primary/80 animate-pulse delay-100" />
          <PieChart className="h-12 w-12 text-primary/60 animate-pulse delay-200" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Your Files into Beautiful 
        </h1>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"> 
          Visualizations
        </h1>
        
        <p className="max-w-[650px] mt-6 text-gray-500 md:text-xl dark:text-gray-400 text-center">
          Say goodbye to boring and lengthy documents. Create stunning, attractive charts and graphs in minutes—with the power of AI to help you understand better.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfhNisCYYQDDsDZabb2N9s3xAUrjALQm2MiCEIhbnuPPs87ew/viewform"
        target='_blank'
        rel='noopener noreferrer' passHref>
        <Button size="lg" className="mt-8" variant={"premium"}>
          Notify Me
          <CircleAlert/>
        </Button>
        </Link>
      </div>
    </div>
  )
}

