import MainNav from '@/app/components/MainNav'
import Link from 'next/link'
import DarkModeBtn from '@/app/components/DarkModeBtn'
import styles from '@/app/components/header/Header.module.css'

export default function Header() {
    return <header className="flex p-5 justify-center w-full">
        <div className="flex w-full max-w-[900]">
            <div className={styles.name}>
                <Link href={'/'}>Will Hausman</Link>
            </div>
            <MainNav />
            <div className="flex flex-auto justify-end">
                <DarkModeBtn />
                {/* <Boop boopConfig={{ scale: 1.5 }}>
          <Sun />
        </Boop> */}
            </div>
        </div>
    </header>
}