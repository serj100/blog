import classes from '../styles/contact.module.scss'
import Image from 'next/image'
import { bounceIn, zoomInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import MainLayout from '../components/MainLayout';
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

export default function Resume({ post }) {
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
                            <div style={{ margin: '5px' }}>
                                <Image
                                    src="/male.svg"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div style={{ margin: '5px', paddingTop: '5px' }}>
                                {data.loading.sex}
                            </div>
                        </div>
                        <div className={classes.contactText}>
                            <div style={{ margin: '5px' }}>
                                <Image
                                    src="/en.svg"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div style={{ margin: '5px', paddingTop: '5px' }}>
                                {data.loading.langEn}
                            </div>
                        </div>
                        <div className={classes.contactText}>
                            <div style={{ margin: '5px' }}>
                                <Image
                                    src="/ru.svg"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div style={{ margin: '5px', paddingTop: '5px' }}>
                                {data.loading.langRu}
                            </div>
                        </div>
                        <div className={classes.contactText}>
                            <div style={{ margin: '5px' }}>
                                <Image
                                    src="/yold.svg"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div style={{ margin: '5px', paddingTop: '5px' }}>
                                {data.loading.yo}
                            </div>
                        </div>
                        <div className={classes.contactText}>
                            <div style={{ margin: '5px' }}>
                                <Image
                                    src="/geo.svg"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div style={{ margin: '5px', paddingTop: '5px' }}>
                                {data.loading.geo}
                            </div>
                        </div>
                        <div className={classes.contactText}>
                            <div style={{ margin: '5px' }}>
                                <Image
                                    src="/skills.svg"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div style={{ margin: '5px', paddingTop: '5px' }}>
                                {data.loading.skils}
                            </div>
                        </div>

                    </div>
                </div>
            </StyleRoot>
        </MainLayout>
    )
}

Resume.getInitialProps = async ({ req }) => {
    if (!req) {
        return { post: null }
    }

    const response = await fetch(`http://localhost:3000/api/language`)
    const post = await response.json()
    return {
        post
    }
}
