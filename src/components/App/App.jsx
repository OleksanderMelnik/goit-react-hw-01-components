
import { Profile } from '../Profile/Profile.js';
import user from '../json/user.json';
import { Statistics } from '../Statistics/Statistics.js';
import data from '../json/data.json';
import friends from '../json/friends.json';
import { FriendList } from '../FriendList/FriendList.js';
import transactions from '../json/transactions.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory.js'

import { Container } from './App.styled.jsx';

export const App = () => {
  return (
    <Container>
      <Profile 
      username= {user.username}
      tag= {user.tag}
      location= {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
      <Statistics title="Upload stats" stats= {data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>    
  );
};


