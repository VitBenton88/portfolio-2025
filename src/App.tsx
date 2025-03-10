import './App.css'
import Picture, { type SourceType, type ImageData } from "./components/Picture"

const fallbackImage: ImageData = {
  alt: 'Vit Benton headshot',
  loadingStrategy: 'lazy',
  src: './headshot-1x.jpg',
};

const resolutionSources = [
  {
    srcset: './headshot-1x.jpg 1x, ./headshot-2x.jpg 2x, ./headshot-3x.jpg 3x, ./headshot-4x.jpg 4x',
    type: 'image/jpeg' as SourceType,
  },
];

function App() {
  return (
    <>
      <h1>Vit Benton</h1>
      <h2>Frontend Software Engineer</h2>
      <figure>
        <Picture classNames={'headshot'} img={fallbackImage} sources={resolutionSources} />
        <figcaption>Yours truely 👆</figcaption>
      </figure>
    </>
  )
}

export default App
