import { useState } from "react";
import "./App.css";
import SingUp from "./Component/SingUp";
import SingUp2 from "./Component/SingUp2";
import Logo from "./Logo.png";

function App() {
	const [step, setStep] = useState(1);

	const renderView = () => {
		switch (step) {
			case 1:
				return <SingUp />;
			case 2:
				return <SingUp2 />;

			default:
				break;
		}
	};

	return (
		<div className='App'>
			<div className='d-flex justify-content-center charvai'>
				<div className='w-100' style={{ maxWidth: "800px" }}>
					<div className='d-flex justify-content-between m-4'>
						<div className='text-left'>
							<img src={Logo} className='logo' alt='....' />
							<p>
								A marketplace for conversations, mentorships and performances.
							</p>
							<div className='d-flex justify-content-flex-start'>
								<p>Search New Talent</p>
								<input
									class='round ml-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
								/>
							</div>
						</div>
						<div className='d-flex justify-content-flex-start'>
							<p>SingUp</p>
							<p className='ml-2'>Login</p>
						</div>
					</div>
					<div className='d-flex justify-content-start p-4 '>
						<div class='card w-100 charvai2' style={{ maxWidth: "800px" }}>
							<div class='card-body'>
								<div className='toggle__button'>
									<div className='wrapper'>
										<p
											className={step === 1 ? "active" : ""}
											onClick={() => setStep(1)}>
											FAN SIGNUP
										</p>
										<p
											className={step === 2 ? "active" : ""}
											onClick={() => setStep(2)}>
											TALENT SIGNUP
										</p>
									</div>
								</div>

								{renderView()}
							</div>
						</div>
					</div>
					<div className='d-flex justify-content-between m-5 mobilefooter'>
						<img src={Logo} className='logofooter' alt='....' />
						<p>
							How Fancove Works?
							<br />@ 2021 Fancove
						</p>
						<p>Terms of Use</p>
						<p>Contact Us</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
