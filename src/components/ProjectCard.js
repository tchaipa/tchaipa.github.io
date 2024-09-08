import { Col } from "react-bootstrap";

<<<<<<< HEAD

export const ProjectCard = ({ title, description, imgUrl, icon}) => {
=======
export const ProjectCard = ({ title, description, imgUrl }) => {
>>>>>>> 24e9bb8901908f8fe1cb4f2080b145bbda5d3761
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
<<<<<<< HEAD
        <img
              src= {icon}
              height='100'
              width= 'auto'
              alt=''
              loading='lazy'
            />
=======
>>>>>>> 24e9bb8901908f8fe1cb4f2080b145bbda5d3761
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
