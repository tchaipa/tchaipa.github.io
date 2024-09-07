import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, icon}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <img
              src= {icon}
              height='100'
              width= 'auto'
              alt=''
              loading='lazy'
            />
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
