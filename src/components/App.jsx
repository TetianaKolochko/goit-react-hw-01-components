import {Profile}  from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return  <div>
 <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    
    <FriendList friends={friends} />;
    
<TransactionHistory transactions ={ transactions} />;
    </div>;
};
