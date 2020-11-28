import React from "react";
import { Link } from "react-router-dom"

// İmage
import register from "../../images/Register.png";

// Components
import Input from "../../components/input_fields/input";
import InlineButton from "../../components/inline_button/inline_button";
import OutlineButton from "../../components/outline_button/outline_button";
import SocialLogin from "../../components/social_logos/social_logos";

// Icons
import UserIcon from "@iconify/icons-ant-design/user";
import EmailIcon from "@iconify/icons-carbon/email";
import PasswordIcon from "@iconify/icons-clarity/lock-line";

import { motion } from "framer-motion";
import { Grid } from "semantic-ui-react";

/**
 * TODO:
 * [] Sağ taraf hizalama (Input alanları)
 * [] 
 */

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 1,
  },
}

const pageTransition = {
  /* type: "spring", */
  ease: "easeOut",
  duration: 1
};


function Register() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Grid verticalAlign='middle'>
        <Grid.Row columns={2}>
          <Grid.Column className="left-side-register">
            <div>
              <img src={register} alt="kayıt ol görseli"></img>
              <p className="login-text" >Zaten bir hesabınız var mı?</p>
              <Link to="/login">
                <OutlineButton tag="giriş" />
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column className="right-side-register">
            <div>
              <h1 className="giris">Hesap Oluştur</h1>
              <SocialLogin />
              <p className="email-login">veya email ile kayıt olun</p>
              <Input icon={UserIcon} placeHolder="İsim" />
              <Input icon={EmailIcon} placeHolder="Email" />
              <Input icon={PasswordIcon} placeHolder="Parola" />
              <Input icon={PasswordIcon} placeHolder="Parola Doğrulama" />
              <InlineButton tag="kayıt ol" />
            </div>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </motion.div>
  );
}

export default Register;
