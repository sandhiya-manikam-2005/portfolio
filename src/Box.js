import Heading from './Heading';
import Paragraph from './Paragraph';
function Box({head,desc,imgsrc}){
    return(
        <div>
      <h3>{head}</h3>
      <p>{desc}</p>
      <img src={imgsrc} alt="image"/>

      <Heading/>
      <Paragraph/>
      
      
    </div>

    )
}
export default Box;