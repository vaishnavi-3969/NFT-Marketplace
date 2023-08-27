import React from 'react'

// INTERNAL IMPORT 
import Style from '../styles/Collection.module.css';
import images from '../img' ;
import {Banner, CollectionProfile} from '../collectionPage/collection.index' 
import {Slider , Brand} from '../components/componentsIndex'
import Filter from '../components/Filter/Filter' 

const Home = () => { 

    const CollectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_4,
    ];
    return(
        <div className={Style.collection}>
            <Banner bannerImage={images.creatorbackground1}/> 
            <CollectionProfile NFTData={CollectionArray}/> 
            <Filter/>
            <Slider/> 
            <Brand/>
        </div>
    )
}

export default Home