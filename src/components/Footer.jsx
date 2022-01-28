import {memo} from 'react';

const Footer = () => {
  console.log("msg from Footer")  //testing re-renders
  return (
    <footer>
      <div className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ipsum?
      </div>
    </footer>
  )
};

export default memo(Footer); //for prevent re-renders
