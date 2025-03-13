import './App.css'
import Picture, {
  type SourceType,
  type PictureSource,
  type MediaQueryTypes,
  type ImageData
} from './components/Picture'

const fallbackImage: ImageData = {
  alt: 'Vit Benton headshot',
  loadingStrategy: 'lazy',
  src: './headshot-1x.jpg',
}

const headshotSources: PictureSource[] = [
  {
    srcset: './headshot-1x.jpg 1x, ./headshot-2x.jpg 2x, ./headshot-3x.jpg 3x, ./headshot-4x.jpg 4x',
    media: '(min-width: 769px)' as MediaQueryTypes,
    type: 'image/jpeg' as SourceType,
  },
  {
    srcset: './headshot-mobile-1x.jpg 1x, ./headshot-mobile-2x.jpg 2x, ./headshot-mobile-3x.jpg 3x, ./headshot-mobile-4x.jpg 4x',
    media: '(max-width: 768px)' as MediaQueryTypes,
    type: 'image/jpeg' as SourceType,
  },
]

const skillLogos: ImageData[] = [
  { src: './javascript.svg', alt: 'JavaScript icon' },
  { src: './typescript.svg', alt: 'TypeScript icon' },
  { src: './react.svg', alt: 'React.js icon' },
  { src: './vue.svg', alt: 'Vue.js icon' },
  { src: './node.svg', alt: 'Node.js icon' },
  { src: './php.svg', alt: 'PHP icon' },
  { src: './html.svg', alt: 'HTML5 icon' },
  { src: './css.svg', alt: 'CSS3 icon' },
]

type LinkConfig = {
  anchor: {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
  };
  image: {
    src: string;
    alt: string;
  };
}

const links: LinkConfig[] = [
  {
    anchor: {
      href: 'https://github.com/VitBenton88/',
      target: '_blank',
    },
    image: {
      src: './github.svg',
      alt: 'Vit Benton’s Personal GitHub',
    },
  },
  {
    anchor: {
      href: 'https://www.linkedin.com/in/vit-benton/',
      target: '_blank',
    },
    image: {
      src: './linkedin.svg',
      alt: 'Vit Benton’s LinkedIn',
    },
  },
]

function App() {
  return (
    <>
      <aside>
        <header>
          <h1>Vit Benton</h1>
          <h2>Frontend Software Engineer</h2>
        </header>

        <figure>
          <Picture classNames={'headshot'} img={fallbackImage} sources={headshotSources} />
          <figcaption>Yours truely 👆</figcaption>
        </figure>
      </aside>

      <main>
        <article>
          <h2>Links</h2>

          <nav>
            <ul id='links'>
              {links.map(({ anchor, image }) => (
                <li key={anchor.href}>
                  <a href={anchor.href} target={anchor.target}>
                    <img src={image.src} alt={image.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </article>

        <article>
          <h2>Technical Skills</h2>

          <ul id='skills'>
            {skillLogos.map(({ src, alt }) => (
              <li key={src}>
                <img src={src} alt={alt} />
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h2>Experience</h2>

          <div className="summary">
            <p>Full-stack web developer specializing in <b>frontend development</b>, with over 10 years of experience in web technologies. Extensive expertise in modern JavaScript frameworks and web development practices.</p>

            <p>I have contributed to large-scale UI projects, tackled state management challenges, and helped modernize frontends by migrating to newer frameworks, and maintained automated testing. <em>As a side-note, I am also looking to relocate out of Florida and find an opportunity in a major tech hub.</em></p>

            <a href="./Vit_Benton_Resume_2025.pdf" download>
              <button>Download full PDF resume</button>
            </a>
          </div>
        </article>

      </main >
    </>
  )
}

export default App