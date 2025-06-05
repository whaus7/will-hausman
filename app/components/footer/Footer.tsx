'use client'

import Link from 'next/link'
import Github from '../svg_icons/Github'
import Boop from '../Boop'

export default function Footer() {
  return (
    <footer className="flex p-10 justify-center w-full">
      <div className="flex flex-col md:flex-row w-full max-w-[900px] gap-8 md:gap-16">
        <div className="flex flex-col flex-auto">
          {/* <h3 className="font-bold mb-2">Links</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              Contact
            </Link>
          </div> */}
        </div>

        <div className="flex flex-col">
          {/* <h3 className="font-bold mb-2">Connect</h3> */}
          <div className="flex gap-4">
            <Boop
              boopConfig={{
                rotation: 12,
                y: 4,
                springConfig: {
                  friction: 4,
                },
              }}
            >
              <Link
                href="https://github.com/whaus7"
                target="_blank"
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <Github />
              </Link>
            </Boop>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              {/* <FaLinkedin size={24} /> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// export default function Footer() {
//   return (
//     <footer className="flex p-5 justify-center w-full">
//       <div className="flex w-full max-w-[900]">
//         <div>footer</div>
//       </div>
//     </footer>
//   )
// }
