interface User {
  id: string;
  name: string;
  avatar_url: string;
}

interface Comment {
  id: string;
  user: User;
  content: string;
  notes: any;
  date: string;
}

interface Issue {
  id: string;
  iid: string;
  title: string;
  state: string;
  body: string;
  author: User;
  assignee: User;
  labels: Label[];
  comments: Comment[];
  created_at: string;
  updated_at: string;
}

interface Label {
  id: string;
  name: string;
  color: string;
  text_color: string;
}

export type { User, Comment, Issue, Label };
