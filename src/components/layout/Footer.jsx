import logo from "@/assets/oba-logo-grey.png";

export default function Footer() {
	return (
		<>
			<div className="w-full bg-gray-200 p-4 text-center font-semibold">
				<a href="#">Back to top</a>
			</div>
			<footer className="w-full bg-[var(--oba-dark-green)]">
				<div className="w-full max-w-[1200px] mx-auto grid md:grid-cols-3 gap-4 p-5 lg:py-10 text-white">
					<div className="col-span-2 grid md:grid-cols-3 gap-4">
						<div>
							<p className="font-bold text-xl pb-6">Get to Know Us</p>
							<ul className="flex flex-col gap-4 text-[14px]">
								<li>
									<a href="/">About Oba</a>
								</li>
								<li>
									<a href="/">Terms of Service</a>
								</li>
								<li>
									<a href="/">FAQ</a>
								</li>
								<li>
									<a href="/">Blog</a>
								</li>
								<li>
									<a href="/">Location</a>
								</li>
							</ul>
						</div>

						<div>
							<p className="font-bold text-xl pb-6">Let Us Help You</p>

							<ul className="flex flex-col gap-4 text-[14px]">
								<li>
									<a href="/">Help & Support</a>
								</li>
								<li>
									<a href="/">Your Order</a>
								</li>
								<li>
									<a href="/">Privacy Policy</a>
								</li>
								<li>
									<a href="/">Return & Refund</a>
								</li>
								<li>
									<a href="/">Login</a>
								</li>
							</ul>
						</div>

						<div>
							<p className="font-bold text-xl pb-6">Contact Us</p>
							<ul className="flex flex-col gap-4 text-[14px]">
								<li>
									Oba Foodstufff Delivery, 123 Main Street, Suite 101 New
									York, <br />
									Ny 10001 USA.
								</li>
								<li>
									<span className="font-bold text-[14px]">Phone: </span>
									<a href="tel:+1155511234587">+1 15551 123-4587</a>
								</li>
							</ul>
							<div className="flex gap-3">
								<a href="/">
									<img
										src="./src/assets/icons8-twitter-bird.svg"
										alt="An twitter icon for social media"
										className="size-7"
									/>
								</a>

								<a href="/">
									<img
										src="./src/assets/icons8-gmail.svg"
										alt="An Gmail icon for email"
										className="size-7"
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<img src={logo} alt="Oba Logo" className="w-3/4 object-contain" />
					</div>
				</div>
			</footer>
		</>
	);
}
