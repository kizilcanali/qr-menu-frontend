import React from "react";
import { Link } from "react-router-dom";

// Components
import Input from "../../components/input_fields/input";
import ButtonInlineLogin from "../../components/inline_button/inline_button";
import SocialLogos from "../../components/social_logos/social_logos";
import ButtonOutlineRegister from "../../components/outline_button/outline_button";

// Image
import book from "../../images/Book.png";

// Icons
import home from "@iconify/icons-carbon/email";
import lock from "@iconify/icons-clarity/lock-line";

import { motion } from "framer-motion";
import { Grid } from "semantic-ui-react";

/**
 * TODO:
 * [✓] Input alanlarındaki iconların arkaplanları saydam olacak
 * [✓] Logolar gelecek
 * [✓] Butonlara css eklenecek
 * [] Image responsive yapılacak
 * [] Sayfayı Responsive olarak doldur
 * [✓] Fontlar ayarlanacak
 * [] Fontlar responsive olacak
 * [] Logo kısmı diğer elementlere göre ortalanacak
 * [] Logolar sayfa ufaldıkça elips oluyor onu düzelt.
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
  /*   type: "tween", */
  ease: "easeOut",
  duration: 0.5
};

function Login() {
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
          <Grid.Column className = "left-side">
            <div className = "parentVertical">
              <div className = "forVertical">
                <h1 className="giris">Giriş</h1>
                <SocialLogos />
                <div className = "input-places">
                <p className="email-login">veya email ile giriş yapın</p>
                  <div className = "inline-input-places">
                    <Input placeHolder="Email" icon={home} />
                    <Input placeHolder="Parola" icon={lock} />
                    <p className="forget-password">Şifreni mi unuttun?</p>
                    <ButtonInlineLogin tag="Giriş" />
                  </div>
                </div>
              </div>
            </div>
            

          </Grid.Column>
          <Grid.Column className="right-side">
            <div className = "parentVerticalRight">
              <div className = "forVerticalRightSide">
                <img src={book} height="400px" width="400px" alt="login görseli"></img>
                <p className="kayit-text">Bir hesabınız yok mu? Hemen hesap oluşturun.</p>
                <Link to="/register">
                  <ButtonOutlineRegister tag="Kayıt Ol" />
                </Link>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </motion.div >
  );
}

export default Login;
