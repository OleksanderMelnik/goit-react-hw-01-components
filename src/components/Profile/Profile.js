export function Profile ({username, tag, location, avatar, stats}) {
    return (
      <div>
        <div>
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
          <img src={avatar} alt={username} width="120" height="120" />

        </div>
        <ul>
          <li>{stats.followers}</li>
          <li>{stats.views}</li>
          <li>{stats.likes}</li>
        </ul>
      </div>
    );
  };