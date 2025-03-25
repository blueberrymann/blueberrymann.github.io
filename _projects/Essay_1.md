---
layout: page
title: 资源解耦的联邦学习：一种新型三方博弈激励机制解读
description: 论文复盘｜Data Assetization via Resources-Decoupled Federated Learning
img: assets/img/projects/Data_Assetization主图.png
importance: 1
category: 学术
giscus_comments: false
mermaid: true
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

### 问题陈述

#### 全局效用优化 (Global Utility Optimization)

- 我们设计的资源解耦的联邦学习目标是通过最小化全局损失函数来优化全局模型参数$w^*$
  - 全局损失函数如下公式所示，是通过所有计算中心的训练损失的加权平均计算得来的。

$$
\underset{w*}{\min}F(w)=\sum^K_{i=1}p_iF_i(w)
$$

- 其中$p_i=\frac{x_n}{\sum_Kx_n}$，即为数据拥有者$D_n$贡献的数据占所有数据的比例

#### 计算中心效用 (Utility of Computing Center)

$$
\begin{cases}
\displaystyle \arg\max_{d_m} U_m(d_m) = \lambda \cdot \frac{d_m}{\sum_{m=1}^{M} d_m} \cdot \sum_{n=1}^{N} \rho x_n - \varepsilon \sigma_m d_m, \\\\
\text{s.t.} \quad \rho \geq 0
\end{cases}
$$

    s.t. 表示subject to，意为“满足如下约束条件”

|     符号      |                       描述                       |                    作用                     |
| :-----------: | :----------------------------------------------: | :-----------------------------------------: |
|   $\lambda$   |             Market regulating factor             | 用于调节数据拥有者和计算中心的成本-收益关系 |
|     $d_m$     |            计算中心$C_m$承担的数据量             |                     \                       |
|    $\rho$     |          单位数据量支付给计算中心的报酬          |                     \                       |
| $\varepsilon$ | 使用单位数据量进行训练时，计算中心需要支付的成本 |                     \                       |
|  $\sigma_m$   |                  计算中心的算力                  |                     \                       |

#### 数据拥有者效用 (Utility of Data Owner)

$$
\begin{cases}
\displaystyle \arg\max_{q_n} \quad U_n(q_n, q_{-n}) = \frac{q_n}{\sum_{n=1}^{N} q_n} \cdot \eta - \lambda \rho x_n, \\\\[10pt]
\text{s.t.} \quad
\begin{cases}
q_n = f_n x_n, \\\\
0 < x_n < |X_n|, \\\\
f_n \geq \xi.
\end{cases}
\end{cases}
$$

| 符号     | 描述                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------- |
| $q_n$    | 每个数据拥有者对全局模型的贡献                                                                  |
| $f_n$    | 贡献的数据质量                                                                                  |
| $x_n$    | 贡献的数据量(quantity)                                                                          |
| $q_{-n}$ | $q_{-n}=\{q_1, q_2, ..., q_{n-1}, q_{n+1}, ..., q_N\}$，所有贡献除了数据拥有者$D_n$的贡献的序列 |
| $\eta$   | 模型拥有者的总支付                                                                              |

#### 模型拥有者效用 (Utility of Model Owner)

- 全局模型越好越有价值，但得控制激励成本 $\eta$。

$$
\begin{cases}
\displaystyle \arg\max_{\eta} \quad U_s(\eta) \quad n \in [1, N], \\\\[10pt]
\text{s.t.} \quad
\begin{cases}
U_s(\eta) = \alpha \cdot g\left( \sum_{n=1}^{N} q_n \right) - \eta, \\\\
\eta \geq 0.
\end{cases}
\end{cases}
$$

| 符号     | 描述                                  |
| -------- | ------------------------------------- |
| $\alpha$ | 全局模型质量对收益的敏感度（正数）    |
| $g(x)$   | 模型质量的效用函数，通常设为$ln(1+x)$ |

### 三方 Stackelberg 模型(Tripartite Stackelberg Model)

