import { memo } from 'react';
import '../../../public/css/spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Загрузка...</p>
    </div>
  );
}
export const MemoizedSpinner = memo(Spinner);
