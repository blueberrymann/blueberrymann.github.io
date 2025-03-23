---
layout: page
title: 资源解耦的联邦学习：一种新型三方博弈激励机制解读
description: 论文复盘｜Data Assetization via Resources-Decoupled Federated Learning
img: assets/img/projects/Data_Assetization主图.png
importance: 1
category: work
giscus_comments: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Data_Assetization主图.png" title="Data Assetaization via Resource-Decoupled FL" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Data Assetaization via Resource-Decoupled FL
</div>

## 主要创新点

### 提出了“资源解耦联邦学习”框架

- 不同于传统联邦学习假设每个参与者既拥有数据又具备计算能力，本文考虑到了数据资源和计算资源的分离——即**数据拥有者没有算力，计算中心没有数据**。
- 我们构建了一个由三方组成的新型框架联邦学习：
  - 模型拥有者 (Model Owner)：负责协调整体FL流程，设定激励策略。
  - 数据拥有者 (Data Owner)：提供不同质量和数量的数据，但计算能力有限。
  - 计算中心 (Computing Center)：提供计算资源，与数据拥有者匹配完成训练任务。

### 构建三方博弈模型（Tripartite Stackelberg Model）

- 本文提出了一个**三层Stackelberg 博弈模型**
  - 模型拥有者为领导者，决定奖励总额
  - 数据拥有者为第二层领导者，决定贡献数据的数量和质量
  - 计算中心为跟随者，决定是否参与和匹配数据

### 设计质量感知的动态资源解耦联邦学习算法（QR-RDFL）

- QR-RDFL: Quality-aware dynamic resource-decoupled FL algorithm
- 初始节点，根据数据拥有者报告的质量进行策略的生成
- 训练过程中，通过真实训练loss动态调整数据质量评估
- 使用Gale-Shapley算法对数据拥有者和计算中心进行一对一匹配

## 研究方法

### 问题重述

## 附 (知识点)

### Stackelberg 博弈模型

### Nash 均衡 (Nash Equilibrium)

### Gale-Shapley 算法

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
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
