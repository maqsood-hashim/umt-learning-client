import { Button, Divider } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './CourseCard.module.css'
import LazyLoad from 'react-lazyload';


const CourseCard = ({title,name,id,img}) => {
    return (
        <LazyLoad height={200} offset={100} once={true} >
        <div className={Styles.course__Card}>
            <Link to={`/course/${id}`} className={Styles.container}>
            <img className={Styles.image} src={img}alt=""/>
            <div className={Styles.overlay}>
            <p className={Styles.text}>View</p>
            </div>
            </Link>
            
            
           <div className={Styles.course__content}>
                <span>Jan-Jun 2021</span>
                <h5>Aviation Fundamentals</h5>
                <h6>Discription</h6>

                <span>Airport Fundamentals course imparts knowledge on the airport, airlines, and aspects of the aviation industry.
                      </span>
            </div>
            
        </div>
        <Divider/>
        </LazyLoad>
    );
};

export default CourseCard;
