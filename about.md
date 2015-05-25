---
layout: about
title: About me
subtitle: I’m a senior designer at <a href="http://mangrove.com">Mangrove</a> in Rotterdam, The&nbsp;Netherlands.I’ve had the privilege to work for <a href="/work/hogeveluwe">National Park De Hoge Veluwe</a>, <a href="/work/kwikfit">Kwik-Fit</a> and <a href="/work/hartstichting">The&nbsp;Dutch Heart Foundation</a>.
permalink: /about/
menu: main
intro: I spend my days creating beautiful and usable websites. In my spare time I like to spend time with my wife and 4-year-old daughter Juliet.
---

I love to travel and take photographs. I grew up on a steady diet of comic books and LEGO®. I’ve been playing basketball since I was little and still do to this day.

Prior to Mangrove, I worked as designer at <a href="http://vicompany.nl"  target="_blank">VI Company</a>, <a href="http://haai.nl" target="_blank">hAAi</a> and <a href="http://2d3d.nl" target="_blank">2D3D</a> where I worked for clients such as The Make-A-Wish Foundation, Aids Fund and ING. I&nbsp;studied Graphic Design at the <a href="http://glr.nl" target="_blank">Grafisch Lyceum</a> in Rotterdam.

This site is hacked together in <a href="http://jekyllrb.com/" target="_blank">Jekyll</a> using Sublime Text 3. <a href="https://www.google.com/fonts/specimen/Raleway" target="_blank">Raleway</a> is the typeface, created by <a href="http://matt.cc/" target="_blank">Matt McInerney</a> and <a href="http://www.impallari.com/" target="_blank">Pablo Impallari</a>. I use it as a playground and to keep-up to-date with front-end development. Sorry for the mess.

<div class="row">

	<h3>Stuff I’ve written:</h3>

		<ul class="post-list">
		  <!-- <li>
		    <span class="post-meta"></span>
		      <a class="post-link" href="https://medium.com/@jpkoudstaal/brooklyn-beta-2013-bda8fec41ac" target="_blank">Farewell Brooklyn Beta</a>
		  </li>
		  <li>
		    <span class="post-meta"></span>
		      <a class="post-link" href="https://medium.com/@jpkoudstaal/the-rights-and-wrongs-in-typesetting-f8fe00baef81" target="_blank">The Rights and Wrongs in Typesetting</a>
		  </li> -->

		{% for post in site.posts %}
		  <li>
		    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
		      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
		  </li>
		{% endfor %}
		
		</ul>
</div>


<div class="row summer" style="max-width:640px;margin:40px auto;">
	<div class="block">
		{% picture [] jpkoudstaal_by_miekd.jpg [attribute="Jan-Paul Koudstaal – Photo: Maykel Loomans "] %}
		<!-- {% picture [] jpkoudstaal_by_bas_berkhout.jpg [attribute="Jan-Paul Koudstaal – Photo: Bas Berkhout "] %} -->
	</div>
	<div class="block padding-md">

		<h3>Get in touch</h3>
		<a href="mailto:hi@jpkoudstaal.com">hi@jpkoudstaal.com</a>

		<h3>Find me on</h3>
		<ul class="list-inline">
			<li><a href="https://twitter.com/jpkoudstaal" target="_blank">Twitter</a></li>
			<li><a href="https://instagram.com/jpkoudstaal" target="_blank">Instagram</a></li>
			<li><a href="http://nl.linkedin.com/in/jpkoudstaal/" target="_blank">Linkedin</a></li>
		</ul>
		<p class="small muted">Photo: <a href="http://www.maykelloomans.com/" target=_"blank">Maykel Loomans</a></p>
	</div>
</div>

<!-- 
Countries I’ve visited: -->


