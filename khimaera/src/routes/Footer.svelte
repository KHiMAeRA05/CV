<script>
	let telegram = '/telegram.png';
	let github = '/github.png';
</script>

<footer id="contact">
	<div>
		<h2 style="text-align: center; font-size: 4vw">Contact Me</h2>
	</div>
	<div class="row container">
		<div class="column contactme-left">
			<!--div class="phone">
              <p><span class="label-left">Phone:</span><a href="tel://79617425228"> +7 (961) 742-52-28</a></p>
            </div-->
			<div class="email">
				<p>
					<span class="label-left">Email:</span><a href="mailto:a.voronova@innopolis.university">
						a.voronova@innopolis.university</a
					>
				</p>
			</div>
			<div class="telegram">
				<a href="https://t.me/Himera_05">
					<img
						border="0"
						alt="github"
						src={telegram}
						style="max-width: 100px; max-height: 100px; float: left; margin: 20px"
					/>
				</a>
			</div>
			<div class="git">
				<a href="https://github.com/KHiMAeRA05">
					<img
						border="0"
						alt="github"
						src={github}
						style="max-width: 100px; max-height: 100px; float: left; margin: 20px"
					/>
				</a>
			</div>
		</div>
		<div class="column contactme-right">
			<form method="post" id="contactForm">
				<div class="contactForm-name">
					<label class="label" for="name">Full Name</label>
					<input class="form-control" type="text" id="name" name="name" placeholder="Name" />
				</div>
				<div class="contactForm-email">
					<label class="label" for="email">Email</label>
					<input class="form-control" type="text" id="email" name="email" placeholder="Email" />
				</div>
				<div class="contactForm-subject">
					<label class="label" for="subject">Subject</label>
					<input
						class="form-control"
						type="text"
						id="subject"
						name="subject"
						placeholder="Subject"
					/>
				</div>
				<div class="contactForm-message">
					<label class="label" for="message">Message</label>
					<textarea
						name="message"
						class="form-control"
						id="message"
						placeholder="Message"
						style="height: 112px;"
					/>
				</div>
				<div class="contactForm-input">
					<input type="submit" class="send-message" value="Send Message" />
				</div>
			</form>
		</div>
	</div>
</footer>