- 为三方构建了Stackelberg博弈模型，并定义了Stackelberg-Nash均衡来获取全局最优值
- 策略配置为$<\eta^*, Q^*, G^*>$，策略实施步骤如下
  - 第一步：模型拥有者首先确定全局最优奖励$\eta^*$
  - 第二步：数据拥有者们之间进行Nash均衡博弈，决定提供的数据质量和数据量，也就是每个数据拥有者对于全局模型的贡献$q^*_n$
  - 第三步：每个算力中心根据最优承担的数据量$d^*_m$，选择一个特定的数据拥有者，并建立最优匹配关系$G_m^*$
- 我们将资源解耦型的联邦学习定义为三方Stackelberg模型，其中：
  - 模型拥有者作为领导者
  - 数据拥有者作为次级领导者
  - 计算中心作为跟随者

**定义 1：Tripartite Stackelberg Model**

$$
\begin{cases}
\textit{Leader } S:\quad \eta^* = \arg\max_{\eta} U_s, \\\\[8pt]
\textit{Sub-Leaders } D_n:\quad q_n^* = \arg\max_{q_n} U_n, \quad n = 1, \dots, N, \\\\[8pt]
\textit{Followers } C_m:\quad G_m^* = \arg\max_{G_m} U_m, \quad m = 1, \dots, M.
\end{cases}
$$

- 定义1说明了，每个参与方都是力求自己的效用最大

**定义 2：Stackelberg-Nash Equilibrium 的条件表达式**

$$
\begin{cases}
U_s(\eta^*, Q^*, G^*) \geq U_s(\eta, Q^*, G^*), \\\\
U_n(\eta^*, q_n^*, q_{-n}^*, G^*) \geq U_n(\eta^*, q_n, q_{-n}^*, G^*), \quad n = 1, \dots, N, \\\\
U_m(\eta^*, Q^*, G_m^*) \geq U_m(\eta^*, Q^*, G_m), \quad m = 1, \dots, M.
\end{cases}
$$

- 上式说明了，三方博弈模型中任意一方不能通过自己的策略来获得更好的收益

## 附 (知识点)

### Stackelberg 博弈模型

- 这种模型的决策是**有顺序**的
- 是一种非对称博弈模型，场景中有领导者 (leader) 和跟随者 (follower)
- 领导者先行动，跟随者看到领导者的策略后再选择自己的最优策略
- 例如：
  - 企业定价 vs 消费者反应
  - 政策制定 vs 市场反应

### Nash 均衡 (Nash Equilibrium)

- 一种策略组合状态，在这个状态下，每个人都无法通过改变自己的状态来增加收益
- **策略是平衡的，每个人都不想变了**
- 所有参与者都同时做决策，每个人都试图最大化自己的收益
- 例如：
  - 石头剪刀布游戏

### Stackeelberg-Nash 均衡

- 在一个复杂的系统中，我们会遇到：
  - 一部分人先进行决策 —— **Stackelberg**
    - 模型拥有者先进行定价
  - 另一部分人在已知前者的策略下，与自己的同种类的参与者进行竞争 —— **Nash**
    - 多个数据拥有者之间进行竞争
- 因此，出现了一个结合的状态 **Stackelberg-Nash均衡（NSE）**

### Gale-Shapley 算法

- 又叫延迟接受算法 / 稳定婚姻匹配算法，用于解决双边匹配算法
- 目标：**在两个群体之间，找到一个稳定匹配（每个稳定匹配中包含多组两两匹配）**
  - 稳定：已配对的两个个体不会打破形成的匹配，去选择另外另外的个体
- 算法的基本流程，以“男追女”作为说明：
  - 所有人都有一个偏好列表，例如$M_1$喜欢$W_1 > W_2 > W_3$
  - 在每一轮中：
    - 每位男士会向他最喜欢的、还没拒绝他的女士发出*邀请*
    - 每位女士会收到多个提议，并“暂时接受”她最喜欢的那个人，拒绝其余的（注意：**女士也有一个偏好列表**）
    - 被拒绝的男士下一轮喜欢的对象
  - 持续进行，直至：
    - 所有人都匹配成功
    - 没有人再提出新的请求
  - 最终形成的匹配是稳定且最优的（对主动方而言）
