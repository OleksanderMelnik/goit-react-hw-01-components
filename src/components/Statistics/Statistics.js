
export function Statistics ({title, stats}) {
    
    return (
        <section>
        <h2>{title}</h2>
        {stats.map(el => (
        <ul key={el.id}>
            <li>{el.label}</li>
            <li>{el.percentage}</li>
        </ul>))}
        </section>      
        );   
  };