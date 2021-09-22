import Head from 'next/head';

import Nav from '../components/nav';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Nav />

            <main>
                <div className={styles.container}>
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    // get the current environment
    // let dev = process.env.NODE_ENV !== 'production';
    // just adding this, I don't wanna have to go through adding it on vercel
    let dev = false
    // console.log("dev>>", dev)
    let { DEV_URL, PROD_URL } = process.env;
    // const whatUrl = `${dev ? DEV_URL : PROD_URL}/api/posts`
    // console.log('the url is>>>', whatUrl)
    // request posts from api
    // let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
    let response = await fetch('https://simple-nextjs-mongodb-app.vercel.app/api/posts')
    // extract the data
    let data = await response.json();

    return {
        props: {
            posts: data['message'],
        },
    };
}