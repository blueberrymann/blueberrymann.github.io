---
layout: page
title: 厦门游记
description: 在厦门玩了5天，不愧是旅行城市，真的让人流连忘返
img: assets/img/xiamen_beach_with_grace.jpg
importance: 1
category: 国内
# related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Travel_to_Xiamen/209Kezaijian.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Travel_to_Xiamen/Eggplant.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Travel_to_Xiamen/Robster_1st.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    在厦门的美食们，仅仅展示了一部分哦
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Travel_to_Xiamen/Bear_and_Rabbit_on_Beach.png" title="bear & rabbit on Gulang Island's Beach" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    We found a bear and a rabbit on the beach. Amazing!
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center align-items-start">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Travel_to_Xiamen/Big_Guanfengqin.png" title="管风琴全景" class="img-fluid rounded z-depth-1" %}
        <div class="caption">厦门鼓浪屿协和礼拜堂的宏伟管风琴</div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0 d-flex justify-content-center">
        <div style="max-width: 300px;">
            {% include figure.liquid path="assets/img/Travel_to_Xiamen/Guanfengqin_Detail.png" title="管风琴细节" class="img-fluid rounded z-depth-1" style="max-width: 100%; height: auto; object-fit: contain;" %}
            <div class="caption">精美的管风琴装饰细节</div>
        </div>
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}

##

1. 我说我爸单位有个师傅做馅饼好吃
2. 石头问那个师傅是不是在棒棰岛（这里就有点费解了，突然跳跃到了棒棰岛）
3. 我说你咋知道呢？石头说：因为棒棰岛上有好多师傅给国家领导人做饭
4. 我说你咋知道呢?
5. 石头说：**我是棒棰岛**

<!-- <embed src="/assets/pdf/gaomingce_cv.pdf" type="application/pdf" width="100%" height="600px" /> -->
