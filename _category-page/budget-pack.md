---
title: budget pack
layout: productCategory
category-image: http://lorempixel.com/360/210/fashion/2
is-promo: false
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
---

<div class="container">
    <h2>{{ page.title | capitalize}}</a></h2>
    <div id="products" class="row list-group">
        {% for product in site.products %}
            {% for category in product.categories %}
                {% if category == page.title %}
                <div class="item col-sm-6 col-lg-4">
                    <div class="thumbnail">
                        <img class="group list-group-image" src="http://placehold.it/640x400/000/fff" alt="" />
                        <div class="caption">
                            <h4 class="group inner list-group-item-heading">{{ product.title }}</h4>
                            <p class="group inner list-group-item-text">{{ product.content }}</p>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <p class="lead">₱ {{ product.price }}</p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <a class="btn btn-success" href="{{ product.url }}">View More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {% endif %}
            {% endfor %}
        {% endfor %}
    </div>
</div>