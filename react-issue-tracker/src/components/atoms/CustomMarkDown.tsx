import { MARKDOWN } from '../../utils/constants';
import ReactMarkdown from 'react-markdown';

export default function CustomMarkDown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      transformImageUri={(uri) =>
        uri.startsWith('http') ? uri : `${MARKDOWN.IMAGE_BASE_URL}${uri}`
      }>
      {content}
    </ReactMarkdown>
  );
}
