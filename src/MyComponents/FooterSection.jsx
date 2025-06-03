import React from "react";

const Footer = () =>{
  return (
    <div className="footer">
      <div className="container">
        <div className="cont1">
          <div className="first">
            <img src="	https://faitsdarmes.com/modules/roy_customizer/upload/logo-normal-1.png" alt="" />
            <span>+33 (0) 7 84 54 76 66</span>
            <span>renaud@faitsdarmes.com</span>
            <span>29 rue des Meuliers, ZAC des Meules, 63270 Vic le Comte</span>
          </div>

          <div className="second">
            <div className="box">
                <p>Products</p>
                <p>Best sales</p>
                <p>New products</p>
                <p>Best sales</p>
            </div>
            <div className="box">
                <p>Company</p>
                <p>Delivery</p>
                <p>Stores</p>
                <p>A propos</p>
                <p>Legal notice</p>
                <p>Contact us</p>
            </div>
            <div className="box">
                <p>Your account</p>
                <p>Personal info</p>
                <p>Orders</p>
                <p>Credit slips</p>
                <p>Addresses</p>
                <p>Vouchers</p>
                <p>My blog info</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="cont2">
          <span>&copy;2024 Faits D'armes. All right reserved</span>
          <div className="third">
            <span>Terms and conditions</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
