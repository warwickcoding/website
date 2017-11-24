---
title: Home
projectname: home
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths, University of London.
---

<section class="switchable feature-large bg--secondary hero">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-5">
                <div class="switchable__text">
                    <img src="/assets/img/logo-hacksmiths.svg" alt="Hacksmiths Logo">
                    <p class="lead"> Warwick Coding is a student led coding course at the University of Warwick. Our mission is to provide the opportunity, for people in all departments and backgrounds, the chance to learn how to build, create and imagine through the world of technology. </p>
                    <a class="btn btn--sm btn--primary type--uppercase" href="/join"> <span class="btn__text">Sign Up - join for free</span> </a>
                    <br>
                    <a href="//www.youtube.com/watch?v=pkHNc2wiNxI" class="btn btn--sm type--uppercase" data-lity>
                        <i class="socicon icon socicon-youtube"></i>
                        <span>Courses</span>
                    </a>
                    <a href="https://m.me/smithsbot" class="btn btn--sm type--uppercase" target="_blank">
                        <i class="socicon icon socicon-messenger"></i>
                        <span>Get Updates</span>
                    </a>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="boxed boxed--lg boxed--border">
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Coding Courses &amp; Classes</h5>
                            <p>A friendly and supportive environment to play around with new ideas and get support. Suitable for all skill levels.<br></p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Guest Speakers &amp; Workshops</h5>
                            <p> A range of interesting content from students, staff and industry professionals. Suitable for complete beginners.</p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Hackathons &amp; Challenges</h5>
                            <p>Invention marathons which bring together people with varying skills to build awesome projects. Suitable for all skill levels.</p>
                        </div>
                    </div>
                    <div class="feature feature-2">
                        <div class="feature__body">
                            <h5>Not Convinced?</h5>
                            <p>Come along to one of our sessions! All are hosted free of cost and all of our course content is online to follow at your own pace.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="events">
    <div class="container">
        <div class="row">
            <h2>Our Courses</h2>
            {% for course in site.data.courses %}
                <div class="col-sm-4 event-single">
                    <a {% unless event.url == "undefined" %} href="{{event.url}}" {% endunless %}>
                        <div class="feature feature-1">
                            <div class="feature__body boxed boxed--border">
                                {% if course.past %}<span>Past</span>{% endif %}
                                <h5>{{course.name}}</h5>
                                <p>{{course.line}}</p>
                                <small>{{course.date}}</small>
                            </div>
                        </div>
                    </a>
                </div>
            {% endfor %}
        </div>
        <h3><a href="https://calendar.google.com/calendar/embed?src=jellybabi.es_l70qvq3qcvbe4sci1pskevfu4c%40group.calendar.google.com&ctz=Europe/London">Click here for a full calendar which you can import to your own apps.</a></h3>
    </div>
</section>

{% include valuable-skills.html %}
