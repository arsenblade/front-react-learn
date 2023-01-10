import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Modal.module.scss'
import cn from 'classnames'

interface IModal {
  className?: string,
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
  count: number
}

const Modal:FC<IModal> = ({className, active, setActive, count}) => {
	let timer: string | number | NodeJS.Timeout | undefined;
	let textNumber;
	if (active) {
		timer = setTimeout(() => {setActive(false); clearTimeout(timer);}, 3000);
		timer = undefined;
	}	

	if(count === 0 || count === 5) {
		textNumber = 'Баллов'
	}
	else if(count === 1) {
		textNumber = 'Балл'
	}
	else {
		textNumber = 'Балла'
	}
		
	const closeModalHandler = () => {
		clearTimeout(timer);
		setActive(false);
	}
	return (	
		<div className={cn(styles.modal, {[styles.modalActive]: active})} onClick={closeModalHandler}>
			<div className={cn(styles.modalContainer, {[styles.modalContainerActive]: active})} onClick={closeModalHandler}>
				<h1 className={cn(styles.modalContent, styles.modalContentNumber)}>{count}</h1>
				<p className={cn(styles.modalContent, styles.modalContentText)}>{textNumber}</p>
			</div>
		</div>
	)
}

export default Modal;