import React from 'react';
import ListItem from './ListItem';
import classes from './List.module.css';
import { Work } from '../../models/Work';
import bsu from '../../assets/images/bsu-smis.png';

import quicks from '../../assets/images/quick-s.png';
import picpa from '../../assets/images/picpa-mis.png';

const list: Work[] = [
  {
    image: quicks,
    title: 'Quick Service Android Application',
    description:
      'Android mobile application developed using Kotlin. It serves as a service marketplace application for Baguio City Local Citizens.',
    id: 'a1',
    href: 'https://github.com/jrsgacusan/Quick-Service',
  },
  {
    image: bsu,
    title: 'BSU SMIS React App',
    description:
      'The react version of Benguet State University School Management Information System. It was developed using React.js.',
    id: 'a2',
    href: 'https://github.com/jrsgacusan/iol-bsu-smis',
  },
  {
    image: picpa,
    title: 'PICPA MIS',
    description:
      'Membership Information System for Philippine Institute of Certified Public Accountant - Benguet Chapter. Front-end technologies used: React.js, Bootstrap, HTML, CSS, and JavaScript.',
    id: 'a3',
    href: 'https://picpabbmp.com/',
  },
];

const List: React.FC = () => {
  return (
    <div className={classes.container}>
      {list.map((item) => {
        return (
          <div className={classes.item} key={item.id}>
            <ListItem work={item} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
