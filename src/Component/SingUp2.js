import React, { useState } from "react";
import Logo from "../Logo.png";
import axios from "axios";

const SingUp2 = () => {
	const [userDetails, setUserDetails] = useState({
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
		timezone: "",
		captcha: true,
	});

	const handelChange = (e) => {
		setUserDetails({
			...userDetails,
			[e.target.id]: e.target.value,
		});
	};

	const onSubmitSignIn = (e) => {
		e.preventDefault();
		axios
			.post("https://admin.fanconvo.com/api/v3/sign-up/talent", {
				first_name: userDetails.first_name,
				last_name: userDetails.last_name,
				username: userDetails.username,
				email: userDetails.email,
				password: userDetails.password,
				timezone: userDetails.timezone,
				captcha: true,
			})
			.then(({ data }) => {
				console.log("save", data);
			})
			.catch((err) => {
				console.log("Err", err?.response?.data?.messege);
			});
	};

	return (
		<>
			<form>
				<h1>Create Your Talent Account</h1>
				<div className='inputboxcover'>
					<div className='form-group  text-left'>
						<label htmlFor='exampleInputEmail1 '>First name*</label>
						<input
							type='text'
							className='form-control inputbox'
							id='first_name'
							aria-describedby='emailHelp'
							placeholder='First name'
							value={userDetails.first_name}
							onChange={handelChange}
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='inputboxcover'>
					<div className='form-group  text-left'>
						<label htmlFor='exampleInputEmail1'>Last name*</label>
						<input
							type='text'
							className='form-control inputbox'
							id='last_name'
							aria-describedby='emailHelp'
							placeholder='Last name'
							value={userDetails.last_name}
							onChange={handelChange}
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='inputboxcover'>
					<div className='form-group  text-left'>
						<label htmlFor='exampleInputEmail1'>Username*</label>
						<input
							type='email'
							className='form-control inputbox'
							id='username'
							aria-describedby='emailHelp'
							placeholder='Username'
							value={userDetails.username}
							onChange={handelChange}
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='inputboxcover'>
					<div className='form-group  text-left'>
						<label htmlFor='exampleInputEmail1'>Email*</label>
						<input
							type='email'
							className='form-control inputbox'
							id='email'
							aria-describedby='emailHelp'
							placeholder='email'
							value={userDetails.email}
							onChange={handelChange}
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='inputboxcover'>
					<div className='form-group  text-left'>
						<label htmlFor='exampleInputEmail1'>Timezone*</label>

						<select
							className='form-control inputbox'
							id='timezone'
							value={userDetails.timezone}
							onChange={handelChange}>
							<option
								timeZoneId='1'
								gmtAdjustment='GMT-12:00'
								useDaylightTime='0'
								value='International Date Line West/ABC'>
								(GMT-12:00) International Date Line West
							</option>
							<option
								timeZoneId='2'
								gmtAdjustment='GMT-11:00'
								useDaylightTime='0'
								value='Midway Island, Samoa'>
								(GMT-11:00) Midway Island, Samoa
							</option>
							<option
								timeZoneId='3'
								gmtAdjustment='GMT-10:00'
								useDaylightTime='0'
								value='Hawaii'>
								(GMT-10:00) Hawaii
							</option>
							<option
								timeZoneId='4'
								gmtAdjustment='GMT-09:00'
								useDaylightTime='1'
								value='Alaska'>
								(GMT-09:00) Alaska
							</option>
							<option
								timeZoneId='5'
								gmtAdjustment='GMT-08:00'
								useDaylightTime='1'
								value='US & Canada'>
								(GMT-08:00) Pacific Time (US & Canada)
							</option>
						</select>
					</div>
				</div>
				<div className='inputboxcover'>
					<div className='form-group  text-left'>
						<label htmlFor='exampleInputPassword1'>Password</label>
						<input
							type='password'
							className='form-control inputbox'
							id='password'
							placeholder='*****'
							value={userDetails.password}
							onChange={handelChange}
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='form-group form-check bgtsg'>
					<input
						type='checkbox'
						className='form-check-input'
						id='exampleCheck1'
					/>
					<label className='form-check-label' htmlFor='exampleCheck1'>
						I agree to the <span>Terms and Conditions.</span>
					</label>
				</div>
				<div className='d-flex flex-column p-0 justify-content-center align-items-center'>
					<button
						type='submit'
						className='themeButton loginButton'
						onClick={(e) => onSubmitSignIn(e)}>
						Sing Up
					</button>

					<label className='form-check-label' htmlFor='exampleCheck1'>
						Already have an account? <span>Log in</span>
					</label>
				</div>
			</form>
		</>
	);
};

export default SingUp2;
