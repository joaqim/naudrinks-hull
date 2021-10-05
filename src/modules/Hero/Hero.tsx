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

const Hero = ({ data }: HeroProps) => {
  const { content, bgType, photos, video, theme = '' } = data
  //const bgVariant = textVariant === 'white' ? 'black' : 'white';
  var bgVariant: string
  var textVariant: string

  switch (theme) {
    case 'dark':
      bgVariant = 'lightGrey'
      textVariant = 'black'
      break
    case 'light':
      bgVariant = 'darkGrey'
      textVariant = 'white'
      break
    default:
      textVariant = 'pageText'
      bgVariant = 'darkGrey'
  }

  return (
    <section className="hero">
      {content && (
        <div className="hero--overlay">
          <div className="hero--content">
            <BlockContent
              renderContainerOnSingleChild
              className={`rc hero--block is-styled ${theme}`}
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
