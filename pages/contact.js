import classes from '../styles/contact.module.scss'
import Image from 'next/image'
import { bounceIn, zoomInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import MainLayout from '../components/MainLayout';

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

export default function Contacts() {
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
                                src="/telega.svg"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div style={{margin: '5px', paddingTop: '5px'}}>
                            @Avanturist100
                        </div>
                        </div>
                        <div className={classes.contactText}>
                        <div style={{margin: '5px'}}>
                            <Image
                                src="/mail.svg"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div style={{margin: '5px', paddingTop: '5px'}}>
                            avanturist.mailbox@gmail.com
                        </div>
                        </div>
                        <div className={classes.contactText}>
                        <div style={{margin: '5px'}}>
                            <Image
                                src="/insta.svg"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div style={{margin: '5px', paddingTop: '5px'}}>
                            sergey_kozlov__
                        </div>
                        </div>
                        <div className={classes.contactText}>
                        <div style={{margin: '5px'}}>
                            <Image
                                src="/git.svg"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div style={{margin: '5px', paddingTop: '5px'}}>
                            @serj100
                        </div>
                        </div>
                        <div className={classes.contactText}>
                        <div style={{margin: '5px'}}>
                            <Image
                                src="/play.svg"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div style={{margin: '5px', paddingTop: '5px'}}>
                            AvanturDev
                        </div>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        </MainLayout>
    )
}