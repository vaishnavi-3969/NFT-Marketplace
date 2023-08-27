import React from 'react'
import Iamge from "next/image"

// internal import
import Style from './Banner.module.css'

const banner = ({ bannerImage }) => {
    return (
        <div className={Style.banner}>
            <div className={Style.banner_img}>
                <Image
                    src={bannerImage}
                    objectFit="cover"
                    alt="background"
                    width={1600}
                    height={300}
                />
            </div>
            <div className={Style.banner_img_mobile}>
                <Image
                    src={bannerImage}
                    objectFit="cover"
                    alt="background"
                    width={1600}
                    height={900}
                />
            </div>
        </div>
    )
}

export default banner