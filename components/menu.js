import classes from '../styles/menu.module.scss'
import { bounceInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap';
import { translateAction } from '../store/actions/translateAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Menu({post}) {
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
    <>
      <StyleRoot>
        <div className={classes.container_menu}>
          <Row>
            <Col xl={2} lg={2} md={2} className={classes.body1}>

            </Col>
            <Col xl={10} lg={10} md={10} sm={12} className={classes.body2}>
              <h4>{data.loading.title}</h4>
            </Col>
          </Row>
          <Row>
            <Col xl={2} lg={2} md={2} className={classes.body3}>
              <div className={classes.name}>
                <h1>{data.loading.name}</h1>
              </div>
            </Col>
            <Col xl={2} lg={2} md={2} sm={0} className={classes.body4}>
              <div className={classes.surname}>
                <h1>{data.loading.surname}</h1>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} className={classes.menu}>
              <ul>
                <li><Link href={'/about'}><a>{data.loading.about}</a></Link></li>
                <li className="active"><Link href={'/contact'}><a>{data.loading.contact}</a></Link></li>
                <li><Link href={'/resume'}><a>{data.loading.resume}</a></Link></li>
                <li><Link href={'/portfolio'}><a>{data.loading.portfolio}</a></Link></li>
                <li><Link href={'/blog'}><a>{data.loading.blog}</a></Link></li>
              </ul>
            </Col>
          </Row>
        </div>

      </StyleRoot>
    </>
  )
}

Menu.getInitialProps = async ({ req }) => {
  if (!req) {
      return { post: null }
  }

  const response = await fetch(`http://localhost:3000/api/language`)
  const post = await response.json()
  return {
      post
  }
}