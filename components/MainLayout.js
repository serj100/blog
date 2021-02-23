// import Language from "./Language"
import Menu from "./menu"
import Radium, { StyleRoot } from 'radium'
import { Row, Col } from "react-bootstrap"
import { translateAction } from '../store/actions/translateAction'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const styles = {
    container: {
        height: "50vh",
        backgroundColor: "#1F191A"
    },
    row: {
        backgroundColor: "#1F191A",
        paddingTop: "90px"
    }
}

export default function MainLayout({ post, children }){

    const dispatch = useDispatch();
    const result = useSelector(state => state.translate);

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

    if (!result) {
        return (
            <>
                <h5>Загрузка...</h5>
            </>
        )
    }

    return (
        <StyleRoot>
            {/* <Language /> */}
            <main>
                <Row style={styles.row}>
                    <Col>
                        <div style={styles.container}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </main>
            <nav>
                <Menu />
            </nav>
        </StyleRoot>
    )
}

MainLayout.getInitialProps = async ({ req }) => {
    if (!req) {
        return { post: null }
    }

    const response = await fetch(`http://localhost:3000/api/language`)
    const post = await response.json()
    return {
        post
    }
}
