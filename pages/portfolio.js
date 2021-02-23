import classes from '../styles/contact.module.scss'
import Image from 'next/image'
import { bounceIn, zoomInUp } from 'react-animations'
import Radium, { StyleRoot } from 'radium'
import MainLayout from '../components/MainLayout'
import { translateAction } from '../store/actions/translateAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const styles = {
    bounceIn: {
        animation: '2s',
        animationName: Radium.keyframes(bounceIn, 'bounceIn')
    },
    zoomInUp: {
        animation: '2s',
        animationName: Radium.keyframes(zoomInUp, 'zoomInUp')
    }
}

export default function Portfolio({post}) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.translate);

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
                    <div className={classes.photoContainer}>
                    <Image src={"https://i.ibb.co/W5p6zsL/photo.jpg"}
                            className={classes.circularSquare}
                            width={380}
                            height={380} />
                    </div>
                    <div className={classes.textContainer} style={styles.zoomInUp}>
                        <div className={classes.contactText}>
                        <div style={{margin: '5px'}}>
                            <Image
                                src="https://cdn1.savepice.ru/uploads/2021/2/23/f1f74f02cee25e3083fe30e75ce62283-full.png"
                                width={450}
                                height={150}
                            />
                        </div>
                        <div style={{margin: '5px', paddingTop: '5px'}}>
                            <a href="https://play.google.com/console/u/1/developers/6226569472420632109/app/4974073272729995174/app-dashboard?timespan=thirtyDays">{data.loading.apk}</a>
                        </div>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        </MainLayout>
    )
}

Portfolio.getInitialProps = async ({ req }) => {
    if (!req) {
        return { post: null }
    }

    const response = await fetch(`http://localhost:3000/api/language`)
    const post = await response.json()
    return {
        post
    }
}