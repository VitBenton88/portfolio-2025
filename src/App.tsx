import './App.css'
import Picture, { type SourceType, type MediaQueryTypes, type ImageData } from './components/Picture'

const fallbackImage: ImageData = {
  alt: 'Vit Benton headshot',
  loadingStrategy: 'lazy',
  src: './headshot-1x.jpg',
};

const headshotSources = [
  {
    srcset: './headshot-1x.jpg 1x, ./headshot-2x.jpg 2x, ./headshot-3x.jpg 3x, ./headshot-4x.jpg 4x',
    media: '(min-width: 768px)' as MediaQueryTypes,
    type: 'image/jpeg' as SourceType,
  },
  {
    srcset: './headshot-mobile-1x.jpg 1x, ./headshot-mobile-2x.jpg 2x, ./headshot-mobile-3x.jpg 3x, ./headshot-mobile-4x.jpg 4x',
    media: '(max-width: 768px)' as MediaQueryTypes,
    type: 'image/jpeg' as SourceType,
  },
];

function App() {
  return (
    <>
      <main>
        <h1>Vit Benton</h1>
        <h2>Frontend Software Engineer</h2>
        <figure>
          <Picture classNames={'headshot'} img={fallbackImage} sources={headshotSources} />
          <figcaption>Yours truely 👆</figcaption>
        </figure>
      </main>

      <aside>
        <h2>Links</h2>

        <nav>
          <ul id='links'>
            <li>
              <a href='https://github.com/VitBenton88/portfolio-2025' target='_blank'>
                <img src='./github.svg' alt='Vit Benton’s Personal GitHub' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/vit-benton/' target='_blank'>
                <img src='./linkedin.svg' alt='Vit Benton’s LinkedIn' />
              </a>
            </li>
          </ul>
        </nav>

        <h2>Skills</h2>

        <ul id='skills'>
          <li>
            <img src='./javascript.svg' alt='JavaScript icon' />
          </li>
          <li>
            <img src='./typescript.svg' alt='TypeScript icon' />
          </li>
          <li>
            <img src='./react.svg' alt='React.js icon' />
          </li>
          <li>
            <img src='./vue.svg' alt='Vue.js icon' />
          </li>
          <li>
            <img src='./html.svg' alt='HTML5 icon' />
          </li>
          <li>
            <img src='./css.svg' alt='CSS3 icon' />
          </li>
        </ul>

        <h2>Experience</h2>

        <p>Full-stack web developer with a focus on frontend with over 10 years of experience working on the web. I have contributed to large-scale UI projects, tackled state management challenges, and helped modernize frontends by migrating to newer frameworks.<em>As a side-note, I am also looking to relocate out of Florida and find an opportunity in a major tech hub.</em></p>

      </aside >
    </>
  )
}

export default App
