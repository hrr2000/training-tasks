import { IoMdArrowBack } from 'react-icons/io';
import HomeViewModel from '../../viewmodels/HomeViewModel';

export default function BackButton() {
  const { goBack } = HomeViewModel();
  return (
    <button onClick={goBack}>
      <IoMdArrowBack size={22} />
    </button>
  );
}
