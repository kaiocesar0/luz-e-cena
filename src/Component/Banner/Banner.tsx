import styles from './Banner.module.css'

type BannerProps = {
  src: string,
  alt: string,
}

const Banner = ({src, alt}: BannerProps) => {

  return (
    <div>
      <img src={src} alt={alt} className={styles.banner}/>
    </div>
  )

}

export default Banner