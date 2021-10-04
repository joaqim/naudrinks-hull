import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '@lib/serializers'
import cx from 'classnames'

import VideoLoop from '@components/video-loop'
import Photo from '@components/photo'

import { Hero as HeroData } from '@compiled/schema'


export interface HeroProps {
  data: HeroData
}

interface ILink {
  url: string
  icon: string
}

const Hero = ({ data }: HeroProps) => {
  const { content, bgType, photos, video, textVariant = 'pageText' } = data;
  //const bgVariant = textVariant === 'white' ? 'black' : 'white';
  var bgVariant = 'pageBG';
  switch(textVariant) {
    case 'black':
      bgVariant = 'white';
    case 'white':
      bgVariant = 'black'
  }

  return (
    <section className="hero">
      {content && (
        <div className="hero--overlay">
          <div className="hero--content">
            <BlockContent
              renderContainerOnSingleChild
              // className={`rc bg-pageBG rounded-lg bg-opacity-70 py-4 max-w-prose mx-auto text-${textVariant}`}
               // className={`rc bg-darkGray bg-transparent bg-opacity-60 py-4 max-w-prose mx-auto text-${textVariant}`}
               className={`rc bg-${bgVariant} bg-transparent bg-opacity-60 rounded-md p-6 max-w-prose mx-auto text-${textVariant}`}
              blocks={content}
              serializers={serializers}
            />
          </div>
        </div>
      )}

      {bgType === 'video' && (
        <>
          <div className="hero--bg is-desktop">
            <VideoLoop title={video.title} id={video.id} />
          </div>
          <div className="hero--bg is-mobile">
            <VideoLoop title={video.title} id={video.id} />
          </div>
        </>
      )}

      {bgType === 'photo' && (
        <>
          {photos?.desktopPhoto && (
            <Photo
              photo={photos.desktopPhoto}
              width={1600}
              height={800}
              srcSizes={[800, 1000, 1200, 1600]}
              sizes="100vw"
              layout="fill"
              className="hero--bg is-desktop"
            />
          )}
          {photos?.mobilePhoto && (
            <Photo
              photo={photos.mobilePhoto}
              width={800}
              height={1400}
              sizes="100vw"
              layout="fill"
              className="hero--bg is-mobile"
            />
          )}
        </>
      )}
    </section>
  )
}

export default Hero
