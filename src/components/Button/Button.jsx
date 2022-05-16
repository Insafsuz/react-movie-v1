const Button = ({ children }) => {
  return <button className='btn'>{children}</button>
}

const OutlineButton = ({ children }) => {
  return <Button className='btn-outline'>{children}</Button>
}

export default Button
