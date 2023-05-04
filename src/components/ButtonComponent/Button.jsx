import './button.css'
const Button = ({text,padLeft}) => {
  return <button className="reusable__btn" style={{paddingLeft:`${padLeft}`,paddingRight:`${padLeft}`}}><a href="http://">{text}</a></button>;
}
export default Button