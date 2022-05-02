import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IDataApi } from '../../types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setActive } from '../../store/modalSlice';
import './Modal.css';

interface ModalProps {
  activeModal?: boolean;
  setActive: (value: boolean) => void;
  selectedCard?: IDataApi | null;
}

const Modal = React.memo((props: ModalProps) => {
  const clearedInput = useSelector((state: RootState) => state.active.isActive);
  const dispatch = useDispatch();
  const setClass = clearedInput ? 'modal active' : 'modal';
  const { name, image, status, gender, type, species, location, episode, origin } =
    (props.selectedCard as IDataApi) || {};

  const setOpen = () => {
    dispatch(setActive(false));
  };

  return (
    <div className={setClass} onClick={setOpen}>
      <FontAwesomeIcon icon={faXmark} className="modal__close-button" onClick={setOpen} />
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>{name}</h2>
        <img src={image} alt="toy" className="card-img" />
        <div className="card-descr">
          <p>
            Status:
            <span>{status}</span>
          </p>
          <p>
            Species:
            <span>{species}</span>
          </p>
          <p>
            Type:
            <span>{type}</span>
          </p>
          <p>
            Gender:
            <span>{gender}</span>
          </p>
          <ul>
            Origin:
            <li>{origin?.name}</li>
            <li>{origin?.url}</li>
          </ul>
          <ul>
            Episode:
            <li>{episode?.filter((_, i: number) => i === 0)}</li>
            <li>{episode?.filter((_, i: number) => i === 1)}</li>
          </ul>
          <ul>
            Location:
            <li>{location?.name}</li>
            <li>{location?.url}</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Modal;
