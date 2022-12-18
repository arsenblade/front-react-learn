import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Modal.module.scss'
import cn from 'classnames'

interface IModal {
  className?: string,
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
  count: number,
  text: string
}

const Modal:FC<IModal> = ({className, active, setActive, count, text}) => {
	let timer: string | number | NodeJS.Timeout | undefined;
	if (active) {
		timer = setTimeout(() => {setActive(false); clearTimeout(timer);}, 3000);
		timer = undefined;
	}	
		
	const closeModalHandler = () => {
		clearTimeout(timer);
		setActive(false);
	}
	return (	
		<div className={cn(styles.modal, {[styles.modalActive]: active})} onClick={closeModalHandler}>
			<div className={cn(styles.modalContainer, {[styles.modalContainerActive]: active})} onClick={closeModalHandler}>
				<h1 className={cn(styles.modalContent, styles.modalContentNumber)}>{count}</h1>
				<p className={cn(styles.modalContent, styles.modalContentText)}>{text}</p>
			</div>
		</div>
	)
}

export default Modal;