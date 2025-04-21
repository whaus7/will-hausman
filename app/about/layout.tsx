'use client'

import { useAppSelector } from '@/lib/hooks'
import { selectDarkmode } from '@/lib/features/darkmode/darkmodeSlice'

interface ReactChildren {
  readonly children: React.ReactNode
}

export default function Layout({ children }: ReactChildren) {
  const darkmode = useAppSelector(selectDarkmode)
  //const darkmode = true

  return (
    <div>
      <div className="flex justify-center overflow-x-hidden" id="hero">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            //className={styles.mountains}
            //width={3000} height={300}
            //viewBox="0 0 3000 400"
            style={{ zIndex: 2, width: '3000px', height: '195px' }}
          >
            <path
              //className={styles.mountain}
              style={{
                scale: 3,
                fill: darkmode ? 'rgb(50, 147, 105)' : 'rgb(112, 193, 112)',
              }}
              d="M 5.114 5.105 C 5.114 5.105 41.508 9.324 61.391 16.404 C 88.907 26.203 121.616 23.478 151.479 28.63 C 197.694 36.603 255.486 61.792 289.176 57.515 C 331.383 52.157 334.189 34.66 375.246 32.528 C 405.595 30.952 424.239 41.794 447.141 41.04 C 477.615 40.037 495.521 29.504 533.82 32.825 C 565.366 35.561 655.941 58.903 712.217 56.214 C 759.753 53.942 812.448 38.273 852.882 38.772 C 890.155 39.233 923.887 36.348 949.522 27.945 C 990.275 14.587 1023.29 9.958 1023.29 9.958 L 1023.4 -9.817 C 1023.4 -9.817 973.276 -7.981 921.167 -11.485 C 874.458 -14.626 826.388 -23.092 797.298 -23.964 C 765.481 -24.917 748.458 -20.164 716.783 -22.912 C 690.346 -25.206 680.131 -38.476 653.594 -39.641 C 628.491 -40.742 624.595 -37.013 595.388 -28.807 C 557.184 -18.072 555.004 -21.097 534.485 -18.884 C 504.237 -15.622 463.82 -18.697 433.342 -18.114 C 396.291 -17.405 368.857 -8.342 331.847 -10.004 C 302.966 -11.302 273.347 -8.32 244.915 -12.876 C 231.15 -15.081 218.729 -21.898 204.935 -23.964 C 187.128 -26.63 168.771 -26.577 150.741 -25.493 C 116.257 -23.421 83.125 -11.045 48.571 -10.199 C 34.416 -9.852 5.493 -14.405 5.493 -14.405 L 5.114 5.105 Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex p-5 justify-center w-full mt-[-50]">
        <div className="w-full max-w-[900]">{children}</div>
      </div>
    </div>
  )
}
