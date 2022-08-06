import style from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <h2 className={style.title}>{title}</h2>
    {children}
  </div>
);
export default Section;

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
