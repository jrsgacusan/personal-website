import React, { useEffect } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import classes from './Navbar.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { modalActions } from '../../store/modal-slice';

const Navbar: React.FC<{
  heroRef: any;
  aboutMeRef: any;
  worksRef: any;
  timelineRef: any;
}> = (props) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isContactModalOpen);
  window.addEventListener('scroll', function () {
    var header = this.document.querySelector('header');
    // header!.classList.toggle(`${classes.sticky}`, window.scrollY > 0);
    let opacity = window.scrollY / 1000 >= 0.9 ? 0.9 : window.scrollY / 1000;
    header!.style.opacity = opacity.toString();
  });

  useEffect(() => {
    var header = document.querySelector('header');
    if (isModalOpen) {
      header!.style.opacity = '0';
    }
  }, [isModalOpen]);

  const scrollToTop = () =>
    window.scrollTo({
      top: props.heroRef.current.offsetTop,
      behavior: 'smooth',
    });
  const scrollToAboutMe = () =>
    window.scrollTo({
      top: props.aboutMeRef.current.offsetTop,
      behavior: 'smooth',
    });
  const scrollToWorks = () =>
    window.scrollTo({
      top: props.worksRef.current.offsetTop,
      behavior: 'smooth',
    });
  const scrollToTimeline = () =>
    window.scrollTo({
      top: props.timelineRef.current.offsetTop,
      behavior: 'smooth',
    });

  const handleOnClick = () => {
    dispatch(modalActions.openContactModal());
  };

  return (
    <header className={classes.header}>
      <div className={classes['left-content']}>
        <h1 style={{ cursor: 'pointer' }} onClick={handleOnClick}>
          <AiOutlineMail style={{ margin: '0', marginRight: '5px' }} />
          juelreigacusan22@gmail.com
        </h1>
        <h1>
          {' '}
          <AiOutlinePhone style={{ margin: '0', marginRight: '5px' }} />
          +6397 7375 7020
        </h1>
      </div>
      <ul className={classes.ul}>
        <li onClick={scrollToTop}>Home</li>
        <li onClick={scrollToAboutMe}>About Me</li>
        <li onClick={scrollToWorks}>Works</li>
        <li onClick={scrollToTimeline}>Timeline</li>
      </ul>
    </header>
  );
};

export default Navbar;
