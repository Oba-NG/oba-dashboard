/** @format */

export default function Footer() {
	return (
		<footer>
			<div className="grid grid-cols-3 px-2 gap-4 text-white bg-[#2D4C2E] py-4  ">
				{/* border-black border-2 */}
				<div>
					<p className="font-bold pb-4">Get to Know Us</p>
					<ul className="leading-7 text-[14px]">
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
					<p className="font-bold pb-4">Let Us Help You</p>

					<ul className="leading-7 text-[14px]">
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
					<p className="font-bold pb-4">Contact Us</p>
					<ul className="leading-7 text-[14px]">
						<li>
							Oba Foodstufff Delivery, 123 Main Street, Suite 101 New
							York, <br />
							Ny 10001 USA.
						</li>
						<li>
							<span className="font-bold ">Phone: </span>+1 15551
							123-4587
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
		</footer>
	);
}
