// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile.js';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics.js';
import data from './Statistics/data.json';


export function App () {
  return (
    <div>
      <Profile 
      username= {user.username}
      tag= {user.tag}
      location= {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
      <Statistics title="Upload stats" stats= {data} />
      
    </div>    
  );
};


