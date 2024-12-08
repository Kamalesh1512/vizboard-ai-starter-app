import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <div>
    <footer className="bg-primary/10 border-t rounded-md">

        <div className="flex flex-row justify-between items-center gap-3 m-5">
          <div className="space-y-4">
            <div className="flex flex-row justify-start items-center gap-3">
            <Image src='/logo.png' width={40} height={40} alt='logo'/>
              <span className="text-xl font-bold">VizBoardAI</span>
            </div>
            <p className="text-lg text-gray-500 text-wrap">
              Transform your data into beautiful visualizations with the power of AI.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-gray-500 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-sm text-gray-500 hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t  items-center text-center text-sm text-gray-500">
          © {new Date().getFullYear()} VizBoardAI. All rights reserved.
        </div>
    </footer>
    </div>
  )
}

