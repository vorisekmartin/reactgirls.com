import React from 'react';
import { NewsletterButton, InputContainer, CustomInput, ButtonInputCont } from './Newsletter.elements';

function Newsletter() {
  const url = ""
  return (
  <div id="mc_embed_signup">
    <form action="https://reactgirls.us4.list-manage.com/subscribe/post?u=1f71f307d41e4d8a6a3a8a437&amp;id=65b94e5d99" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <ButtonInputCont id="mc_embed_signup_scroll">
        <InputContainer>
          <CustomInput type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="tvůj email" required />
        </InputContainer>
        <div class="clear">
        <NewsletterButton type="submit" value="ODEBÍRAT NEWSLETTER" name="subscribe" id="mc-embedded-subscribe" class="button" />
        </div>
      </ButtonInputCont>
    </form>
  </div>
  ); 
} 
export default Newsletter;