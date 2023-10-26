import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    
    return (
      <section className="statistics">
        <h2 className="title">{title}</h2>
        {stats.map(el => (
        <ul className="stat-list" key={el.id}>
          <li className="item">
            <span className="label">{el.label}</span> 
            <span className="percentage">{el.percentage}</span>
          </li>
        </ul>))}
      </section>      
        );   
  };

  Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };