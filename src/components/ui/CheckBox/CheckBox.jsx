import s from './style.module.scss';

export default function CheckBox() {
  return (
    <div className={s.checkbox}>
      <input
        type="checkbox"
        id="privacy-policy"
        name="privacy-policy"
        required
      />
      <label>
        I agree with <span>Teams of service</span> and{' '}
        <span>Privacy policy</span>
      </label>
    </div>
  );
}
