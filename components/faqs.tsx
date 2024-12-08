
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What types of files can I visualize with VizBoardAI?",
      answer: "VizBoardAI supports a wide range of file formats including Pdf,CSV and XML. Our AI can interpret and visualize data from most structured data sources."
    },
    {
      question: "How does the AI-powered analysis work?",
      answer: "Our AI intelligently analyzes your data, file content, and relationships to generate the most suitable visualization dashboard. It identifies trends, correlations, and outliers to help uncover insights you might have missed. For files with descriptive content, our AI summarizes the data or extracts key insights, seamlessly integrating them into the dashboard for a clearer and more actionable understanding."
    },
    {
      question: "Can I customize the visualizations created by VizBoardAI?",
      answer: "Currently, VizBoardAI generates visualizations automatically (AI Powered) based on your data, focusing on simplicity and accuracy. While customization features are not yet available, they are on our roadmap for future updates. Stay tuned for enhancements that will allow you to tailor visualizations to your specific needs!"
    },
    {
      question: "Is my data safe with VizBoardAI?",
      answer: "We take data security very seriously. All data is encrypted in transit and at rest. We do not share your data without consent, and you will an option to delete the data(files,documents)."
    },
    {
      question: "How does pricing work for VizBoardAI?",
      answer: "VizBoardAI offers two subscription plans: a Free Tier with an initial trial usage, and a Pro Plan for users who need to use more and for continuous access on our feature"
    }
  ]
  
  export function FAQs() {
    return (
      <section id="faqs" className="p-5 m-5 rounded-lg justify-center bg-background">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    )
  }
  
  