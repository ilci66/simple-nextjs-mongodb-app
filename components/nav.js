import Link from 'next/link';

import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="simple-nextjs-mongodb-app.vercel.app/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="simple-nextjs-mongodb-app.vercel.app/add-post">
                        <a>Add post</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}