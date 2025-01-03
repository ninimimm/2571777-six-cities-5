import { memo } from 'react';
import { Link } from 'react-router-dom';
import '../../../public/css/page-not-found.css';

function PageNotFoundScreen(): JSX.Element {
  return (
    <div className="not-found">
      <h1>404</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
export const MemoizedNotFoundScreen = memo(PageNotFoundScreen);
