---
layout: post
title: 二分（hot100 & acwing & 个人总结）
date: 2025-02-14 02:46:45
description: 学习二分查找思想和板子，总结经验，刷题
tags: code algorithm acwing binary-search
categories: learning-notebook
---

# 前言

- 被这个二分查找折磨得实在是不成样子了，感觉题目很难想出来，题目即使ac了也感觉莫名奇妙的

# 思想

## 整数二分

- 整数二分的本质：给定一个性质，将一个区间划分为**满足该性质**和**不满足该性质**的两个区间，通过二分可以查找到**区间的边界**。如图所示，下图的红绿边界的端点都可以被找到，对应不同的模版
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/screenshot/整数二分的示意图.png" title="整数二分的示意图" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### 寻找红色边界端点

- 初始化`l = 0, r = vec.size(), mid = (l + r + 1) / 2`

$$mid = \frac{l+r+1}{2}$$

- 判断`mid`指向的元素是否符合红色区域性质
  - 如果符合，则说明红色区间端点位于`[mid, r]`，更新`l = mid`
  - 如果不符合，则说明红色区间端点位于`[l, mid - 1]`，更新`r = mid - 1`

#### 为什么要`+ 1`呢？

- 当`l = r - 1`时，`mid = (l + r) / 2`的计算结果为`(l+r)/2 = (r-1+r)/2 = r-1 = l`
- 此时，若`check(mid)`返回`true`，则将进入死循环
- 当`+ 1`之后，`mid = (l + r + 1) / 2 = r`，更新后`l = r`，可以中止循环

### 寻找绿色边界端点

- 初始化`mid = (l + r) / 2`
  $$mid =\frac{l+r}{2}$$
- 判断`mid`指向的元素是否满足绿色区域性质
  - 如果符合，则说明绿色边界端点位于`[l, mid]`之间，更新`r = mid`
  - 如果不符合，则说明绿色边界端点位于`[mid + 1, r]`， 更新`r = mid + 1`

### 解题心路历程

- 写一个`check`函数
- 根据`check`函数中定义的要获取哪个区间的端点，来确定`mid`是否需要`+ 1`
  - 如果寻找的是红色区间端点，那么就需要`+ 1`
  - 如果寻找的是绿色区间端点，那么就不需要`+ 1`

# 模版

## 寻找红色边界端点

```cpp
int main(){
    int l = 0, r = vec.size() - 1;
    while(l < r){
        int mid = (l + r + 1) / 2;
        if(nums[mid] <= target)
            l = mid;
        else
            r = mid - 1;
    }

    cout << l << endl;
}
```

### 为什么l一定能等于r

- 假设`l = r - 1`，那么`mid = (l + r + 1) / 2 = r`
- 两种更新方式：
  - `l = mid`: 那么`l = r`
  - `r = mid - 1`: 那么`r = r - 1 = l`

### 为什么`l == r`（循环中止的时候），l指向的元素一定是端点

- 证明$\text{nums}[l]\leq \text{target}, \text{nums}[r+1] > target$
- 假设在第k次循环中，$\text{nums}[l]\leq \text{target}, \text{nums}[r+1] > target$成立
  - 如果$\text{nums}[mid] \leq \text{target}$，那么$l = mid$
    - 对于$\text{nums}[l]\leq \text{target}$：$\text{nums}[l] = \text{nums}[mid]\leq \text{target}$，依旧成立
    - 对于$\text{nums}[r+1] > target$：$r$没变，依旧成立
  - 如果$\text{nums}[mid] > \text{target}$，那么$r = mid - 1$
    - 对于$\text{nums}[l]\leq \text{target}$：$l$没变，依旧成立
    - 对于$\text{nums}[r+1] > \text{target}$：$\text{nums}[r+1] = \text{nums}[mid]>\text{target}$，依旧成立
- 在循环中止时，$l = r$，此时$\text{nums}[l]\leq \text{target},\text{nums}[r+1]=\text{nums}[l+1]>\text{target}$，所以$l$就是所求区间的端点

## 寻找绿色边界端点

```c++

int main(){
    int l = 0, r = vec.size() - 1;
    while(l < r){
        int mid = (l + r) / 2;
        if(nums[mid] >= target)
            r = mid;
        else
            l = mid + 1;
    }

    cout << l << endl;
}
```

### 为什么l一定能等于r

- 假设`l = r - 1`，此时`mid = (l + l + 1) / 2 = l`
- 两种更新方式：
  - `r = mid`: 那么`r = mid = l`
  - `l = mid + 1`: 那么`l = l + 1 = r`

### 为什么`l == r`（循环中止的时候），l指向的元素一定是端点

- 证明`nums[l - 1] < target（l > 0）, nums[r] >= target`
- 初始
  - 两个条件一定符合
- 循环中
  - 假设对于第k次
    - `nums[l - 1] < target`成立
      - 在第`k + 1`次中，如果更新`r`，那么`nums[l - 1] < target`依旧成立;如果更新`l`，那么说明`nums[mid] < target`，此时`l - 1 = mid`，所以`nums[l - 1] = nums[mid] < target`
      - 得证
    - `nums[r] >= target`成立
      - 如果更新`l`，那么依旧成立；如果更新`r`， `r =  mid`， `nums[r] = nums[mid] >= target`
      - 得证
- 循环结束时，由于前面的证明，我们知道`nums[l - 1] < target, nums[r] >= target`，由于`l = r`，那么`nums[l - 1] < target, nums[l] >= target`
- 综上，我们可以说`l`指向的元素就是我们查找的红色区间的端点

# 刷题

## LeetCode

### 搜索二维矩阵

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/screenshot/搜索二维矩阵.png" title="搜索二维矩阵" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### 知识点

#### 解题思路

- 首先确定要划分的左右区间，左边区间为`<= target`，右边区间为`> target`
- 我们要寻找的就是左侧区间端点，只有左侧区间端点才有可能等于`target`，如果端点不等于，那么该矩阵中就没有`target`
- 根据分析，此时`mid = (l + r + 1) / 2`，经过一系列迭代后，`l == r`退出循环
- 返回`l`，即为端点值

#### 实现代码

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {

        int l = 0, r = matrix.size() - 1;

        while(l < r){
            int mid = (l + r + 1) / 2;

            if(matrix[mid][0] <= target){
                l = mid;
            }else{
                r = mid - 1;
            }
        }

        if(matrix[l][0] == target)
            return true;


        int index = l;

        l = 0, r = matrix[index].size() - 1;
        while(l < r){
            int mid = (l + r + 1) / 2;

            if(matrix[index][mid] <= target){
                l = mid;
            }else{
                r = mid - 1;
            }
        }

        if(matrix[index][l] == target)
            return true;
        else
            return false;
    }
};
```

# 参考资料链接

- [AcWing: 二分查找-数的范围课程](https://www.acwing.com/video/231/)
- [AcWing: 二分查找算法模板By Yxc](https://www.acwing.com/file_system/file/content/whole/index/content/3073/)
- [CSDN博客：不需要考虑mid + 1, mid - 1的二分查找模版](https://blog.csdn.net/WJPnb1/article/details/126360962?spm=1001.2014.3001.5502)
- [B站视频：二分查找为什么总是写错？](https://www.bilibili.com/video/BV1d54y1q7k7/?spm_id_from=333.337.search-card.all.click&vd_source=d6c2594da70bed6663d829af474e8518)
- [AcWing-题解-数的范围（详细分析二分过程）](https://www.acwing.com/solution/content/3338/)

# 草纸

- r = l + 1;
- mid = (l + r) / 2 = (2l + 1) / 2 = l
