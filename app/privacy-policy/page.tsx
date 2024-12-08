import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-col justify-between items-center">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="">
          <p className="text-lg font-semibold text-yellow-600 bg-yellow-100 p-4 rounded-md mb-8">
            Please note: We are currently in the process of developing our comprehensive privacy policy. The information below is preliminary and subject to change.
          </p>
          <p className="text-muted-foreground">
            At VizBoardAI, we take your privacy seriously. This page will outline how we collect, use, and protect your personal information when you use our service.
          </p>
          <h1 className="text-xl font-bold">Information Collection:</h1>
          <p className="text-muted-foreground">
            We are still defining the specific types of information we will collect. This may include, but is not limited to:
          </p>
          <ul className="text-muted-foreground">
            <li >- Personal information such as name and email address</li>
            <li>- Usage data related to your interactions with our platform</li>
            <li>- Data files you upload for visualization (note: we prioritize your data security)</li>
          </ul>
          <h2 className="text-xl font-bold">Use of Information:</h2>
          <p className="text-muted-foreground">
            We are committed to using your information responsibly. Potential uses may include:
          </p>
          <ul className="text-muted-foreground">
            <li>- Providing and improving our visualization services</li>
            <li>- Communicating with you about your account and our services</li>
            <li>- Analyzing usage patterns to enhance user experience</li>
          </ul>
          <h2 className="text-xl font-bold">Data Protection:</h2>
          <p className="text-muted-foreground">
            While we are still finalizing our data protection measures, we assure you that safeguarding your information is our top priority. We will implement industry-standard security protocols to protect your data.
          </p>
          <h2 className="text-xl font-bold">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            As we continue to develop our service and privacy practices, this policy will be updated. We encourage you to check back regularly for the most current information.
          </p>
          <p className="text-muted-foreground">
            If you have any questions or concerns about our privacy practices, please do not hesitate to contact us.
          </p>
        </div>
        <div className="m-8">
          <Button variant={"premium"}>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
