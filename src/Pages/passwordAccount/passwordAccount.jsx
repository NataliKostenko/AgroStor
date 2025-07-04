import H1 from '../../Components/H1/H1';
import ButtonBody from '../../Components/ButtonBody/ButtonBody';
import './passwordAccount.css';

export default function PasswordAccont() {

	return <div className='passwordChangePage'>
		<H1 text={'Змінити пароль'} />
		<div className='passwordChangeBlock'>
			<form className='passwordChange'>
				<input type='password' placeholder='Старий пароль' />
				<input type='password' placeholder='Новий пароль' />
				<input type='password' placeholder='Підтвердити пароль' />
				<ButtonBody link={'#'} text={'Змінити пароль'} type={'submit'} />
			</form>
		</div>
	</div>
}