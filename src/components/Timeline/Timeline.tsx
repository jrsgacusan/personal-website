import React from 'react';
import Layout from '../Layout';
import classes from './Timeline.module.css';
import { GiSchoolBag } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import { DiJavascript1 } from 'react-icons/di';

import { timelineElements } from './timelineElements';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { Button } from 'react-bootstrap';

const Timeline: React.FC = () => {
  let schoolIconStlyes = {
    color: 'hsl(0, 0%, 20%)',
    background: '#e7d2cc',
  };
  let workIconStyle = {
    color: 'hsl(0, 0%, 20%)',
    background: '#b9b7bd',
  };

  return (
    <Layout>
      <div className={classes.div}>
        <h1 className={classes.title}>MY TIMELINE</h1>
        <VerticalTimeline>
          {timelineElements.map((item) => {
            //identify icon style here
            let icStyle;
            let icon;
            if (item.icon === 'work') {
              icon = <DiJavascript1 />;
              icStyle = workIconStyle;
            } else if (item.icon === 'graduated') {
              icon = <MdSchool />;
              icStyle = schoolIconStlyes;
            } else {
              icon = <GiSchoolBag />;
              icStyle = schoolIconStlyes;
            }

            return (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                dateClassName={classes.date}
                icon={icon}
                iconStyle={icStyle}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h5 className="vertical-time-element-subtitle">
                  {item.location}
                </h5>
                <p id="description">{item.description}</p>
                {item.isButtonPresent && (
                  <a
                    href={item.href}
                    target="__blank"
                    className={classes.button}
                  >
                    <Button variant="outline-info">{item.buttonText}</Button>
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </Layout>
  );
};

export default Timeline;
