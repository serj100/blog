import classes from '../styles/about.module.scss'
import { bounceIn, zoomInUp } from 'react-animations'
import Radium, { StyleRoot } from 'radium'
import MainLayout from '../components/MainLayout'
import { translateAction } from '../store/actions/translateAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

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

export default function Index({post}) {
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
            {data.loading.desc}
            </div>
        </div>
      </StyleRoot>
    </MainLayout>
  )
}


Index.getInitialProps = async ({ req }) => {
  if (!req) {
      return { post: null }
  }

  const response = await fetch(`http://localhost:3000/api/language`)
  const post = await response.json()
  return {
      post
  }
}