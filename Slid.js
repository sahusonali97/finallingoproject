import { CCarousel } from "@coreui/react";
import {CCarouselItem} from "@coreui/react";
import {CImage} from "@coreui/react";
import Pod from './job.jpeg'
import Moon from './opo.jpeg'


function Slid ()  {
    return (
      <div><CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Pod} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Moon} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Pod} alt="slide 3" />
      </CCarouselItem>
    </CCarousel></div>
    )
  }
  
  export default Slid