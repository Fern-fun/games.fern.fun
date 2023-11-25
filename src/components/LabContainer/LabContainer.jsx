import React from "react";
import { labs } from "./Labs";
import { InlineText } from "../Paragraph/Paragraph";

import lockIcon from "../../assets/lock.svg";
import githubIcon from "../../assets/github.svg";

function LabContainer() {
  const [lab_elements, setLabElements] = React.useState([]);

  React.useEffect(() => {
    labs.forEach((lab) => {
      setLabElements((lab_elements) => [
        ...lab_elements,

        <div className="lab-element hoverScale" key={lab.title}>
          <div className="lab-element__img">
            {lab.isPrivate ? (
              <div className="lab-element__img-private">
                <img src={lockIcon} alt="lock" />
              </div>
            ) : null}
            <img src={lab.img} alt="lab" />
          </div>
          <div className="lab-element__title">
            <div>
              <div>
                {lab.href !== "" ? (
                  <a href={lab.href} target="_blank" rel="noreferrer">
                    {lab.title}
                  </a>
                ) : (
                  lab.title
                )}
              </div>
              <div className="lab-element__title__description">
                <InlineText>{lab.description}</InlineText>
              </div>
            </div>
          </div>
          <div className="lab-element__content">
            <div className="lab-element__content__tags">
              {lab.tags.map((i) => (
                <span key={i} className={i}>
                  #{i}
                </span>
              ))}
            </div>
            <div className="lab-element__content__author">
              {lab.author.map((i) => (
                <a
                  href={`https://github.com/${i.name}`}
                  target="_blank"
                  rel="noreferrer"
                  key={i.name}
                >
                  {i.icon !== "" ? (
                    <img src={i.icon} alt="author" className="author-icon" />
                  ) : null}
                  <span key={i.name} className="author">
                    {i.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="lab-element__content__github">
              {lab.github !== "" ? (
                <a href={lab.github} target={"_blank"}>
                  <img src={githubIcon} alt="github" />
                </a>
              ) : null}
            </div>
          </div>
        </div>,
      ]);
    });
  }, []);

  return (
    <div className="lab-container fadeInFromBottom">
      {lab_elements.map((lab) => lab)}
    </div>
  );
}

export default LabContainer;
