import React, { Component, Fragment } from "react";

// styles
import "./Intro.scss";

class Intro extends Component {
	render() {
		return (
			<Fragment>
				<div className='intro container'>
					{/* Promo */}
					<div className='intro__promo'>
						<div className='intro__promo-content'>
							
							<div className='intro__promo-buttons'>
								<button
									onClick={() =>
										this.props.toggleModal({ type: "LOGIN", isOpen: true })
									}
								>
									Login
								</button>
								<button
									onClick={() =>
										this.props.toggleModal({ type: "REGISTER", isOpen: true })
									}
								>
									Register
								</button>
							</div>
						</div>
						<div className='intro__promo-img'>
							<img src='/assets/imgs/promo.svg' alt='promo' />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Intro;
