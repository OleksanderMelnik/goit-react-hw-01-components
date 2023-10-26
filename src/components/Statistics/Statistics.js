import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    
    return (
      <section class="statistics">
        <h2 class="title">{title}</h2>
        {stats.map(el => (
        <ul class="stat-list" key={el.id}>
          <li class="item">
            <span class="label">{el.label}</span> 
            <span class="percentage">{el.percentage}</span>
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