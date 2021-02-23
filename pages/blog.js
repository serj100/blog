import classes from '../styles/blog.module.scss'
import { wobble } from 'react-animations'
import Radium, { StyleRoot } from 'radium'
import MainLayout from '../components/MainLayout'
import { translateAction } from '../store/actions/translateAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const styles = {
    wobble: {
        animation: '2s',
        animationName: Radium.keyframes(wobble, 'wobble')
    },
}

export default function Blog({ post }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.translate);
    // const ruen = useSelector(state => state.ruEn)
    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch(`http://localhost:3000/api/language`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8'
    //               },
    //               body: JSON.stringify({message: 'ru'})
    //         })
    //         // const data = await response.json()
    //         // dispatch(translateAction(data))
    //     }

    //     if (!post) {
    //         load()
    //     }
    //     load()
    // }, [])

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:3000/api/language`)
            const data = await response.json()
            dispatch(translateAction(data))
        }

        if (!post) {
            load()
        }
        load()
    }, [])

    if (!data) {
        return (
            <>
                <h5>Загрузка...</h5>
            </>
        )
    }
    return (

        <MainLayout>
            <StyleRoot>
                <div className={classes.container}>
                    <h1 style={styles.wobble}>{data.loading.blogSory}</h1>
                </div>
            </StyleRoot>
        </MainLayout>
    )
}

Blog.getInitialProps = async ({ req }) => {
    if (!req) {
        return { post: null }
    }

    const response = await fetch(`http://localhost:3000/api/language`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({message: 'ru'})
    })
    const post = await response.json()
    return {
        post
    }
}