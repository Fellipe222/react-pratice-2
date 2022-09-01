import data from './data'
import Content from './Content'
import Navbar from './Navbar'

export default function App() {
  const dataElements = data.map(element => {
    return <Content
      title = {element.title}
      location = {element.location}
      googleMapsUrl = {element.googleMapsUrl}
      startDate = {element.startDate}
      endDate = {element.endDate}
      description = {element.description}
      imageUrl = {element.imageUrl} 
      />})
  return (
    <>
    <Navbar />
    {dataElements}
    </>
  );
}

