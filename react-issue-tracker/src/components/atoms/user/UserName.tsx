interface UserNameProps {
  name: string;
}

export default function UserName({ name }: UserNameProps) {
  return <span className="text-sm font-medium text-gray-600">{name}</span>;
}
