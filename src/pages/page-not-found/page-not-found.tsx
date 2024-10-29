import { Link } from 'react-router-dom';
import '../../../public/css/page-not-found.css';

function PageNotFound(): JSX.Element {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, но запрашиваемая вами страница не существует.</p>
      <Link to="/" className="home-link">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default PageNotFound;
