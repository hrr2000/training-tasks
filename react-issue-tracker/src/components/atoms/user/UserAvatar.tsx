import { User } from '../../../types';

interface UserAvatarProps {
  user: User;
}

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <div className="rounded-full overflow-hidden w-fit" style={{ width: '40px', height: '40px' }}>
      <img width={40} height={40} src={user.avatar_url} alt={user.name} />
    </div>
  );
}
