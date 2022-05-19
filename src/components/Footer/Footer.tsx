import * as React from "react";

import { SOCIAL_MEDIA } from "../../core/config";
import { SocialMediaIcon } from "..";
import { Nav, NavProps } from "./Nav";

import "./scss/index.scss";

type FooterProps = NavProps;

export const Footer: React.FC<FooterProps> = ({ menu }) => (
  <div className="footer" id="footer">

<div className="container-fluid g-0 my-5">
	<div className="bg-dark text-center text-white">
		<div className="container p-4 pb-0">
			<section>
				<form method="post" action="https://bhuvan-patel-mail.herokuapp.com/subscription/form" className="listmonk-form">
					<div className="row d-flex justify-content-center">
						<div className="col-auto">
							<p className="pt-2">
								<strong>Sign up for our newsletter</strong>
							</p>
						</div>
						<div className="col-md-5 col-12">
							<div className="form-outline form-white mb-4">
								<input type="email" name="email" id="form5Example2" className="form-control" />
								<p className="form-label">Email address</p>
							</div>
              <p className="d-none">
                <input id="dc032" type="checkbox" name="l" checked value="dc032645-9dee-4d94-bf0d-b95745c01b1e" />
                <p className="form-label">Bhuvanpatel.com - Website footer</p>
              </p>
						</div>
						<div className="col-auto">							
							<button type="submit" className="btn btn-outline-light mb-4">
							Subscribe
							</button>
						</div>
					</div>
				</form>
			</section>
		</div>
</div>
</div>



  <div className="footer__favicons container">
        {SOCIAL_MEDIA.map(medium => (
          <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
        ))}
      </div>
      <Nav menu={menu} />

  </div>


);
