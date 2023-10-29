import PropTypes from 'prop-types';

import { StatisticsSection, Title, StatList, StatItem, Label, Percentage, generateColor} from './Statistics.styled.jsx';

export const Statistics = ({title, stats}) => {
    
    return (
      <StatisticsSection>
        {title && <Title>{title}</Title>}
        <StatList>
        {stats.map(el => (
          <StatItem key={el.id} style={{ backgroundColor: generateColor()}}>
          <Label>{el.label}</Label> 
          <Percentage>{el.percentage}%</Percentage>
          </StatItem>
        ))}
        </StatList>
      </StatisticsSection>      
        );   
  };

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}