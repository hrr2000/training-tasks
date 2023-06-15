interface IssueStatusProps {
  state: string;
}

const states: any = {
  opened: {
    text: 'open',
    style: {
      borderColor: '#52c41a',
      color: '#52c41a'
    }
  }
};

export default function IssueStatus({ state }: IssueStatusProps) {
  return (
    <span className="px-1 rounded-md" style={{ ...states[state].style, borderWidth: '1px' }}>
      {states[state].text}
    </span>
  );
}
