import * as React from "react";

import { SOCIAL_MEDIA } from "../../core/config";
import { SocialMediaIcon } from "..";
import { Nav, NavProps } from "./Nav";

import "./scss/index.scss";

type FooterProps = NavProps;

export const Footer: React.FC<FooterProps> = ({ menu }) => (
  <div className="footer" id="footer">	  
		<div className="container g-0 my-5 text-center">
			
				<section>
					<p className="py-2 fw-bold"><b>NEWSLETTER</b></p>
					<p className="py-2 font-weight-normal lead">Turn your email into an art gallery</p>
					<p className="py-2 font-weight-normal">Be the first to know our products and stay informed of BPO news.</p>
					<form method="post" action="https://bhuvan-patel-mail.herokuapp.com/subscription/form" className="listmonk-form">
						<div className="row d-flex justify-content-center">
							<div className="col-md-4 col-12">
								<div className="form-outline form-white mb-4">
									<input type="email" name="email" id="form5Example2" className="form-control" placeholder="Your Email Address"/>									
								</div>
								<p className="d-none">
									<input id="dc032" type="checkbox" name="l" checked value="dc032645-9dee-4d94-bf0d-b95745c01b1e" />
									<p className="form-label">Bhuvanpatel.com - Website footer</p>
								</p>
							</div>							
						</div>
						<div className="row d-flex justify-content-center">
							<div className="col-md-4 col-12">							
								<button type="submit" className="btn btn-dark mb-2 w-100">
								Subscribe
								</button>
							</div>
						</div>
					</form>
				</section>

			
		</div>



  <div className="footer__favicons container">
        {SOCIAL_MEDIA.map(medium => (
          <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
        ))}
      </div>
      <Nav menu={menu} />

  </div>


);
