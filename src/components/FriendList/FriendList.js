import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem';
import { FriendListStyled } from './FriendList.style.jsx';

export const FriendList = ({friends}) => {
    return (
      <FriendListStyled>
          {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
          />
        ))}
      </FriendListStyled>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }