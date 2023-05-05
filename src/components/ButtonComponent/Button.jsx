import './button.css'
const Button = ({text,padLeft = '30px'}) => {
  return <button className="reusable__btn" style={{paddingLeft:`${padLeft}`,paddingRight:`${padLeft}`}}><a href="#">{text}</a></button>;
}
export default Button