---
title: Team
projectname: team
layout: default
og: og.png
one_line: Hacksmiths is the award-winning student-run tech society at Goldsmiths, University of London.
---


<section class="text-center team">
  <div class="container">
    <h1>Our Team</h1>
    <h2>Here's the team that makes it all possible!</h2>
    <div class="row">
      {% for person in site.data.team %}
        <div class="col-sm-3">
          <div class="feature feature-8">
            <img src="/assets/img/team/{{person.photo}}.jpg">
            <h5>{{person.name}}</h5>
            {% if person.role %}
              <span>{{person.role}}</span>
            {% else %}
              <span>Committee Member</span>
            {% endif %}
            <br><a href="mailto:{{person.email}}">{{person.email}}</a>
          </div>
        </div>
      {% endfor %}
    </div>
    <p>Interested in teaching? We're actively recruiting teachers for courses.</p>
  </div>
</section>

<hr>