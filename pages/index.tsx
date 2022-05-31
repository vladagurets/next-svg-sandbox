import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ReactComponent as PhotoshopSVG } from '../public/icons/adobephotoshop.svg'


import { ReactComponent as CrossSVG } from '../public/icons/cross.svg'
import { ReactComponent as CaloriesSVG } from '../public/icons/calories.svg'

import { ReactComponent as WorkoutSVG } from '../public/icons/workout.svg'
import { ReactComponent as BodySVG } from '../public/icons/body.svg'
import { ReactComponent as ComplexSVG } from '../public/icons/complexicon.svg'

import { IconColor, IconSize } from '@betterme-dev/web-ui-kit'
import cn from 'classnames'

const SIMPLE_ICONS = [CrossSVG, CaloriesSVG, PhotoshopSVG]
const COMPLEX_ICONS = [WorkoutSVG, BodySVG, ComplexSVG]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Sizing</h2>
        <div className={styles.lists}>
          {
            SIMPLE_ICONS.map((Icon, index) => (
              <div key={index} className={styles.list}>
                {Object.keys(IconSize).map((size) => (
                  <div key={size}>
                    <Icon className={IconSize[size]} />
                    <code>{`<Icon className={IconSize.${size}} />`}</code>
                  </div>
                ))}
              </div>
            ))
          }
        </div>
        <h2>Filling</h2>
        <div className={styles.lists}>
          {
            SIMPLE_ICONS.map((Icon, index) => (
              <div key={index} className={styles.list}>
                {Object.keys(IconColor).map((color) => (
                  <div key={color}>
                    <Icon className={cn(IconSize.XL, IconColor[color])} />
                    <code>{`<Icon className={IconColor.${color}} />`}</code>
                  </div>
                ))}
              </div>
            ))
          }
        </div>
        <h2>Complex icons</h2>
        <div className={styles.lists}>
          {
            COMPLEX_ICONS.map((Icon, index) => (
              <div key={index} className={styles.list}>
                {Object.keys(IconSize).map((size) => (
                  <div key={size}>
                    <Icon className={IconSize[size]} />
                    <code>{`<Icon className={IconSize.${size}} />`}</code>
                  </div>
                ))}
                <div>
                  <Icon className={cn(IconSize.XXL, styles[`customComplexIcon-${index}`])} />
                  <code>{`<Icon className={cn(IconSize.XXL, custom-${index}} />`}</code>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Home
